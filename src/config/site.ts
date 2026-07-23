import type { Localized } from "@/content/types";

type SocialPlatform = "instagram" | "facebook" | "whatsapp" | "telegram" | "youtube" | "linkedin" | "tiktok";

export type SocialLinkConfig = {
  platform: SocialPlatform;
  url?: string;
  label: Localized<string>;
  enabled: boolean;
};

export type EnabledSocialLink = SocialLinkConfig & { url: string };

export type ContactConfig = {
  email?: string;
  partnershipsEmail?: string;
  volunteerEmail?: string;
  phone?: string;
  secondaryPhone?: string;
  whatsappNumber?: string;
  whatsappUrl?: string;
  address?: Localized<string>;
  mapsUrl?: string;
  workingHours?: Localized<string>;
};

export type FacultyContactOverride = Partial<ContactConfig> & {
  social?: Partial<Record<SocialPlatform, string>>;
};

export type FeatureFlags = {
  showNews: boolean;
  showGallery: boolean;
  showVolunteerForm: boolean;
  showContactForm: boolean;
  showPlatformDownload: boolean;
  showWhatsApp: boolean;
  showMap: boolean;
  showStatistics: boolean;
  showPartners: boolean;
  showTestimonials: boolean;
};

function publicValue(value?: string): string | undefined {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

export const CANONICAL_HOST = "xn--mgbaab0cxheq.tech";
export const CANONICAL_ORIGIN = "https://xn--mgbaab0cxheq.tech";

// The public canonical origin is deliberately not environment-overridable.
// This avoids accidentally emitting localhost, an IP address, or a retired
// hostname into canonical, Open Graph, sitemap, or structured-data URLs.
const canonicalUrl = CANONICAL_ORIGIN;
const generalEmail = publicValue(process.env.NEXT_PUBLIC_CONTACT_EMAIL) || "panoramacompany31@gmail.com";
const instagramUrl = publicValue(process.env.NEXT_PUBLIC_INSTAGRAM_URL) || "https://www.instagram.com/company.panorama?utm_source=qr&igsh=ZTZ1Z21wNG54ZWVx";
const facebookUrl = publicValue(process.env.NEXT_PUBLIC_FACEBOOK_URL) || "https://www.facebook.com/share/1CvmsKTNKV/";
const volunteerApplicationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc413UDexlx0vcXkLEHLld8yU7-1DTUvBe9iKT1gnk2hjqmLQ/viewform?usp=dialog";

export const featureFlags: FeatureFlags = {
  showNews: false,
  showGallery: false,
  // Do not render a form until it has a real, reviewed submission endpoint.
  // Contact remains available through the verified email channel.
  showVolunteerForm: false,
  showContactForm: false,
  showPlatformDownload: false,
  showWhatsApp: false,
  showMap: false,
  showStatistics: false,
  showPartners: false,
  showTestimonials: false,
};

export const contact: ContactConfig = {
  email: generalEmail,
  partnershipsEmail: publicValue(process.env.NEXT_PUBLIC_PARTNERSHIPS_EMAIL),
  volunteerEmail: publicValue(process.env.NEXT_PUBLIC_VOLUNTEER_EMAIL),
  phone: publicValue(process.env.NEXT_PUBLIC_CONTACT_PHONE),
  secondaryPhone: publicValue(process.env.NEXT_PUBLIC_SECONDARY_PHONE),
  whatsappNumber: publicValue(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER),
  whatsappUrl: publicValue(process.env.NEXT_PUBLIC_WHATSAPP_URL),
  mapsUrl: publicValue(process.env.NEXT_PUBLIC_MAPS_URL),
};

export const socialLinks: SocialLinkConfig[] = [
  { platform: "instagram", url: instagramUrl, label: { ar: "إنستغرام بانوراما", en: "Panorama on Instagram" }, enabled: true },
  { platform: "facebook", url: facebookUrl, label: { ar: "فيسبوك بانوراما", en: "Panorama on Facebook" }, enabled: true },
  { platform: "whatsapp", url: contact.whatsappUrl, label: { ar: "واتساب بانوراما", en: "Panorama on WhatsApp" }, enabled: featureFlags.showWhatsApp },
  // Additional channels stay hidden until an owner verifies and enables them.
  { platform: "telegram", url: publicValue(process.env.NEXT_PUBLIC_TELEGRAM_URL), label: { ar: "تيليغرام بانوراما", en: "Panorama on Telegram" }, enabled: false },
  { platform: "youtube", url: publicValue(process.env.NEXT_PUBLIC_YOUTUBE_URL), label: { ar: "يوتيوب بانوراما", en: "Panorama on YouTube" }, enabled: false },
  { platform: "linkedin", url: publicValue(process.env.NEXT_PUBLIC_LINKEDIN_URL), label: { ar: "لينكدإن بانوراما", en: "Panorama on LinkedIn" }, enabled: false },
  { platform: "tiktok", url: publicValue(process.env.NEXT_PUBLIC_TIKTOK_URL), label: { ar: "تيك توك بانوراما", en: "Panorama on TikTok" }, enabled: false },
];

// These are the only owner-supplied, verified organization profiles. Keep
// unverified or future social channels out of Organization.sameAs.
export const verifiedOrganizationSameAs = [instagramUrl, facebookUrl] as const;

export const site = {
  name: "Panorama",
  arabicName: "بانوراما",
  shortName: "Panorama",
  slogan: { ar: "فيد واستفيد", en: "Share value. Gain value." },
  statement: {
    ar: "بانوراما مجتمع طلابي تطوعي انطلق من الجامعة السورية الخاصة ليجمع المعرفة والخدمة والأثر.",
    en: "Panorama is a student volunteer community that began at the Syrian Private University to connect knowledge, service, and impact.",
  },
  domain: canonicalUrl,
  volunteerApplicationUrl,
  domainLabel: "بانوراما.tech",
  contact,
  socialLinks,
  assets: {
    logo: "/Logos/اساسي.png",
    supportLogo: "/Logos/اساسي.png",
    defaultOpenGraphImage: "/Logos/اساسي.png",
    favicon: "/favicon-48.png",
  },
  facultyContactOverrides: {} as Record<string, FacultyContactOverride>,
  featureFlags,
} as const;

export function getEnabledSocialLinks(): EnabledSocialLink[] {
  return socialLinks.filter(
    (link): link is EnabledSocialLink => link.enabled && typeof link.url === "string" && link.url.length > 0,
  );
}

export function createMailtoLink(email: string | undefined, subject: string) {
  return email ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : undefined;
}
