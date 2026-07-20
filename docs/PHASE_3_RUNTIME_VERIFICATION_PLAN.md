# Phase 3 Runtime Verification Plan

Phase 3 begins only when runtime execution is authorized and all required public values/content have owner approval.

## 1. Preflight and configuration

- Confirm canonical domain behavior for `https://بانوراما.tech`, including browser and Punycode handling.
- Confirm that the general email, Instagram, Facebook, any additional social links, and all contact values are approved and match production environment variables.
- Verify the master logo and each faculty logo against the approved asset source.
- Verify feature-flag decisions and publication approvals for News, Gallery, forms, WhatsApp, maps, downloads, metrics, partners, and testimonials.

## 2. Authorized engineering checks

When authorized, run the repository’s appropriate install, lint, type-check, test, and production-build commands. Record exact commands, tool versions, warnings, and failures. Do not modify dependencies or the lockfile unless separately authorized.

## 3. Route and locale smoke tests

Test both Arabic and English for:

- `/`, `/about`, `/faculties`, all enabled `/faculties/[slug]` routes, `/services`, `/initiatives`, `/volunteer`, `/platform`, `/impact`, `/news`, `/gallery`, `/faq`, `/contact`, `/privacy`, and `/terms`.
- Locale switching, locale persistence, canonical redirects/URLs, breadcrumbs, navigation active states, sitemap, and robots.
- Expected empty states and hidden optional channels.
- Correct `notFound` behavior for unsupported faculty slugs.

## 4. Responsive, browser, and motion checks

Inspect at minimum 320px, 375px, 430px, tablet, laptop, 1440px, and ultrawide widths in supported browsers. Verify:

- No horizontal overflow, clipped focus ring, logo distortion, or layout collision.
- Arabic RTL and English LTR directionality, line wrapping, and typography.
- Light/dark contrast and preference persistence.
- Reduced-motion behavior for reveal/stagger, splash, scrolling, and accordions.
- Image loading, reserved media dimensions, responsive `sizes`, and no unexpected layout shift.

## 5. Accessibility checks

- Keyboard-only navigation, skip link, tab order, mobile menu focus containment/restoration, Escape close, and FAQ accordion states.
- Page landmarks, heading progression, label associations, visible focus, color contrast, semantic link/button use, external-link accessibility labels, and form disabled-state explanation.
- Screen-reader review for social links, logo alternatives, breadcrumbs, empty states, and unavailable controls.

## 6. SEO and publication checks

- Inspect per-route title, description, canonical URL, alternates, Open Graph/Twitter output, and organization JSON-LD.
- Validate sitemap and robots output.
- Validate social-preview image and official outbound destinations.
- Confirm that no unapproved data becomes visible when feature flags are disabled.

## 7. Form and future-service activation

Before enabling submission, implement and test secure transport, server-side validation, consent language, spam controls, error handling, success states, retention policy, monitoring, and ownership. Re-review Privacy and Terms. A visual form alone is not authorization to collect data.

## Exit criteria

Phase 3 can close only after all authorized checks pass or documented issues are resolved, public content approvals are recorded, legal review is complete, and the production owner accepts the final release.
