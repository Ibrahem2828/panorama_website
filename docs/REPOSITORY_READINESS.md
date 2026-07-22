# Production readiness report

**Prepared:** 2026-07-22
**Scope:** reproducible Next.js standalone output, Dockerfile-first deployment, and Coolify configuration.

## Authoritative deployment contract

- The production definition is [`../Dockerfile`](../Dockerfile). There is no `nixpacks.toml` fallback.
- Node `22.23.1` is pinned consistently in the Docker image, `.nvmrc`, `package.json` engines, and GitHub Actions.
- The image uses `npm ci`, then type checking, linting, all repository tests, and `next build` before producing a runtime stage.
- The runtime stage contains only `public`, `.next/standalone`, and `.next/static`; it runs `server.js` as the unprivileged `nextjs` user on `0.0.0.0:3000` and has a Node-based health check.
- `.dockerignore` excludes generated output, dependencies, Git history, environment files, and editor artifacts, but deliberately includes `Dockerfile` and all required build inputs.
- `.github` remains deliberately excluded from the Docker context. `npm run test:repository` verifies the GitHub Actions workflow only in a full Git checkout; the Docker deployment-contract test has no repository-metadata dependency.

## Verification on 2026-07-22

| Check | Result |
| --- | --- |
| Clean `npm ci` | Passed; 415 packages installed from `package-lock.json` |
| `npm run type-check` | Passed; `next typegen` completed |
| `npm run lint` | Passed |
| `npm run test` | Passed, 8/8 |
| `npm run test:repository` | Passed; verifies Node 22 and all required GitHub Actions gates in `.github/workflows/ci.yml` |
| `npm run build` | Passed with Next.js 16.2.10 standalone output |
| Direct standalone runtime | Started on `0.0.0.0:3000` as documented |
| Route smoke test | 24 valid locale/faculty routes returned 200; documents returned 200; invalid route and invalid faculty slug returned safe 404s |
| Static runtime assets | 19 CSS/JS bundles and 29 published public assets returned 200; configured logo paths have zero Linux case mismatches |
| Docker Compose syntax | `docker compose config --quiet` passed |

The local host running these checks has Node 20.19.6/npm 11.16.0, so npm emits an engine warning after the production contract was pinned to Node 22.23.1/npm 10.9.8. That warning does not alter the successful checks. The Docker build is the authoritative Node 22/npm 10 validation.

## Current external blocker

The repository-level Docker context defect is repaired, but the local Docker engine is unavailable: Docker Desktop reported approximately 757 MB free disk space while its recovery/update requires approximately 3.46 GB, and `com.docker.service` cannot be started by this session. Consequently, no local Docker image ID, image size, container runtime, or Docker health status can honestly be recorded yet. See [DEPLOYMENT_FAILURE_RESOLUTION.md](DEPLOYMENT_FAILURE_RESOLUTION.md).

## Security decision required

`npm audit --omit=dev` reports three production dependency advisories: two high (`next` via `sharp`) and one moderate (`next` via nested PostCSS). The audit's only automatic fix is an unsafe major downgrade to Next `9.3.3`, so it was not applied. The current Sharp advisory identifies `0.35.0` as the first patched version, but any Next/Sharp remediation must be selected as a compatible, supported update and then verified through the Docker build and runtime gates. Do not run `npm audit fix --force`.
