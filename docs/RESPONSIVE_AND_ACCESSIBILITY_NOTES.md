# Responsive and Accessibility Notes

## Responsive foundation

- Global minimum layout width: 320px.
- Fluid page gutter and container tokens prevent fixed-width horizontal layouts.
- Responsive `clamp()` typography keeps display headings readable from phone to ultrawide screens.
- Home grids progress from one column to two and then three/four columns without clipping faculty logos.
- Master and faculty image boxes reserve dimensions; all faculty logos use `object-contain`.
- The desktop navigation collapses to a mobile dialog navigation before it becomes crowded.

## Keyboard and semantics

- A skip link targets `#main-content`.
- Header uses a labelled navigation landmark; sections use labelled headings; footer contains navigation and named social links.
- Theme, language, menu, social, and back-to-top controls have accessible names.
- Focus is visible across controls and links. Interactive controls meet the 44px minimum target intent.
- The mobile navigation supports Escape, scroll locking, focus containment, initial focus, and focus restoration after close.
- Decorative gold threads and non-informative faculty-card logo image instances are hidden from assistive technology. Informative master-logo instances use localized alt text.

## Direction and locale

- Arabic is the routing default and assigns `lang="ar" dir="rtl"` to the document.
- English at `/en` assigns `lang="en" dir="ltr"`.
- Motion entrance direction responds to RTL/LTR; directional hero icon selection also responds to locale.

## Manual verification still required

Contrast, browser focus order, screen-reader announcements, layout at all target widths, and touch-device behaviour require authorized runtime testing in Phase 3.
