"use client";

import { Mail, Globe2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import { GoldThread } from "@/components/ui/GoldThread";
import { SocialLinks } from "@/components/social/SocialLinks";
import { Link } from "@/i18n/routing";
import { footerLinks } from "@/data/navigation";
import { site } from "@/config/site";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative overflow-hidden bg-[var(--color-footer)] text-white">
      <GoldThread className="absolute inset-x-0 top-3 opacity-70" />
      <Container className="relative py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_0.72fr]">
          <div>
            <BrandLogo />
            <p className="mt-6 max-w-md text-sm leading-7 text-white/72">{t("description")}</p>
            {site.contact.email ? <a className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-[var(--color-brand-gold-contrast)]" href={`mailto:${site.contact.email}`}><Mail aria-hidden="true" className="h-4 w-4" />{site.contact.email}</a> : null}
          </div>
          <div>
            <h2 className="text-sm font-extrabold text-white">{t("explore")}</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
              {footerLinks.map((item) => <li key={item.key}><Link className="text-sm font-semibold text-white/65 transition hover:text-white focus-visible:rounded" href={item.href}>{t(`links.${item.key}`)}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-extrabold text-white">{t("connect")}</h2>
            <SocialLinks className="mt-5" tone="inverse" />
            <a aria-label={t("website")} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition hover:text-white" href={site.domain} rel="noopener noreferrer" target="_blank"><Globe2 aria-hidden="true" className="h-4 w-4" />{site.domainLabel}</a>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/55">{t("copyright")}</div>
      </Container>
    </footer>
  );
}
