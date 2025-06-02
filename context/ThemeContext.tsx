"use client";

import { ThemeContextProps, Mode } from "@/types/ThemeContext";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import customTheme from "@/theme/main/customTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProviderContext = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedMode = localStorage.getItem("mode") as Mode;
    if (savedMode) setMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode, isMounted]);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = customTheme(
    mode === "light" || mode === "dark" ? mode : "light",
  );

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ mode, toggleMode }}>
        <CssBaseline />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Use useTheme inside ThemeProvider wrapper");
  }
  return context;
};
