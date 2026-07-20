# Motion System

## Intent

Motion communicates connection and continuity. It should guide attention, never obstruct reading or navigation.

## Central behaviour

- `AnimatedReveal`: fade with a small direction-aware transform for headings, hero content, and major sections.
- `StaggerGroup` / `StaggerItem`: short ordered reveals for cards.
- `GoldThread`: a slow dashed SVG-line treatment used in hero, section transitions, CTA, footer, splash, and loading.
- Controls and cards: short opacity, border, shadow, and transform micro-interactions.

## Parameters

| Token | Value | Use |
| --- | --- | --- |
| Fast | 160ms | Controls and hover response |
| Normal | 280ms | Theme/surface transition |
| Slow | 560ms | Content entrance baseline |
| Entrance easing | `cubic-bezier(0.16, 1, 0.3, 1)` | Reveals and splash line |
| Stagger | 65ms | Related card groups |

## Accessibility and performance

- `useReducedMotion` returns unanimated markup for Framer Motion reveals and stagger groups.
- The global `prefers-reduced-motion` rule effectively removes CSS animation and scrolling motion.
- No continuous JavaScript animation loop is used for decoration. The scroll indicator is requestAnimationFrame-throttled and only updates on scroll/resize.
- The splash is limited to one session, skips reduced-motion users, and ends after 1.35 seconds.
