import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

type TermsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });
  const isArabic = locale === "ar";

  return {
    title: t("title"),
    description: isArabic
      ? "شروط استخدام الموقع التعريفي لمنصة بانوراما الجامعية"
      : "Terms of use overview for the Panorama public marketing website.",
    alternates: {
      canonical: `${site.domain}/${isArabic ? "ar/" : ""}terms`,
    },
  };
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });
  const siteT = await getTranslations({ locale, namespace: "site" });

  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <main className="bg-white py-20 sm:py-28">
      <Container className="max-w-4xl">
        <p className="text-sm font-bold uppercase text-panorama-navy">{t("label")}</p>
        <h1 className="mt-4 text-4xl font-black text-panorama-text sm:text-5xl">{t("title")}</h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-panorama-muted">
          {paragraphs.map((para: string, idx: number) => (
            <p key={idx}>{para}</p>
          ))}
          <p>
            <a className="font-bold text-panorama-navy" href={`mailto:${siteT("email")}`}>
              {siteT("email")}
            </a>
            .
          </p>
        </div>
      </Container>
    </main>
  );
}
