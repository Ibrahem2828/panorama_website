"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
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
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = Array.from(menuRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
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
    menuRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyboard);
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <button
        aria-label={t("closeMenu")}
        className="fixed inset-0 z-[59] cursor-default bg-[rgb(7_18_47/0.45)] backdrop-blur-[2px] lg:hidden"
        onClick={onClose}
        tabIndex={-1}
        type="button"
      />
      <aside
      aria-label={t("mobileMenu")}
      aria-modal="true"
      className="fixed inset-x-0 bottom-0 top-[4.5rem] z-[60] max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-background)_98%,transparent)] px-4 pb-8 pt-5 shadow-[var(--shadow-raised)] backdrop-blur-xl motion-safe:animate-[panorama-drawer-in_220ms_var(--ease-entrance)_both] lg:hidden"
      id="mobile-navigation"
      ref={menuRef}
      role="dialog"
    >
      <div className="page-container flex max-w-lg flex-col gap-1">
        <div className="mb-4 flex items-center justify-between border-b border-[var(--color-border)] pb-4">
          <p className="text-sm font-extrabold text-[var(--color-muted)]">{t("mobileMenu")}</p>
          <button aria-label={t("closeMenu")} className="control-button" onClick={onClose} type="button">
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
        {items.map((item) => (
          <Link className="rounded-[var(--radius-sm)] px-4 py-3.5 text-base font-bold text-[var(--color-foreground)] transition hover:bg-[var(--color-surface-elevated)] focus-visible:outline-none" href={item.href} key={item.key} onClick={onClose}>
            {t(item.key)}
          </Link>
        ))}
        <Button className="mt-4 w-full" href="/volunteer" onClick={onClose}>
          {t("join")}
        </Button>
        <div className="mt-5 border-t border-[var(--color-border)] pt-5">
          <SocialLinks />
        </div>
      </div>
      </aside>
    </>
  );
}
