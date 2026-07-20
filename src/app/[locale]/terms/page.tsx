import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GoldThread } from "@/components/ui/GoldThread";
import { site } from "@/config/site";
import { pageMeta } from "@/content/page-meta";
import { localize } from "@/content/types";
import { createPageMetadata } from "@/lib/metadata";

type TermsPageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({ locale, path: "/terms", meta: localize(pageMeta, locale).terms });
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <main className="section-shell" id="main-content">
      <GoldThread className="absolute inset-x-0 top-4 opacity-70" />
      <Container className="max-w-3xl">
        <Badge>{t("label")}</Badge>
        <h1 className="section-title max-w-none">{t("title")}</h1>
        <div className="surface-card mt-9 p-6 sm:p-9">
          <div className="space-y-6 text-base leading-8 text-[var(--color-muted)]">
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {site.contact.email ? <p><a className="font-bold text-[var(--color-brand-navy)] underline decoration-[var(--color-brand-gold)] underline-offset-4 dark:text-[var(--color-brand-purple-contrast)]" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p> : null}
          </div>
        </div>
      </Container>
    </main>
  );
}
