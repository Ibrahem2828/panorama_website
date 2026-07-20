# Feature Flags

## Authority

Feature flags live in `src/config/site.ts` as `site.featureFlags`. They protect unfinished or unverified experiences from becoming accidental public claims.

| Flag | Current value | Public behavior |
| --- | ---: | --- |
| `showNews` | `false` | News remains an empty approved-content foundation |
| `showGallery` | `false` | Gallery remains an empty approved-asset foundation |
| `showVolunteerForm` | `true` | Shows a disabled static form with no submission behavior |
| `showContactForm` | `true` | Shows a disabled static form with no submission behavior |
| `showPlatformDownload` | `false` | No download or registration link is displayed |
| `showWhatsApp` | `false` | WhatsApp is hidden unless the URL and approval are present |
| `showMap` | `false` | No map embed or map CTA is displayed |
| `showStatistics` | `false` | No impact counters or numeric claims are displayed |
| `showPartners` | `false` | No partner logos or relationship claims are displayed |
| `showTestimonials` | `false` | No testimonials are displayed |

## Enabling a flag

Enabling a flag is a publication decision, not a visual preference. Before enabling, confirm the content, legal basis, owner, destination, accessibility behavior, and Phase 3 runtime verification scope. If evidence is not ready, keep the flag disabled.

Flags must be evaluated through centralized components or route logic; do not add ad hoc boolean checks with separate public values in individual pages.
