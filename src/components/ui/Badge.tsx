import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[#BFC0C2]/60 bg-white/90 px-3 py-1 text-sm font-semibold text-panorama-navy shadow-sm dark:border-white/15 dark:bg-white/5 dark:text-white/80",
        className,
      )}
    >
      {children}
    </span>
  );
}
