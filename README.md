# Panorama Website

Public bilingual website for Panorama, a student volunteer community that began at the Syrian Private University. Arabic is the default locale; English is served under `/en`.

## Implemented information architecture

- Home, About, Faculties, individual faculty pages, Services, Initiatives, Volunteer, Platform, Impact, News, Gallery, FAQ, Contact, Privacy, and Terms.
- Each listed content route has Arabic and English variants through `next-intl` routing.
- News and Gallery are intentionally empty publishing foundations until approved material is supplied.
- Contact and volunteer forms are visible static interfaces only; they do not submit data or display a false success state.

## Single source of public configuration

`src/config/site.ts` owns the public identity, canonical domain, logo paths, contact values, social channels, faculty contact overrides, default Open Graph image, and feature flags. Do not place public contact or social URLs directly in page components.

Copy `.env.example` to `.env` only when configuring a deployment. All values are public build-time values, not secrets. Unknown values must remain empty so they stay hidden.

## Project structure

```text
src/app                 Localized routes, metadata, sitemap, robots, global CSS
src/config/site.ts      Single public configuration source
src/content             Typed Arabic/English content modules and publication states
src/components          Shared UI, layout, motion, forms, social, and route sections
src/data/faculties.ts   Faculty data consumed by the reusable faculty-page template
src/messages            Localized shell and legal-interface messages
public/Logos            Supplied official master and faculty-logo assets
docs                    Design, configuration, content, and phase handoff documents
```

## Documentation

- `docs/SITE_CONFIGURATION.md`
- `docs/SOCIAL_AND_CONTACT_CONFIGURATION.md`
- `docs/SITE_CONTENT_ARCHITECTURE.md`
- `docs/FACULTY_PAGE_SYSTEM.md`
- `docs/CONTENT_TRUTH_AND_APPROVAL_GUIDE.md`
- `docs/FEATURE_FLAGS.md`
- `docs/PHASE_2_CLOSURE_REPORT.md`
- `docs/PHASE_3_RUNTIME_VERIFICATION_PLAN.md`

Runtime commands were intentionally not run as part of the static Phase 2 implementation. See the closure report and Phase 3 plan before public release.
