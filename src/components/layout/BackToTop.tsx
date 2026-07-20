"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

export function BackToTop() {
  const t = useTranslations("navigation");
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 560);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (!visible) return null;

  return (
    <button aria-label={t("backToTop")} className="control-button fixed bottom-5 end-5 z-30 shadow-[var(--shadow-card)]" onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })} type="button">
      <ArrowUp aria-hidden="true" className="h-5 w-5" />
    </button>
  );
}
