import { useState, useMemo } from "react";
import { ThemeContext, light } from "./Tutorial/useContext/themeContext";
import { ThemeInfo } from "./Tutorial/useContext/themeInfo";

function App() {
  const [themeValue, setThemeValue] = useState(light);
  const themeMemo = useMemo(
    () => ({
      themeValue,
      setThemeValue,
    }),
    [themeValue, setThemeValue]
  );

  return (
    <div className="App">
      <ThemeContext.Provider value={themeMemo}>
        <ThemeInfo />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
