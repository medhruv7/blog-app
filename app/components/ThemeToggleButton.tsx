"use client";

import { useTheme } from "next-themes";

export const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >Theme Toggle</button>
    </div>
  );
};
