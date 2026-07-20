# Faculty Page System

## Single template, controlled data

`src/components/faculty/FacultyDetailPage.tsx` renders every faculty detail route. `src/app/[locale]/faculties/[slug]/page.tsx` selects the matching enabled faculty, creates localized metadata, generates static route parameters, and returns `notFound()` for an unavailable slug.

The template deliberately avoids per-faculty page forks. This keeps brand rules, interaction patterns, accessibility, and future changes consistent.

## Faculty data contract

Every item in `src/data/faculties.ts` includes:

- Stable `slug`
- Arabic and English display names and short names
- Localized description and community purpose
- Three localized support areas
- Availability state: `available`, `limited`, `digital`, or `comingSoon`
- Supplied official `logoPath` and controlled accent token
- `enabled` and `detailPageEnabled` publication controls

## Template structure

1. Localized breadcrumb and page hero.
2. Official faculty logo in a reserved, object-contained media frame.
3. Clear availability badge and statement of the faculty’s relationship to Panorama.
4. Three support-area cards.
5. Honest future-platform context, without a fictional faculty platform or download.
6. Links back to the faculty index and to the centralized volunteer path.

## Contact policy

Faculty pages do not invent contacts. If an approved faculty contact is needed later, add it through `site.facultyContactOverrides` in `src/config/site.ts`, expose it through a shared guarded component, and verify it in Phase 3.

## Adding a faculty

1. Obtain the approved faculty name, short name, community description, support areas, and logo file.
2. Add a typed object and controlled accent token; do not use an arbitrary brand color.
3. Set `enabled` and `detailPageEnabled` only when publication is approved.
4. Confirm Arabic/English copy, image rights, SEO text, and route behavior during Phase 3.
