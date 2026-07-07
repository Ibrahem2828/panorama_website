"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "framer-motion";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  const prefersReduced = useReducedMotion();

  return (
    <article
      className={cn(
        "group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300",
        "dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-blue-500/30",
        prefersReduced
          ? ""
          : "hover:-translate-y-1 hover:border-panorama-navy/30 hover:shadow-card dark:hover:shadow-blue-900/20",
        className,
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-panorama-navy/10 text-panorama-navy dark:bg-blue-500/15 dark:text-blue-400">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-black text-panorama-text dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-panorama-muted dark:text-white/60">{description}</p>
    </article>
  );
}
