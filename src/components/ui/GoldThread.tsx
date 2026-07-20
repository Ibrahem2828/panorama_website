import { cn } from "@/lib/cn";

type GoldThreadProps = {
  className?: string;
  orientation?: "horizontal" | "vertical";
};

export function GoldThread({ className, orientation = "horizontal" }: GoldThreadProps) {
  const path = orientation === "horizontal"
    ? "M2 28C45 28 48 5 92 5s48 45 95 45 50-43 96-43 48 21 94 21"
    : "M28 2C28 45 5 48 5 92s45 48 45 95-43 50-43 96 21 48 21 94";

  return (
    <svg aria-hidden="true" className={cn("gold-thread pointer-events-none", orientation === "horizontal" ? "h-14 w-full" : "h-full w-14", className)} fill="none" preserveAspectRatio="none" viewBox="0 0 380 56">
      <path className="gold-thread-path" d={path} stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
    </svg>
  );
}
