"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/data/site";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const isArabic = locale === "ar";

  const navItems = [
    { label: t("features"), href: "/#features" },
    { label: t("mobileApp"), href: "/#mobile-app" },
    { label: t("dashboard"), href: "/#dashboard" },
    { label: t("security"), href: "/#security" },
    { label: t("contact"), href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1026]/80">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-panorama-navy focus:shadow-card dark:focus:bg-[#0b1026] dark:focus:text-white"
        href="#main-content"
      >
        {t("skipToContent")}
      </a>
      <Container>
        <nav aria-label={isArabic ? "القائمة الرئيسية" : "Primary navigation"} className="flex min-h-20 items-center justify-between gap-4">
          <a aria-label={isArabic ? "بانوراما الصفحة الرئيسية" : "Panorama home"} href={isArabic ? "/ar" : "/"}>
            <BrandLogo />
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                className="rounded-lg px-3 py-2 text-sm font-bold text-panorama-muted transition hover:bg-slate-100 hover:text-panorama-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-panorama-purple dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button href={`mailto:${site.email}?subject=Panorama%20Demo%20Request`}>
              {t("requestDemo")}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
              aria-expanded={menuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-panorama-silver/60 bg-white/80 text-panorama-navy shadow-sm transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-panorama-purple dark:border-white/15 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
            >
              {menuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div
            className={`absolute left-0 right-0 mt-0 border-b bg-white/95 pb-4 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1026]/95 lg:hidden ${isArabic ? "text-right" : "text-left"}`}
          >
            <Container>
              <div className="flex flex-col gap-1 pt-4">
                {navItems.map((item) => (
                  <a
                    className="rounded-lg px-4 py-3 text-sm font-bold text-panorama-muted transition hover:bg-slate-100 hover:text-panorama-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-panorama-purple dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white"
                    href={item.href}
                    key={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  className="mt-2 w-full"
                  href={`mailto:${site.email}?subject=Panorama%20Demo%20Request`}
                >
                  {t("requestDemo")}
                </Button>
              </div>
            </Container>
          </div>
        )}
      </Container>
    </header>
  );
}
