"use client";

import { Facebook, Instagram, Linkedin, MessageCircle, Music2, Send, Youtube } from "lucide-react";
import { useLocale } from "next-intl";
import { getEnabledSocialLinks, type SocialLinkConfig } from "@/config/site";
import type { SiteLocale } from "@/content/types";
import { cn } from "@/lib/cn";

type SocialLinksProps = {
  className?: string;
  tone?: "default" | "inverse";
};

const icons = {
  instagram: Instagram,
  facebook: Facebook,
  whatsapp: MessageCircle,
  telegram: Send,
  youtube: Youtube,
  linkedin: Linkedin,
  tiktok: Music2,
} as const;

function SocialIconLink({ social, tone }: { social: SocialLinkConfig; tone: "default" | "inverse" }) {
  const locale = useLocale() as SiteLocale;
  const Icon = icons[social.platform as keyof typeof icons];
  if (!Icon || !social.url) return null;

  return (
    <a aria-label={social.label[locale]} className={cn("control-button", tone === "inverse" ? "border-white/20 bg-white/5 text-white hover:border-[var(--color-brand-gold-contrast)] hover:bg-white/10" : "") } href={social.url} rel="noopener noreferrer" target="_blank">
      <Icon aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}

export function SocialLinks({ className, tone = "default" }: SocialLinksProps) {
  return <div className={cn("flex flex-wrap gap-2", className)}>{getEnabledSocialLinks().map((social) => <SocialIconLink key={social.platform} social={social} tone={tone} />)}</div>;
}
