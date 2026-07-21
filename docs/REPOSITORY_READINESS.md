# Repository readiness report

**Prepared:** 2026-07-21  
**Scope:** GitHub upload, reproducible npm install, standalone production output, and Coolify/Nixpacks deployment preparation.

## Source-control hygiene

- `.gitignore` excludes dependency folders, Next build output, environments, logs, coverage, screenshots, and generated `*.tsbuildinfo` files.
- `.gitattributes` normalizes text to LF for Linux deployment and marks binary assets correctly.
- `.env.example` is the public configuration template; no secret-bearing `.env` file is tracked.
- GitHub CI and Dependabot configuration are source controlled.

## Build and runtime contract

- `package-lock.json` is present and `npm ci` is mandatory in automation.
- `npm run type-check` invokes `next typegen` before TypeScript, so generated Next route types are available in a clean checkout; `next-env.d.ts` is generated and ignored rather than tracked.
- Next.js standalone output remains enabled; the start command remains `node .next/standalone/server.js`.
- `scripts/prepare-standalone.mjs` supplies public and static assets to a direct standalone run.
- Nixpacks explicitly uses Node 22 for Coolify while the package supports the verified local Node 20.19.6 through Node 22.

## Verification performed on 2026-07-21

| Check | Result |
| --- | --- |
| `npm ci` | Passed from the committed lockfile (413 packages) |
| `npm run type-check` | Passed; `next typegen` generated route types first |
| `npm run lint` | Passed |
| `npm run test` | Passed, 8/8 tests |
| `npm run build` | Passed with Next.js 16.2.10 standalone output |
| Standalone runtime | Passed with `HOSTNAME=0.0.0.0 PORT=3000 npm run start` |
| HTTP route check | 44 public locale routes returned 200 with required metadata and security headers |
| Error-route check | Four invalid paths returned 404; faculty 404 responses had `noindex` and all security headers |
| Static assets | CSS was served with HTTP 200 by the direct standalone server |

`npm audit --omit=dev` still reports two moderate advisories through the nested PostCSS dependency in `next@16.2.10`. Registry verification on this date confirmed that 16.2.10 is the latest stable Next release; `npm audit fix --force` proposes an unsafe breaking downgrade to Next 9.3.3. This was not applied. See `KNOWN_LIMITATIONS.md` for the risk assessment and required owner decision.

## Security hardening

- Production responses set Content Security Policy, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, cross-origin isolation headers, and disabled DNS prefetch.
- The custom faculty 404 response sets the same headers and `X-Robots-Tag: noindex`.
- `poweredByHeader` is disabled; compression and React strict mode remain enabled.
- No CSP nonce is used because this Next.js build requires inline framework/bootstrap styles and scripts. The policy restricts all resource classes to same-origin while allowing only the inline content Next needs. Re-test the policy whenever scripts, analytics, embeds, or remote assets are introduced.

## Deliberate exclusions

- No GitHub push, Coolify application creation, DNS edit, TLS certificate issuance, or environment-variable write was performed because those require owner credentials and external authority.
- Docker was not rebuilt in this workspace because Docker Desktop's Linux daemon is unavailable. Dockerfile structure was inspected; Coolify/Nixpacks is the requested primary deployment path.
- Legal/content approvals remain governed by the existing owner checklist.
