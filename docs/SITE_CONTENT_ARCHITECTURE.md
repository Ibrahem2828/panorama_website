# Site Content Architecture

## Route map

| Route | Purpose | Content source / state |
| --- | --- | --- |
| `/`, `/en` | Mission-led entry, discovery, participation, and contact | `src/content/home.ts` |
| `/about` | Story, mission, vision, values, current scope | `src/content/about.ts` |
| `/faculties` | Faculty directory | `src/data/faculties.ts` |
| `/faculties/[slug]` | Reusable faculty detail template | Faculty data + `src/content/faculty-page.ts` |
| `/services` | Student-service catalogue with availability | `src/content/services.ts` |
| `/initiatives` | Approved initiative foundation | Empty until approved content exists |
| `/volunteer` | Participation paths and static application interface | `src/content/engagement.ts`, `src/content/forms.ts` |
| `/platform` | Digital-platform positioning | `src/content/platform.ts` |
| `/impact` | Responsible impact principles | `src/content/engagement.ts` |
| `/news` | Approved updates foundation | Disabled and empty by design |
| `/gallery` | Approved visual archive foundation | Disabled and empty by design |
| `/faq` | Accessible shared answers | `src/content/faq.ts` |
| `/contact` | Configured contact options and static inquiry interface | `src/content/contact.ts`, central config |
| `/privacy`, `/terms` | Introductory legal information | localized legal messages |

All routes are Arabic-first and locale-aware. Page metadata is built with `src/lib/metadata.ts`, including canonical URL, language alternates, Open Graph, and Twitter foundations.

## Content modeling

- `src/content/types.ts` defines locales, localized values, content lifecycle states, and availability states.
- Long-form page copy lives in typed bilingual modules, not scattered across route JSX.
- `src/content/page-meta.ts` centralizes titles and descriptions.
- `src/data/faculties.ts` provides a controlled schema for names, descriptions, support areas, availability, logos, and route eligibility.
- Cards, hero blocks, empty states, status badges, forms, breadcrumbs, and social links are reusable components.

## Publication boundaries

No statistics, achievements, event dates, partners, testimonials, news stories, gallery items, map locations, or downloads are asserted without approved evidence. Empty states are intentional editorial states, not missing implementation.
