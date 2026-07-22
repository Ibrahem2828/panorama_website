# Asset Usage Map

| Asset group | Location | Phase 1 usage | Notes |
| --- | --- | --- | --- |
| Master Panorama logo | `public/Logos/اساسي.png` | Header, hero, splash, footer, metadata | Official supplied PNG; rendered without recolour or crop |
| Master source PDF | `public/Logos/Logo.pdf` | Preserved source | Not embedded in an image element; browser implementation uses supplied PNG |
| Informatics logo | `public/Logos/معلوماتية.png` | Faculty card | `object-contain` |
| Petroleum logo | `public/Logos/بتروول.png` | Faculty card | Filename preserved as supplied |
| Pharmacy logo | `public/Logos/صيدلي.png` | Faculty card | `object-contain` |
| Medicine logo | `public/Logos/طب بشري.png` | Faculty card | `object-contain` |
| Dentistry logo | `public/Logos/طب اسنان.png` | Faculty card | `object-contain` |
| Business Administration logo | `public/Logos/ادارة اعمال.png` | Faculty card | `object-contain` |
| Faculty-character imagery | `public/صور شخصيات للكليات/` | Not rendered | Hold for context/rights confirmation |
| Campaign/channel imagery | `public/image/` | Not rendered | Hold for confirmed content placement and alt-text context |

Asset paths are centralized in `src/data/faculties.ts` and `src/config/site.ts`. Original files were not changed or deleted.
