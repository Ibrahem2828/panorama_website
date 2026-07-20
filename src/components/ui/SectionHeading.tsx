import { Badge } from "@/components/ui/Badge";
import { AnimatedReveal } from "@/components/motion/AnimatedReveal";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  className?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "start", className, id }: SectionHeadingProps) {
  return (
    <AnimatedReveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="section-title" id={id}>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </AnimatedReveal>
  );
}
