# Panorama deployment entry point

The supported hosted deployment is Coolify using Nixpacks. The source-controlled build contract is [`nixpacks.toml`](nixpacks.toml); the full operator procedure is [docs/GITHUB_AND_COOLIFY_DEPLOYMENT.md](docs/GITHUB_AND_COOLIFY_DEPLOYMENT.md).

Required production behavior:

```bash
npm ci
npm run build
HOSTNAME=0.0.0.0 PORT=3000 npm run start
```

The application is a server-rendered Next.js service, not a static-site deployment. Set Coolify's exposed port to `3000`, leave **Is it a static site?** disabled, and configure the public Punycode hostname `xn--mgbaab0cxheq.tech`.

`NEXT_PUBLIC_SITE_URL` and other `NEXT_PUBLIC_*` settings are build-time public values. Set them in Coolify with **Build and Runtime** scope before deployment. Never supply private credentials in those fields.
