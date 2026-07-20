# Panorama Production Deployment Guide

This guide is for a later authorized production phase. It does not represent a completed deployment or runtime validation.

## Domain and public configuration

The intended public domain is `https://بانوراما.tech`. Use `xn--mgbaab0cxheq.tech` where DNS, certificates, or server software requires an ASCII/Punycode hostname.

Create the production `.env` from `.env.example` and set only confirmed public values. `src/config/site.ts` consumes these values for canonical metadata, sitemap, robots, configured contact cards, and reusable social links.

```bash
NEXT_PUBLIC_SITE_URL=https://بانوراما.tech
NEXT_PUBLIC_CONTACT_EMAIL=panoramacompany31@gmail.com
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/company.panorama?utm_source=qr&igsh=ZTZ1Z21wNG54ZWVx
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/share/1CvmsKTNKV/
```

The contact email is a pre-existing project value and must be confirmed by the Panorama owner before public launch. Leave unconfirmed optional values empty; the UI hides them.

## Route coverage

Arabic is primary at `/`; English is under `/en`. The public route set includes About, Faculties and faculty detail pages, Services, Initiatives, Volunteer, Platform, Impact, News, Gallery, FAQ, Contact, Privacy, and Terms.

News and Gallery are intentionally empty foundations. The static forms do not collect or submit data. Do not enable related runtime services without the approvals described in `docs/PHASE_3_RUNTIME_VERIFICATION_PLAN.md`.

## Later deployment outline

1. Confirm public domain, contact values, social destinations, legal copy, visual assets, and publication approvals.
2. Run the authorized dependency/install, lint, type, test, and production-build workflow only after approval.
3. Deploy using the existing Docker Compose, Dockerfile, Nginx, and TLS configuration as appropriate to the server owner’s process.
4. Verify HTTPS, canonical/Punycode behavior, robots, sitemap, locale routes, social previews, accessibility, responsive behavior, and feature-flag states.
5. Record evidence and release acceptance before public launch.

See `docs/PHASE_2_CLOSURE_REPORT.md` for the static-only boundary and `docs/PHASE_3_RUNTIME_VERIFICATION_PLAN.md` for the complete verification plan.
