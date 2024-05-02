"use client";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return Cookies.get("theme") || "light";
  });

  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // Save theme state to cookie
    Cookies.set("theme", theme, { expires: 365 }); // Set cookie to expire in 1 year
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
