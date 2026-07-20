import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SiteEnhancements } from "@/components/layout/SiteEnhancements";
import { getEnabledSocialLinks, site } from "@/config/site";

const inter = localFont({ src: "../../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2", variable: "--font-sans", display: "swap" });
const cairo = localFont({ src: "../../../node_modules/@fontsource-variable/cairo/files/cairo-arabic-wght-normal.woff2", variable: "--font-arabic", display: "swap" });

type LocaleLayoutProps = { children: ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });
  const isArabic = locale === "ar";
  const url = isArabic ? `${site.domain}/` : `${site.domain}/en`;
  return {
    metadataBase: new URL(site.domain),
    title: { default: t("title"), template: `%s | ${isArabic ? site.arabicName : site.name}` },
    description: t("description"),
    keywords: t.raw("keywords") as string[],
    applicationName: site.name,
    creator: site.name,
    publisher: site.name,
    icons: { icon: site.assets.logo, apple: site.assets.logo },
    alternates: { canonical: url, languages: { ar: `${site.domain}/`, en: `${site.domain}/en` } },
    openGraph: { title: t("title"), description: t("description"), siteName: site.name, url, type: "website", locale: isArabic ? "ar_SY" : "en_US", alternateLocale: isArabic ? "en_US" : "ar_SY", images: [{ url: site.assets.defaultOpenGraphImage, width: 3508, height: 2480, alt: t("logoAlt") }] },
    twitter: { card: "summary_large_image", title: t("title"), description: t("description"), images: [site.assets.defaultOpenGraphImage] },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();
  const isArabic = locale === "ar";
  const skipLabel = isArabic ? "تخطَّ إلى المحتوى" : "Skip to content";
  return <html className={`${inter.variable} ${cairo.variable}`} dir={isArabic ? "rtl" : "ltr"} lang={isArabic ? "ar" : "en"} suppressHydrationWarning><body className="site-shell antialiased"><NextIntlClientProvider messages={messages}><a className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-[var(--color-surface)] focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-[var(--color-foreground)]" href="#main-content">{skipLabel}</a><SiteEnhancements /><Navbar />{children}<Footer /><script dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: site.name, alternateName: site.arabicName, url: site.domain, description: site.statement[isArabic ? "ar" : "en"], ...(site.contact.email ? { email: site.contact.email } : {}), sameAs: getEnabledSocialLinks().map((link) => link.url) }) }} type="application/ld+json" /></NextIntlClientProvider></body></html>;
}
