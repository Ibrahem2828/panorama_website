import { cn } from "@/lib/cn";

type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className }: SkeletonProps) {
  return <span aria-hidden="true" className={cn("block animate-pulse rounded-[var(--radius-sm)] bg-[var(--color-surface-strong)]", className)} />;
}
