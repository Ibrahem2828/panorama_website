"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type MotionCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  index?: number;
};

export function MotionCard({ children, className, delay = 0, index = 0 }: MotionCardProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("transition-shadow duration-300", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.4,
        delay: delay + index * 0.06,
        ease: "easeOut",
      }}
      whileHover={{ y: -4 }}
    >
      {children}
    </motion.div>
  );
}
