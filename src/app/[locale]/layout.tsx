import type { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import localFont from "next/font/local";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { site } from "@/data/site";

const inter = localFont({
  src: "../../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-sans",
  display: "swap",
});

const cairo = localFont({
  src: "../../../node_modules/@fontsource-variable/cairo/files/cairo-arabic-wght-normal.woff2",
  variable: "--font-arabic",
  display: "swap",
});

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });
  const isArabic = locale === "ar";

  const title = isArabic ? t("arabicTitle") : t("title");
  const description = isArabic ? t("arabicDescription") : t("description");

  return {
    metadataBase: new URL(site.domain),
    title: {
      default: title,
      template: `%s | ${isArabic ? "بانوراما" : "Panorama"}`,
    },
    description,
    keywords: isArabic
      ? ["بانوراما", "تطبيق بانوراما", "منصة بانوراما", "منصة جامعية", "تطبيق جامعي للطلاب", "إدارة الملفات الأكاديمية", "توثيق الطلاب", "طلبات الطباعة الجامعية"]
      : ["Panorama", "بانوراما", "Panorama app", "University student app", "Academic platform", "Student verification system", "Academic files platform", "Printing order management"],
    applicationName: "Panorama",
    creator: "Panorama",
    publisher: "Panorama",
    alternates: {
      canonical: isArabic ? `${site.domain}/ar` : site.domain,
      languages: {
        en: site.domain,
        ar: `${site.domain}/ar`,
      },
    },
    openGraph: {
      title,
      description,
      siteName: "Panorama",
      url: isArabic ? `${site.domain}/ar` : site.domain,
      type: "website",
      locale: isArabic ? "ar_SA" : "en_US",
      alternateLocale: isArabic ? "en_US" : "ar_SA",
      images: [
        {
          url: "/og/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: isArabic ? "بانوراما منصة جامعية ذكية" : "Panorama smart academic platform",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og/opengraph-image.png"],
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();
  const isArabic = locale === "ar";

  return (
    <html lang={isArabic ? "ar" : "en"} dir={isArabic ? "rtl" : "ltr"} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cairo.variable} font-sans antialiased`}
        style={isArabic ? { fontFamily: "var(--font-arabic), var(--font-sans), ui-sans-serif, system-ui, sans-serif" } : undefined}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
          <script
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([
                {
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  name: "Panorama",
                  alternateName: "بانوراما",
                  url: site.domain,
                  email: site.email,
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: site.email,
                    contactType: "customer support",
                    availableLanguage: ["English", "Arabic"],
                  },
                },
                {
                  "@context": "https://schema.org",
                  "@type": "SoftwareApplication",
                  name: "Panorama Academic Platform",
                  alternateName: "بانوراما",
                  applicationCategory: "EducationApplication",
                  operatingSystem: "iOS, Android, Web",
                  url: site.domain,
                  description: isArabic
                    ? "بانوراما منصة جامعية ذكية تساعد الطلاب على الوصول إلى الملفات الأكاديمية"
                    : "Panorama is a smart academic platform for university students",
                  publisher: {
                    "@type": "Organization",
                    name: "Panorama",
                    url: site.domain,
                  },
                },
              ]),
            }}
            type="application/ld+json"
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
