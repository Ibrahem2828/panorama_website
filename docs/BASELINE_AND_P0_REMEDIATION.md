# Baseline and P0 remediation report

Date: 2026-07-23

## Baseline

- The repository requires Node.js `22.23.1` and npm `10.9.8` through `.nvmrc` and `package.json`.
- The workstation initially resolved Node.js `20.19.6` and npm `11.16.0`. The required Node 22 runtime was downloaded, but the system NVM installation could not move it into the protected global NVM directory. All verification commands therefore used the downloaded Node `22.23.1` runtime directly.
- A clean `npm ci` completed successfully with that runtime. The installation output reported dependency advisories, but a detailed `npm audit` was not run because it would transmit dependency metadata to npm and requires explicit user authorization in this environment.
- Baseline TypeScript, ESLint, contract tests, and production build passed with Node 22. The Node test runner required execution outside the process sandbox because sandboxed child-process creation failed with `EPERM`.

## Root causes fixed

| Priority | Root cause | Resolution |
| --- | --- | --- |
| P0 | The menu trigger used `xl:hidden`, while the overlay and drawer used `lg:hidden`, making the drawer unavailable from 1024px through 1279px. | The entire mobile-navigation contract now uses the `xl` breakpoint. |
| P0 | The drawer lived beneath a backdrop-filtered header and used a full-width sheet rather than a direction-aware dialog. | The drawer is portaled to `document.body`, opens from the Arabic right / English left, and has a bounded mobile width. |
| P0 | The document shell was split incorrectly: `html` and `body` were owned by the locale layout rather than the root layout. | The root layout now owns `html`, `body`, fonts, `lang`, and `dir`; the locale layout owns locale content only. |
| P1 | The Node test runner discovered Playwright's TypeScript specifications as unit tests. | `scripts/run-node-tests.mjs` executes only the `*.test.mjs` contract suite; Playwright remains under `npm run test:e2e`. |
| P1 | A 320px real-browser test found horizontal overflow from a horizontal entry transform on a full-width card. | The shared `end` reveal uses the safe vertical entrance. Decorative SVG stroke overflow is clipped by the SVG itself. |

## Verification executed

- `npm ci` — passed with Node 22.23.1.
- `npm run type-check` — passed.
- `npm run lint` — passed.
- `npm test` — 26 passed, 0 failed.
- `npm run test:repository` — passed.
- `npm run build` — passed.
- `npm run test:e2e` — 5 Chrome production-browser tests passed.

The browser suite validates Arabic RTL at 320px, 1024px, and 1279px; English LTR at 1024px; desktop navigation at 1280px; keyboard and pointer dialog closing; focus return; body scroll locking; the active navigation state; no horizontal overflow; and an axe WCAG 2 A/AA scan of the drawer.

## Remaining release checks

- `npm audit` needs explicit authorization because it sends dependency metadata to npm. The clean-install output reported three high-severity advisories after the test dependencies were added, but their package-level details have not been inspected.
- Firefox and WebKit/Safari browser runs have not been executed in this workstation.
- Lighthouse, production-domain smoke checks, and deployed-header verification were not run.
- The global Node installation is still Node 20; deployment and CI must use the documented Node 22.23.1 image/runtime.

## Verdict

READY FOR STAGING VERIFICATION
