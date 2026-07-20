# Design System

## Source of truth

`src/app/globals.css` contains the semantic token system. `tailwind.config.ts` only extends font and motion utility support; it does not duplicate the colour system.

## Tokens

- Colour: background, subtle background, foreground, muted, surface, elevated surface, strong surface, border, focus, success, warning, danger, navy, purple, burgundy, silver, gold, and faculty accents.
- Layout: `--container-wide`, `--content-gutter`, responsive section spacing, and a 320px minimum viewport.
- Shape: four named radius levels.
- Elevation: `--shadow-xs`, `--shadow-card`, and `--shadow-raised`.
- Motion: fast, normal, and slow durations; standard and entrance easing curves; named z-index layers.

## Typography

- Arabic: the existing local Cairo variable font, rendered first for Arabic documents.
- English: the existing local Inter variable font.
- Display and section titles use responsive `clamp()` sizing, strong but controlled weights, and Arabic-safe letter spacing.
- Body copy uses generous Arabic/English line height and muted semantic text colour.

## Reusable primitives

| Primitive | Purpose |
| --- | --- |
| `Container` | Fluid max-width and responsive gutters |
| `Button` | Primary, secondary, and ghost actions; external/internal handling; button loading state |
| `Badge` | Eyebrow label with restrained gold emphasis |
| `SectionHeading` | Consistent heading hierarchy and reveal treatment |
| `FeatureCard` / `FacultyCard` | Reusable responsive content card patterns |
| `GoldThread` | Decorative, non-semantic connection motif |
| `Skeleton` / `PageLoader` | Consistent async and route-level loading states |

## Theme behaviour

The `.dark` class changes semantic surface, border, text, and shadow values rather than inverting the light palette. `ThemeProvider` uses system preference by default and persists an explicit user preference.
