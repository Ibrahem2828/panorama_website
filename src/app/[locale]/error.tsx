"use client";

import { RefreshCw } from "lucide-react";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type ErrorPageProps = { error: Error & { digest?: string }; reset: () => void };

export default function LocaleError({ reset }: ErrorPageProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const content = isArabic
    ? { title: "تعذر إكمال عرض هذه الصفحة", description: "حدثت مشكلة مؤقتة. يمكنك إعادة المحاولة أو العودة إلى الصفحة الرئيسية.", retry: "أعد المحاولة", home: "العودة إلى الرئيسية" }
    : { title: "This page could not be displayed", description: "A temporary problem occurred. You can try again or return to the homepage.", retry: "Try again", home: "Return home" };
  return <main className="section-shell grid min-h-[58vh] place-items-center" id="main-content"><Container className="max-w-3xl text-center"><h1 className="text-4xl font-extrabold leading-tight text-[var(--color-foreground)] sm:text-5xl">{content.title}</h1><p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[var(--color-muted)]">{content.description}</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button onClick={reset}><RefreshCw aria-hidden="true" className="h-4 w-4" />{content.retry}</Button><Button href="/" variant="secondary">{content.home}</Button></div></Container></main>;
}
