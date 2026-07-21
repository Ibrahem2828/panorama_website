# GitHub and Coolify/Nixpacks deployment guide

## 1. Prepare GitHub

1. Create an empty private or public GitHub repository as directed by the Panorama owner.
2. Verify before the first push that `.env`, `.next`, `node_modules`, logs, and local screenshots are absent from `git status`.
3. Push the `main` branch. GitHub Actions then runs the same reproducible gates used locally on Node 22.
4. Do not store Coolify tokens, SSH keys, DNS credentials, or mail credentials in the repository or any `NEXT_PUBLIC_*` variable.

The repository intentionally has no license file because a license choice is a content-owner/legal decision. Add one only after approval.

## 2. Configure Coolify

Create a new **Application** from the GitHub repository with these values:

| Coolify setting | Required value |
| --- | --- |
| Build Pack | `Nixpacks` |
| Base Directory | `/` |
| Static Site | Disabled |
| Port Exposes | `3000` |
| Branch | `main` (or the owner-approved release branch) |
| Install / Build / Start overrides | Leave empty; `nixpacks.toml` is authoritative |

`nixpacks.toml` instructs Coolify to install with `npm ci`, select Node 22, run type checking, linting, tests, and the production build in that order, then start the standalone server with `HOSTNAME=0.0.0.0` and Coolify's supplied `PORT` (defaulting to 3000 only when absent).

## 3. Environment variables

Set public configuration values in Coolify with **Build and Runtime** scope because Next.js embeds `NEXT_PUBLIC_*` values into the build.

```text
NEXT_PUBLIC_SITE_URL=https://بانوراما.tech
NEXT_PUBLIC_CONTACT_EMAIL=panoramacompany31@gmail.com
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/company.panorama?utm_source=qr&igsh=ZTZ1Z21wNG54ZWVx
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/share/1CvmsKTNKV/
HOSTNAME=0.0.0.0
PORT=3000
```

Only set contact and social values that the owner has approved for publication. Keep every unknown optional variable from `.env.example` empty or unset. Do not place secrets in `NEXT_PUBLIC_*` names.

## 4. Domain and TLS

1. In Coolify, add `https://xn--mgbaab0cxheq.tech` as the technical domain. Use this ASCII/Punycode form for DNS, TLS, and reverse-proxy configuration.
2. Point the DNS record for the official Arabic domain `بانوراما.tech` to the Coolify server according to the DNS provider's IDN/Punycode controls.
3. Enable Coolify-managed TLS and Force HTTPS only after DNS resolves to the server.
4. Do not add HSTS manually until HTTPS is proven stable. Coolify's proxy owns the external TLS boundary.

The application may render canonical metadata in Punycode because URL normalization converts the Unicode identity domain to its standards-compliant ASCII form.

## 5. Deploy and verify

After a successful build, verify from outside the deployment network:

```text
https://xn--mgbaab0cxheq.tech/
https://xn--mgbaab0cxheq.tech/en
https://xn--mgbaab0cxheq.tech/robots.txt
https://xn--mgbaab0cxheq.tech/sitemap.xml
```

Confirm:

- HTTP redirects to HTTPS and certificates are valid.
- Arabic `/` and English `/en` use the correct language and direction.
- The eight faculty routes work in both locales; invalid faculty slugs return a branded 404 with `noindex`.
- CSS, fonts, images, theme switching, mobile navigation, FAQ, static forms, social links, canonical URLs, sitemap, and robots work over the public hostname.
- Coolify health checks receive HTTP 200 from `/` on port 3000.

## 6. Rollback

Use Coolify's deployment history to redeploy the last known-good image/commit. Do not hot-edit the running container. Record the bad commit, deployment log, affected URL, and owner decision before a corrective release.

## 7. References

- [Coolify Next.js deployment guidance](https://coolify.io/docs/applications/nextjs)
- [Coolify Nixpacks guidance](https://coolify.io/docs/applications/build-packs/nixpacks)
- [Nixpacks Node provider](https://nixpacks.com/docs/providers/node)
- [Nixpacks configuration file reference](https://nixpacks.com/docs/configuration/file)
