import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { createMailtoLink, site } from "@/config/site";
import type { SiteLocale } from "@/content/types";
import { localize } from "@/content/types";

type ContactCardsProps = {
  locale: SiteLocale;
  labels: { email: string; partnerships: string; volunteer: string; phone: string; whatsapp: string; address: string; hours: string };
};

type ContactCard = { label: string; value: string; href?: string; icon: LucideIcon };

export function ContactCards({ locale, labels }: ContactCardsProps) {
  const contact = site.contact;
  const cards: ContactCard[] = [
    ...(contact.email ? [{ label: labels.email, value: contact.email, href: createMailtoLink(contact.email, "Panorama inquiry"), icon: Mail }] : []),
    ...(contact.partnershipsEmail ? [{ label: labels.partnerships, value: contact.partnershipsEmail, href: createMailtoLink(contact.partnershipsEmail, "Panorama partnership inquiry"), icon: Mail }] : []),
    ...(contact.volunteerEmail ? [{ label: labels.volunteer, value: contact.volunteerEmail, href: createMailtoLink(contact.volunteerEmail, "Panorama volunteer inquiry"), icon: Mail }] : []),
    ...(contact.phone ? [{ label: labels.phone, value: contact.phone, href: `tel:${contact.phone}`, icon: Phone }] : []),
    ...(site.featureFlags.showWhatsApp && contact.whatsappUrl ? [{ label: labels.whatsapp, value: contact.whatsappNumber || labels.whatsapp, href: contact.whatsappUrl, icon: MessageCircle }] : []),
    ...(contact.address ? [{ label: labels.address, value: localize(contact.address, locale), href: site.featureFlags.showMap ? contact.mapsUrl : undefined, icon: MapPin }] : []),
    ...(contact.workingHours ? [{ label: labels.hours, value: localize(contact.workingHours, locale), icon: Clock3 }] : []),
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;
        const content = <><span className="grid h-11 w-11 shrink-0 place-items-center rounded-[0.85rem] bg-[color-mix(in_srgb,var(--color-brand-navy)_10%,transparent)] text-[var(--color-brand-navy)] dark:bg-[color-mix(in_srgb,var(--color-brand-purple)_23%,transparent)] dark:text-[var(--color-brand-purple-contrast)]"><Icon aria-hidden="true" className="h-5 w-5" /></span><span className="min-w-0"><span className="block text-xs font-extrabold text-[var(--color-muted)]">{card.label}</span><span className="mt-1 block break-words text-sm font-bold text-[var(--color-foreground)]">{card.value}</span></span></>;
        return card.href ? <a className="surface-card flex min-h-24 items-center gap-3 p-4 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]" href={card.href} key={`${card.label}-${card.value}`} rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined} target={card.href.startsWith("http") ? "_blank" : undefined}>{content}</a> : <article className="surface-card flex min-h-24 items-center gap-3 p-4" key={`${card.label}-${card.value}`}>{content}</article>;
      })}
    </div>
  );
}
