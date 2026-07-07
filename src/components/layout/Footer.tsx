import { useTranslations } from "next-intl";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export function Footer() {
  const t = useTranslations("footer");

  const footerLinks = [
    { label: t("links.features"), href: "/#features" },
    { label: t("links.security"), href: "/#security" },
    { label: t("links.privacy"), href: "/privacy" },
    { label: t("links.terms"), href: "/terms" },
  ];

  return (
    <footer className="bg-panorama-text text-white dark:bg-[#060a18]">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-start">
          <div>
            <BrandLogo inverted />
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
              {t("description")}
            </p>
            <a
              className="mt-5 inline-flex text-sm font-bold text-white underline decoration-white/35 underline-offset-4 hover:decoration-white"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:flex sm:justify-end sm:gap-6">
            {footerLinks.map((link) => (
              <a
                className="text-sm font-bold text-white/70 transition hover:text-white focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
          {t("copyright")}
        </div>
      </Container>
    </footer>
  );
}
