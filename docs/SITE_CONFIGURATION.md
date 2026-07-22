# Site Configuration

## Authority

`src/config/site.ts` is the single source of truth for public site configuration. Pages and components must consume this module or a derived shared component; they must not introduce their own contact, social, brand, canonical, or Open Graph values.

## Configured identity

| Item | Current value / source |
| --- | --- |
| Public name | `Panorama` / `بانوراما` |
| Slogan | `فيد واستفيد` / “Share value. Gain value.” |
| Canonical domain | `https://xn--mgbaab0cxheq.tech`, fixed in code |
| Default logo and Open Graph image | `/Logos/اساسي.png` |
| Master statement | Configured in `site.statement` for Arabic and English |
| Faculty identity | `src/data/faculties.ts` and supplied faculty logos |

The master logo is the supplied official implementation asset. Faculty logos are supporting identities only and never replace the Panorama master identity.

## Environment overrides

The following values may be supplied at build time through public `NEXT_PUBLIC_*` variables. Blank values resolve to `undefined` and are not shown.

| Variable | Role |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Deployment reference only; canonical metadata is fixed to the approved Punycode origin |
| `NEXT_PUBLIC_CONTACT_EMAIL` | General contact email |
| `NEXT_PUBLIC_PARTNERSHIPS_EMAIL` | Partnership email |
| `NEXT_PUBLIC_VOLUNTEER_EMAIL` | Volunteer email |
| `NEXT_PUBLIC_CONTACT_PHONE` / `NEXT_PUBLIC_SECONDARY_PHONE` | Phone values |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` / `NEXT_PUBLIC_WHATSAPP_URL` | WhatsApp display and destination |
| `NEXT_PUBLIC_MAPS_URL` | Map destination; address itself must also be configured in code |
| `NEXT_PUBLIC_INSTAGRAM_URL`, `NEXT_PUBLIC_FACEBOOK_URL` | Approved supplied social URLs |
| `NEXT_PUBLIC_TELEGRAM_URL`, `NEXT_PUBLIC_YOUTUBE_URL`, `NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_TIKTOK_URL` | Optional social URLs |

The general email is a pre-existing project value, not an independently verified public claim. It requires owner confirmation before public release.

## Editorial rules

- Keep unknown facts as `undefined`; do not use placeholders such as `TBD`, invented phone numbers, or empty cards.
- Treat the canonical origin as a controlled release value. Do not override it with an environment variable; change it only with a documented migration and complete SEO validation.
- Keep secrets out of `NEXT_PUBLIC_*` variables and out of the repository.
- A faculty-specific contact override belongs in `site.facultyContactOverrides` only after its owner approves the value.
