"use client";

import { X } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { useLocale, useTranslations } from "next-intl";
import { createPortal } from "react-dom";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link, usePathname } from "@/i18n/routing";
import type { NavItem } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/social/SocialLinks";

type MobileNavigationProps = {
  isOpen: boolean;
  items: NavItem[];
  onClose: () => void;
};

export function MobileNavigation({ isOpen, items, onClose }: MobileNavigationProps) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const menuRef = useRef<HTMLElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const isMounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );
  const isArabic = locale === "ar";

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    returnFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const getFocusableElements = () => Array.from(
      menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ) ?? [],
    );
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = getFocusableElements();
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyboard);
    const focusFrame = window.requestAnimationFrame(() => {
      getFocusableElements()[0]?.focus();
    });

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyboard);
      returnFocusRef.current?.focus();
      returnFocusRef.current = null;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !isMounted) return null;

  return createPortal(
    <>
      <button
        aria-hidden="true"
        aria-label={t("closeMenu")}
        className="fixed inset-0 z-[var(--z-overlay)] cursor-default bg-[rgb(7_18_47/0.58)] backdrop-blur-[2px] xl:hidden"
        onClick={onClose}
        tabIndex={-1}
        type="button"
      />
      <aside
        aria-labelledby="mobile-navigation-title"
        aria-modal="true"
        className={`fixed inset-y-0 ${isArabic ? "right-0 border-l" : "left-0 border-r"} z-[calc(var(--z-overlay)+1)] flex w-[min(88vw,22.5rem)] flex-col overflow-y-auto border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-background)_98%,transparent)] p-4 shadow-[var(--shadow-raised)] backdrop-blur-xl motion-safe:animate-[panorama-drawer-in_220ms_var(--ease-entrance)_both] xl:hidden sm:p-6`}
        id="mobile-navigation"
        ref={menuRef}
        role="dialog"
        style={{ "--drawer-translate": isArabic ? "100%" : "-100%" } as CSSProperties}
      >
        <div className="flex min-h-full flex-col">
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-[var(--color-border)] pb-4">
            <h2 className="text-sm font-extrabold text-[var(--color-muted)]" id="mobile-navigation-title">{t("mobileMenu")}</h2>
            <button aria-label={t("closeMenu")} className="control-button shrink-0" onClick={onClose} type="button">
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
          <nav aria-label={t("mobileMenu")} className="flex flex-col gap-1">
            {items.map((item) => {
              const isCurrentPage = pathname === item.href;

              return (
                <Link
                  aria-current={isCurrentPage ? "page" : undefined}
                  className="rounded-[var(--radius-sm)] px-4 py-3.5 text-base font-bold text-[var(--color-foreground)] transition hover:bg-[var(--color-surface-elevated)] aria-[current=page]:bg-[color-mix(in_srgb,var(--color-brand-navy)_9%,transparent)] aria-[current=page]:text-[var(--color-brand-navy)] dark:aria-[current=page]:text-[var(--color-brand-purple-contrast)]"
                  href={item.href}
                  key={item.key}
                  onClick={onClose}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>
          <Button className="mt-4 w-full" href="/volunteer" onClick={onClose}>
            {t("join")}
          </Button>
          <div className="mt-5 border-t border-[var(--color-border)] pt-5">
            <LanguageSwitcher onBeforeNavigate={onClose} />
          </div>
          <div className="mt-auto border-t border-[var(--color-border)] pt-5">
            <SocialLinks />
          </div>
        </div>
      </aside>
    </>,
    document.body,
  );
}
