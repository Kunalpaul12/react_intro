import { createContext } from "react";

export const light = {
  isDark: false,
  text: "#000000",
  background: "#FFFFFF",
};

export const dark = {
  isDark: true,
  text: "blue",
  background: "#000000",
};

export const ThemeContext = createContext(null);
