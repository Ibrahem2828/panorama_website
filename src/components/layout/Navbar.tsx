"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Link, usePathname } from "@/i18n/routing";
import { navItems } from "@/data/navigation";

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-background)_87%,transparent)] backdrop-blur-xl">
      <Container>
        <nav aria-label={t("primaryNavigation")} className="flex min-h-[5.3rem] items-center justify-between gap-3">
          <Link aria-label={t("homeAria")} className="shrink-0" href="/#top" onClick={() => setMenuOpen(false)}>
            <BrandLogo compact priority />
          </Link>

          <div className="hidden items-center gap-0.5 xl:flex">
            {navItems.map((item) => (
              <Link
                aria-current={pathname === item.href ? "page" : undefined}
                className="rounded-full px-3 py-2 text-sm font-bold text-[var(--color-muted)] transition-[color,background-color] duration-150 hover:bg-[var(--color-surface-elevated)] hover:text-[var(--color-foreground)] aria-[current=page]:bg-[color-mix(in_srgb,var(--color-brand-navy)_9%,transparent)] aria-[current=page]:text-[var(--color-brand-navy)] dark:aria-[current=page]:text-[var(--color-brand-purple-contrast)]"
                href={item.href}
                key={item.key}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button className="hidden lg:inline-flex" href="/volunteer">
              {t("join")}
            </Button>
            <button aria-controls="mobile-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? t("closeMenu") : t("openMenu")} className="control-button xl:hidden" onClick={() => setMenuOpen(true)} type="button">
              <Menu aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </Container>
      <MobileNavigation isOpen={menuOpen} items={navItems} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
