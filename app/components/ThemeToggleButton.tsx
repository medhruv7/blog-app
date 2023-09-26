"use client";

import { IconButton } from "@mui/material";
import { useTheme } from "next-themes";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useEffect, useState } from "react";

export const ThemeToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOnClickThemeButton = () => {
    if (!mounted) return null;
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <IconButton onClick={handleOnClickThemeButton}>
        {!mounted || theme === "dark" ? (
          <Brightness4Icon />
        ) : (
          <Brightness7Icon />
        )}
      </IconButton>
    </div>
  );
};
