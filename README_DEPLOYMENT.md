# Panorama deployment entry point

The supported hosted deployment is **Coolify using the Dockerfile build pack**. The source-controlled image contract is [`Dockerfile`](Dockerfile); the complete operator procedure is [docs/GITHUB_AND_COOLIFY_DEPLOYMENT.md](docs/GITHUB_AND_COOLIFY_DEPLOYMENT.md).

Required local verification:

```bash
npm ci
npm run type-check
npm run lint
npm run test
npm run build
```

Build and run the production container locally:

```bash
docker build --build-arg NEXT_PUBLIC_SITE_URL=https://xn--mgbaab0cxheq.tech -t panorama-website .
docker run --rm -p 3000:3000 panorama-website
```

The image runs the standalone Next.js server as an unprivileged user with `HOSTNAME=0.0.0.0` and `PORT=3000`. It is a server-rendered service, not a static-site deployment. In Coolify set **Build Pack** to `Dockerfile`, set the exposed port to `3000`, leave **Is it a static site?** disabled, and configure the public Punycode hostname `xn--mgbaab0cxheq.tech`.

`NEXT_PUBLIC_SITE_URL` and other `NEXT_PUBLIC_*` settings are build-time public values. Set them in Coolify with **Build and Runtime** scope before deployment. Never supply private credentials in those fields.
