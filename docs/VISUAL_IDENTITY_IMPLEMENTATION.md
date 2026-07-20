# Visual Identity Implementation

## Brand direction

The interface presents Panorama first as a volunteer student community from the Syrian Private University. The infinity form, central handshake, navy/purple/burgundy palette, soft silver surfaces, and restrained gold thread are used to communicate continuity, cooperation, trust, and shared knowledge.

## Master and faculty marks

- The master mark is dominant in navigation, hero, splash, footer, and social metadata.
- Faculty marks are displayed only inside structured FacultyCard components as contextual sub-brands.
- All logo rendering uses `next/image`, predefined dimensions, `object-contain`, and an unclipped surface. No source logo is recoloured, distorted, regenerated, or cropped with `object-cover`.
- The supplied master PDF remains preserved as source material. The supplied master PNG is the browser-safe implementation asset.

## Colour roles

| Token family | Purpose |
| --- | --- |
| Navy | Primary action, trusted institutional surfaces, impact section |
| Purple | Connected-system and interaction accent |
| Burgundy | Human/team emphasis and warm support accent |
| Silver | Neutral borders and balancing surfaces |
| Gold | Fine thread, dividers, key emphasis, never a dominant background |
| Faculty accents | Controlled top rule, tint, and detail within FacultyCard only |

All colour values live in `src/app/globals.css` as semantic tokens. Components consume semantic variables rather than scattering hex values.

## Image policy

- Official faculty logos are used on the homepage only in the faculty grid.
- Repository campaign imagery and faculty-character imagery are preserved but intentionally excluded from Phase 1 placement until rights and context are confirmed.
- No external visual assets or generated student imagery were added.
