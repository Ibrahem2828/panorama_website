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
