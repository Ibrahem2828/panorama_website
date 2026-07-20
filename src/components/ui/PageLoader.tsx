import { useTranslations } from "next-intl";
import { GoldThread } from "@/components/ui/GoldThread";

export function PageLoader() {
  const t = useTranslations("loading");

  return (
    <main aria-busy="true" aria-live="polite" className="grid min-h-[50vh] place-items-center px-5">
      <div className="surface-card relative w-full max-w-sm overflow-hidden p-8 text-center">
        <GoldThread className="absolute start-0 top-3 opacity-80" />
        <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-full border-2 border-[var(--color-brand-gold)] border-e-transparent text-[var(--color-brand-gold)] motion-safe:animate-panorama-spin">
          <span className="h-4 w-4 rounded-full bg-current" />
        </div>
        <p className="relative mt-5 text-sm font-bold text-[var(--color-muted)]">{t("page")}</p>
      </div>
    </main>
  );
}
