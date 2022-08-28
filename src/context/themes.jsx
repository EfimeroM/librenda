import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Theme = createContext([]);
export const ThemeProvider = ({ children }) => {
  let location = useLocation();
  const [theme, setTheme] = useState("theme-sobre-mi");
  const [navBg, setNavBg] = useState("#ffff");
  const [iconTheme, setIconTheme] = useState("#ffff");
  const [text, setText] = useState("#ffff");
  const [clicked, setClicked] = useState("");
  const [borderInput, setBorderInput] = useState("#ffff");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setNavBg("#55B191");
        setIconTheme("#ffff");
        document.body.style = "background: #FFFF ;";
        setText("white");
        setClicked("sobreMi");
        setBorderInput("#00A86E");
        break;
      case "/que-vas-a-encontrar":
        setNavBg("#0884FF");
        setIconTheme("#E5F2FF");
        document.body.style = "background: #E5F2FF ;";
        setText("white");
        setClicked("encontrar");
        setBorderInput("#0054A8");
        break;
      case "/libros":
        setNavBg("#FFC692");
        setIconTheme("#FFF2E5");
        document.body.style = "background: #FFF2E5 ;";
        setText("#3B1D00");
        setClicked("libros");
        setBorderInput("#A85100");
        break;
      case "/box-multisensorial":
        setNavBg("#7231D2");
        setIconTheme("#F1EDF7");
        document.body.style = "background: #F1EDF7 ;";
        setText("white");
        setClicked("boxMultisensorial");
        setBorderInput("#EAEAF2");
        break;
      case "/contactame":
        setNavBg("#B51F70");
        setIconTheme("#F7EDF3");
        document.body.style = "background: #F7EDF3 ;";
        setText("white");
        setClicked("contactame");
        setBorderInput("#4c0b2f");
        break;
      default:
        break;
    }
  }, [location.pathname, theme]);

  return (
    <Theme.Provider
      value={{ navBg, text, clicked, borderInput, iconTheme, setTheme }}
    >
      {children}
    </Theme.Provider>
  );
};
