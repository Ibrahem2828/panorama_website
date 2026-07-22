# Docker deployment failure resolution

## Original failure

Coolify deployment commit `5a012dbb101690d0d9ed355ebd698f3d918de29a` reached `npm run test`, then failed the deployment-contract test with `ENOENT: no such file or directory, open '/app/Dockerfile'`.

## Root cause

`Dockerfile` was tracked by Git and the Docker build stage used `COPY . .`, but `.dockerignore` explicitly excluded `Dockerfile`. Docker therefore removed it from the context before `COPY . .`; the test correctly could not read `/app/Dockerfile`.

## Permanent repair

1. Removed the `Dockerfile` exclusion from `.dockerignore` while retaining exclusions for dependencies, build output, Git history, secrets, logs, coverage, and editor files.
2. Added `RUN test -f /app/Dockerfile` immediately after the build-stage source copy. A bad build context now fails with a direct, early assertion.
3. Updated the deployment-contract test to derive the repository root from `fileURLToPath(import.meta.url)`, assert that `Dockerfile` and `package-lock.json` exist with clear messages, and validate Docker semantics: Node 22, `npm ci`, quality gates, standalone/static/public copies, non-root runtime user, port 3000, standalone command, and health check.
4. Aligned Node `22.23.1` across Docker, `.nvmrc`, package engines, and GitHub Actions. No application dependency, Next.js, React, or npm package was upgraded.

## Follow-up repair: repository metadata is not a Docker build input

The first repair is confirmed by Coolify: `RUN test -f /app/Dockerfile` completed successfully. The next failed assertion was instead `Required repository file is missing: .github/workflows/ci.yml`.

That file is intentionally excluded by `.dockerignore`. GitHub Actions metadata is repository administration data, not an application input, and must not be copied into the production build context or runtime image. The defect was therefore an architectural coupling in the deployment-contract test, not a Docker context defect.

The checks are now separated deliberately:

1. `test/phase3-contracts.test.mjs` validates only the Docker production contract: `Dockerfile`, package manifests, standalone Next.js configuration, `npm ci`, release gates, standalone/static/public output, the unprivileged runtime user, `server.js`, port `3000`, and health behavior.
2. `scripts/verify-repository-contract.mjs` validates full-checkout repository metadata: `.github/workflows/ci.yml`, Node 22, and the CI `npm ci`, type-check, lint, test, repository-contract, and production-build steps.
3. `npm run test:repository` is run by GitHub Actions after the application tests. It is intentionally absent from the Dockerfile release-gate command, so the Docker build remains reproducible with `.github` excluded.

No Node, npm, Next.js, React, or application dependency version changed for this repair.

## Dockerfile-first Coolify settings

| Setting | Value |
| --- | --- |
| Build Pack | Dockerfile |
| Dockerfile Location | `/Dockerfile` |
| Base Directory | `/` |
| Static Site | Disabled |
| Publish Directory | Empty |
| Exposed Port | `3000` |
| Install / Build / Start overrides | Empty |
| Custom Docker Options | Empty |
| Domain | `https://xn--mgbaab0cxheq.tech` |

The visitor-facing identity domain is `https://بانوراما.tech`. Build arguments remain enabled only for approved public `NEXT_PUBLIC_*` values; secrets belong in Coolify runtime variables or Docker Build Secrets.

## Required final verification

Run the following only after a working Docker daemon is available:

```bash
docker build --no-cache --progress=plain -t panorama-website:release .
docker run --rm --name panorama-website-release -p 3000:3000 -e HOSTNAME=0.0.0.0 -e PORT=3000 panorama-website:release
```

Then perform the documented HTTP and health checks. Local Docker execution is not claimed complete until those commands and the running container succeed.
