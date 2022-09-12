import React, { useContext } from "react";
import { ThemeContext, light, dark } from "./themeContext";

export const ThemeInfo = () => {
  const { themeValue, setThemeValue } = useContext(ThemeContext);
  return (
    <div>
      <h1 style={{ color: themeValue?.text }}>
        This is a createContext example
      </h1>
      <button onClick={() => setThemeValue(themeValue?.isDark ? light : dark)}>
        Change Theme to {themeValue?.isDark ? "Dark" : "Light"}
      </button>
    </div>
  );
};
