"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedHeroVisualProps = {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
  role?: string;
};

export function AnimatedHeroVisual({ children, className, "aria-label": ariaLabel, role }: AnimatedHeroVisualProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <div aria-label={ariaLabel} className={className} role={role}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      aria-label={ariaLabel}
      className={className}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      role={role}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
