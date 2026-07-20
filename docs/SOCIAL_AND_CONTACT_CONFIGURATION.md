# Social and Contact Configuration

## Reusable system

`src/components/social/SocialLinks.tsx` is the only icon-link renderer for public social channels. It reads `getEnabledSocialLinks()` from `src/config/site.ts`; a platform appears only when both `enabled` and a non-empty URL are present.

The same system is used in the footer, contact route, home CTA, and follow panels. New social links must not be copied directly into page JSX.

## Currently supplied channels

| Channel | URL status |
| --- | --- |
| Instagram | Configured from the supplied official URL |
| Facebook | Configured from the supplied official URL |
| WhatsApp | Hidden; no approved enabled destination |
| Telegram, YouTube, LinkedIn, TikTok | Hidden unless configured explicitly |

## Contact disclosure policy

| Contact item | Display behavior |
| --- | --- |
| General email | Shown when configured; current project value needs confirmation |
| Partnership email | Hidden until configured and approved |
| Volunteer email | Hidden until configured and approved |
| Phone / secondary phone | Hidden until configured and approved |
| WhatsApp | Hidden until both the feature flag and URL are approved |
| Address, map, working hours | Hidden until approved values are configured |
| Faculty-specific contacts | Hidden unless a faculty override is approved |

## Safe update procedure

1. Obtain written confirmation for the exact destination and label.
2. Add the public value to the environment or central configuration source.
3. Ensure the relevant feature flag is intentionally enabled where needed.
4. Verify Arabic and English labels, external-link security attributes, and hidden-state behavior in Phase 3.
5. Record the owner and confirmation date in the content approval log outside this codebase.

The static contact and volunteer forms do not transmit submissions. They are not a contact-channel substitute.
