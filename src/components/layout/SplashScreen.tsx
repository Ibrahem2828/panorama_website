"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { site } from "@/config/site";

const splashStorageKey = "panorama-splash-seen";

function subscribeToSessionStorage(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === splashStorageKey) onStoreChange();
  };
  window.addEventListener("storage", handleStorage);
  return () => window.removeEventListener("storage", handleStorage);
}

function isSplashEligibleForSession() {
  try {
    return window.sessionStorage.getItem(splashStorageKey) !== "true";
  } catch {
    return true;
  }
}

function markSplashSeenForSession() {
  try {
    window.sessionStorage.setItem(splashStorageKey, "true");
    return true;
  } catch {
    return false;
  }
}

export function SplashScreen() {
  const t = useTranslations("loading");
  const reduceMotion = useReducedMotion();
  const eligibleForSession = useSyncExternalStore(
    subscribeToSessionStorage,
    isSplashEligibleForSession,
    () => true,
  );
  const [dismissed, setDismissed] = useState(false);
  const visible = eligibleForSession && !reduceMotion && !dismissed;

  useEffect(() => {
    if (!visible) return;
    markSplashSeenForSession();

    const timer = window.setTimeout(() => setDismissed(true), 1350);
    return () => window.clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div aria-label={t("splash")} aria-live="polite" className="fixed inset-0 z-[80] grid place-items-center bg-[var(--color-background)] px-6" role="status">
      <div className="relative flex w-full max-w-sm flex-col items-center text-center">
        <svg aria-hidden="true" className="h-20 w-full text-[var(--color-brand-gold)]" fill="none" viewBox="0 0 320 80">
          <path d="M12 40C48 3 90 3 126 40s78 37 114 0 48-37 68 0" pathLength="1" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" style={{ animation: "panorama-splash-line 920ms var(--ease-entrance) both", strokeDasharray: 1 }} />
        </svg>
        <div className="relative -mt-1 h-36 w-52 overflow-hidden rounded-[1rem] bg-white shadow-[var(--shadow-card)]">
          <Image alt="" className="object-contain" fill priority sizes="208px" src={site.assets.logo} />
        </div>
        <p className="mt-5 text-sm font-bold text-[var(--color-muted)]">{t("splash")}</p>
      </div>
    </div>
  );
}
