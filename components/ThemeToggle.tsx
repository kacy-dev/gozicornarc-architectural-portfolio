"use client";

import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md bg-concrete text-foreground border border-border transition hover:bg-accent hover:text-white"
    >
      Toggle theme
    </button>
  );
}
