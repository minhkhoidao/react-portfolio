import React, { useState, useEffect, createContext } from "react";
import { THEMES } from "./data";
import { Theme } from "../types";

interface IThemeState extends Theme {
  type: string;
  animate?: boolean;
}
const ThemeContext = createContext<any>({});
const { Provider } = ThemeContext;

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<IThemeState>({
    ...THEMES.react,
    type: "react",
  });
  let themeChangeInterval: any;

  useEffect(() => {
    setThemeColors(THEMES.react);
    startThemeChangeTimer();

    // Cleanup on component unmount
    return () => {
      stopThemeChangeTimer();
    };
  }, []);

  const changeTheme = (type: string) => {
    if (THEMES[type]) {
      setThemeColors(THEMES[type]);
      if (theme.type !== type) {
        setTheme({
          ...THEMES[type],
          animate: true,
          type,
        });
      }
    }
  };

  const stopThemeChangeTimer = () => {
    clearInterval(themeChangeInterval);
    themeChangeInterval = null;
  };

  const startThemeChangeTimer = () => {
    stopThemeChangeTimer(); // Ensure no intervals are duplicated
    themeChangeInterval = setInterval(() => {
      const themesKeys = Object.keys(THEMES);
      let randomKey = themesKeys[Math.floor(Math.random() * themesKeys.length)];
      while (randomKey === theme.type) {
        randomKey = themesKeys[Math.floor(Math.random() * themesKeys.length)];
      }
      changeTheme(randomKey);
    }, 30000); // changes the theme every 10 seconds
  };

  const setThemeColors = (theme: Theme) => {
    document.documentElement.style.setProperty(
      "--primary-color",
      theme.primaryColor,
    );
    document.documentElement.style.setProperty(
      "--secondary-color",
      theme.color,
    );
  };

  return (
    <Provider
      value={{
        ...theme,
        changeTheme,
        stopThemeChangeTimer,
        startThemeChangeTimer,
      }}
    >
      {children}
    </Provider>
  );
};

export { ThemeProvider, ThemeContext };
