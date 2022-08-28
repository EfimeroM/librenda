import React, { useContext, useState } from "react";
import "./NavBarPc.scss";
import logoLibrenda from "../../assets/logo-librenda.png";
import logoLibrendaDark from "../../assets/logo-librenda-dark.png";
import { Link } from "react-router-dom";
import { Theme } from "../../context/themes";

export const NavBarPc = () => {
  const { navBg, text, clicked, setTheme } = useContext(Theme);
  const [animation, setAnimation] = useState(false);
  
  const cambiarTema = (tema) => {
    setTheme(tema);
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 1500);
  };

  return (
    <div
      id="nav-bar-pc"
      style={{ backgroundColor: navBg }}
      className={animation ? "nav-animation" : null}
    >
      <img
        src={logoLibrenda}
        className="logo-librenda"
        alt="logo librenda"
        style={
          clicked === "libros" ? { display: "none" } : { display: "block" }
        }
      />
      <img
        src={logoLibrendaDark}
        className="logo-librenda"
        alt="logo librenda"
        style={
          clicked === "libros" ? { display: "block" } : { display: "none" }
        }
      />
      <div className="nav">
        <ul>
          <Link
            to={"/"}
            className="li"
            onClick={() => cambiarTema("theme-sobre-mi")} 
            style={
              clicked === "sobreMi"
                ? { color: navBg, backgroundColor: "white" }
                : { color: text }
            }
          >
            SOBRE MI
          </Link>
          <Link
            to={"/que-vas-a-encontrar"}
            className="li"
            onClick={() => cambiarTema("theme-encontrar")}
            style={
              clicked === "encontrar"
                ? { color: navBg, backgroundColor: "white" }
                : { color: text }
            }
          >
            ¿QUE VAS A ENCONTRAR?
          </Link>
          <Link
            to={"/libros"}
            className="li"
            onClick={() => cambiarTema("theme-libros")}
            style={
              clicked === "libros"
                ? { color: navBg, backgroundColor: "#3B1D00", boxShadow: "inset 0 0 0 0px red" }
                : { color: text }
            }
            disabled={clicked === "libros"}
          >
            LIBROS
          </Link>
          <Link
            to={"/box-multisensorial"}
            className="li"
            onClick={() => cambiarTema("theme-box-multisensorial")}
            style={
              clicked === "boxMultisensorial"
                ? { color: navBg, backgroundColor: "white" }
                : { color: text }
            }
          >
            BOX MULTISENSORIAL
          </Link>
          <Link
            to={"/contactame"}
            className="li"
            onClick={() => cambiarTema("theme-contactame")}
            style={
              clicked === "contactame"
                ? { color: navBg, backgroundColor: "white" }
                : { color: text }
            }
          >
            CONTACTAME
          </Link>
        </ul>
      </div>
    </div>
  );
};
