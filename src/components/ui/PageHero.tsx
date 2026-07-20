import { AnimatedReveal } from "@/components/motion/AnimatedReveal";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { GoldThread } from "@/components/ui/GoldThread";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  breadcrumbLabel: string;
};

export function PageHero({ eyebrow, title, description, breadcrumbs, breadcrumbLabel }: PageHeroProps) {
  return (
    <section className="section-shell--compact isolate overflow-hidden pt-12 sm:pt-16">
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -end-20 -top-24 h-72 w-72 rounded-full bg-[color-mix(in_srgb,var(--color-brand-purple)_14%,transparent)] blur-3xl" />
        <div className="absolute -start-28 bottom-0 h-64 w-64 rounded-full bg-[color-mix(in_srgb,var(--color-brand-burgundy)_10%,transparent)] blur-3xl" />
      </div>
      <Container>
        <Breadcrumbs items={breadcrumbs} label={breadcrumbLabel} />
        <AnimatedReveal>
          <Badge>{eyebrow}</Badge>
          <h1 className="display-title max-w-[17ch]">{title}</h1>
          <p className="mt-6 max-w-3xl text-[1.05rem] leading-8 text-[var(--color-muted)] sm:text-lg sm:leading-9">{description}</p>
        </AnimatedReveal>
      </Container>
      <GoldThread className="absolute inset-x-0 -bottom-7 opacity-70" />
    </section>
  );
}
