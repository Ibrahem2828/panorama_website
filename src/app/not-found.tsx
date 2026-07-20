import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function RootNotFound() {
  return (
    <main className="section-shell grid min-h-screen place-items-center" id="main-content">
      <Container className="max-w-3xl text-center">
        <p className="text-sm font-bold text-[var(--color-brand-burgundy)]">404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-[var(--color-foreground)]">الصفحة غير متاحة / Page unavailable</h1>
        <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">لا نجد هذا الرابط. يمكنك العودة إلى بانوراما لمتابعة استكشاف المجتمع.</p>
        <p className="mt-2 text-base leading-8 text-[var(--color-muted)]">We cannot find this link. Return to Panorama to continue exploring the community.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link className="button-base button-primary" href="/">العودة إلى الرئيسية</Link>
          <Link className="button-base button-secondary" href="/en">Return home</Link>
        </div>
      </Container>
    </main>
  );
}
