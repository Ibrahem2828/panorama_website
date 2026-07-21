# GitHub and Coolify/Dockerfile deployment guide

## 1. Prepare GitHub

1. Push the reviewed `main` branch, including the updated `package-lock.json` and `Dockerfile`.
2. Confirm the GitHub Actions workflow is green. It runs the same install, type check, lint, test, and build gates.
3. Do not store Coolify tokens, SSH keys, DNS credentials, or mail credentials in the repository or in any `NEXT_PUBLIC_*` variable.

## 2. Configure the existing Coolify resource

Coolify defaults to Nixpacks. The failed deployment used that default, as shown by the `nixpacks plan` line in its log. Merely committing a Dockerfile does not change the build pack of an existing resource.

Open the application resource in Coolify and set these values before clicking **Redeploy**:

| Coolify setting | Required value |
| --- | --- |
| Build Pack | `Dockerfile` |
| Dockerfile Location | `/Dockerfile` |
| Base Directory | `/` |
| Static Site | Disabled |
| Port Exposes | `3000` |
| Branch | `main` |
| Inject Build Args | Enabled (default) |
| Install / Build / Start command overrides | Empty |

The Dockerfile pins Node `22.23.1-bookworm-slim`, installs the lockfile with `npm ci`, runs type checking, linting, tests, and the production build. The runtime image contains only the standalone Next.js artifacts, listens on `0.0.0.0:3000`, runs as an unprivileged user, and exposes an HTTP health check. Keep Build Args injection enabled so owner-approved `NEXT_PUBLIC_*` values reach the Dockerfile `ARG` declarations.

## 3. Environment variables

Set public configuration values with **Build and Runtime** scope. Next.js embeds `NEXT_PUBLIC_*` values into its build, so Runtime-only scope is insufficient for these values.

```text
NEXT_PUBLIC_SITE_URL=https://xn--mgbaab0cxheq.tech
NEXT_PUBLIC_CONTACT_EMAIL=panoramacompany31@gmail.com
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/company.panorama?utm_source=qr&igsh=ZTZ1Z21wNG54ZWVx
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/share/1CvmsKTNKV/
HOSTNAME=0.0.0.0
PORT=3000
```

Only publish owner-approved contact and social values. Leave unknown optional variables from `.env.example` unset. Do not use `NEXT_PUBLIC_*` names for secrets. If future private build secrets are required, use Coolify's Docker Build Secrets feature rather than Docker build arguments.

## 4. Domain and TLS

1. Add `https://xn--mgbaab0cxheq.tech` as the technical domain in Coolify. Use this ASCII/Punycode hostname for DNS, TLS, and reverse-proxy configuration.
2. Point the official Arabic identity domain to the Coolify server using the DNS provider's IDN/Punycode controls.
3. Enable Coolify-managed TLS and Force HTTPS only after DNS resolves to the server.
4. Do not add HSTS manually until HTTPS is proven stable. Coolify's proxy owns the public TLS boundary.

## 5. Deploy and verify

After the image succeeds, verify externally:

```text
https://xn--mgbaab0cxheq.tech/
https://xn--mgbaab0cxheq.tech/en
https://xn--mgbaab0cxheq.tech/robots.txt
https://xn--mgbaab0cxheq.tech/sitemap.xml
```

Confirm HTTP redirects to HTTPS, the certificate is valid, Arabic `/` and English `/en` use their correct direction, public routes load with CSS and images, and Coolify reports the health check as healthy.

## 6. Rollback

Use Coolify deployment history to redeploy the last known-good image/commit. Do not hot-edit a running container. Record the failed commit, deployment log, affected URL, and the owner decision before issuing a corrective release.

## References

- [Coolify Dockerfile build pack](https://next.coolify.io/docs/applications/build-packs/dockerfile)
- [Coolify environment variables](https://coolify.io/docs/knowledge-base/environment-variables)
- [Docker multi-stage builds](https://docs.docker.com/build/building/multi-stage/)
