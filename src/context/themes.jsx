import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Theme = createContext([]);
export const ThemeProvider = ({ children }) => {
  let location = useLocation();
  const [theme, setTheme] = useState("theme-sobre-mi");
  const [navBg, setNavBg] = useState("#ffff");
  const [text, setText] = useState("#ffff");
  const [clicked, setClicked] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setNavBg("#55B191");
        document.body.style = "background: #E4FFF6;";
        setText("white");
        setClicked("sobreMi");
        break;
      case "/que-vas-a-encontrar":
        setNavBg("#0884FF");
        document.body.style = "background: #E5F2FF;";
        setText("white");
        setClicked("encontrar");
        break;
      case "/libros":
        setNavBg("#FFC692");
        document.body.style = "background: #FFF2E5;";
        setText("#3B1D00");
        setClicked("libros");
        break;
      case "/box-multisensorial":
        setNavBg("#7231D2");
        document.body.style = "background: #F1EDF7;";
        setText("white");
        setClicked("boxMultisensorial");
        break;
      case "/contactame":
        setNavBg("#B51F70");
        document.body.style = "background: #F7EDF3;";
        setText("white");
        setClicked("contactame");
        break;
      default:
        break;
    }
  }, [location.pathname, theme]);

  return (
    <Theme.Provider value={{ navBg, text, clicked, setTheme }}>
      {children}
    </Theme.Provider>
  );
};
