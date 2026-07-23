"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useLocale } from "next-intl";
import { cn } from "@/lib/cn";

const easeEntrance: [number, number, number, number] = [0.16, 1, 0.3, 1];

type AnimatedRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  direction?: "up" | "start" | "end";
};

export function AnimatedReveal({ children, className, delay = 0, distance = 18, direction = "up" }: AnimatedRevealProps) {
  const reduceMotion = useReducedMotion();
  const locale = useLocale();
  const horizontalDistance = locale === "ar" ? -distance : distance;
  // An end-side translation can make a full-width mobile card extend beyond
  // the viewport before it enters, so it uses the same safe vertical reveal.
  const initial = direction === "up" || direction === "end"
    ? { opacity: 0, y: distance }
    : { opacity: 0, x: -horizontalDistance };

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={initial}
      transition={{ duration: 0.56, delay, ease: easeEntrance }}
      viewport={{ once: true, margin: "-40px" }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
