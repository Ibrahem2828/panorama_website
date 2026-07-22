# Panorama website

Panorama is a bilingual public website for a student volunteer community at the Syrian Private University. Arabic is the deterministic default at `/`; English is served under `/en`.

The completed Phase 1 and Phase 2 information architecture, visual identity, motion system, themes, faculty pages, static contact surfaces, feature flags, and localized content are intentionally preserved.

## Runtime contract

- Next.js `16.2.10` with `output: "standalone"`.
- Local, CI, Docker, and Coolify use Node `22.23.1`; `.nvmrc` pins that verified production runtime.
- npm lockfile is authoritative. Use `npm ci`; do not replace it with an unpinned install in CI or deployment.
- The production server is `node .next/standalone/server.js`, started through `npm run start`. Do not use `next start` while standalone output is enabled.

## Install, verify, and run

```bash
npm ci
npm run type-check
npm run lint
npm run test
npm run build
```

PowerShell:

```powershell
$env:HOSTNAME = "0.0.0.0"
$env:PORT = "3000"
npm run start
```

POSIX shell:

```bash
HOSTNAME=0.0.0.0 PORT=3000 npm run start
```

`prestart` copies `public` and `.next/static` into the standalone directory before the server starts. This is required when running the standalone output directly outside the Docker image.

`npm run type-check` first runs `next typegen`, so a clean checkout does not need a prior Next build or dev-server run. Generated `next-env.d.ts` and `.next` files are intentionally ignored.

## Public configuration

Copy `.env.example` to `.env` only for local or deployment configuration. Every `NEXT_PUBLIC_*` value is public and becomes part of the built website; never put credentials, API keys, or private contact data in these variables.

- Official identity domain: `https://بانوراما.tech`
- Technical DNS/TLS/Coolify hostname: `https://xn--mgbaab0cxheq.tech`
- `src/config/site.ts` is the sole source for public identity, contact, social links, feature flags, assets, canonical URL, and metadata inputs.

Unknown optional contact and social values must remain empty. The UI hides unconfigured channels rather than fabricating destinations.

## Repository quality gates

GitHub Actions runs `npm ci`, type checking, linting, tests, and the production build on Node `22.23.1` for pushes and pull requests to `main`. Dependabot opens weekly npm update pull requests for review.

Before a release, run the same commands locally and review the release checklist. Do not commit `node_modules`, `.next`, logs, `.env` files, screenshots, or generated TypeScript build-info files.

## Deployment

Coolify/Dockerfile is the primary hosted deployment path. See [the GitHub and Coolify guide](docs/GITHUB_AND_COOLIFY_DEPLOYMENT.md) for the exact Coolify settings, environment scopes, Punycode domain, verification, rollback, and security checklist.

The Dockerfile and Compose files support local and private Linux deployments as well. See [the production runbook](docs/PRODUCTION_DEPLOYMENT_RUNBOOK.md).

## Documentation

- [Repository readiness report](docs/REPOSITORY_READINESS.md)
- [Phase 3 closure report](docs/PHASE_3_CLOSURE_REPORT.md)
- [Runtime verification](docs/RUNTIME_VERIFICATION_REPORT.md)
- [Final release checklist](docs/FINAL_RELEASE_CHECKLIST.md)
- [Content owner checklist](docs/CONTENT_OWNER_APPROVAL_CHECKLIST.md)
- [Known limitations](docs/KNOWN_LIMITATIONS.md)
