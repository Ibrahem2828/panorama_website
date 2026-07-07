"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  function handleToggle() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "inline-flex min-h-9 w-9 items-center justify-center rounded-full border transition",
        "border-panorama-silver/60 bg-white/80 text-panorama-navy hover:border-panorama-navy hover:bg-white",
        "dark:border-white/15 dark:bg-white/5 dark:text-white/80 dark:hover:border-white/40 dark:hover:bg-white/10",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-panorama-purple",
      )}
      onClick={handleToggle}
      type="button"
    >
      {isDark ? <Sun aria-hidden="true" className="h-4 w-4" /> : <Moon aria-hidden="true" className="h-4 w-4" />}
    </button>
  );
}
