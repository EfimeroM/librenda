import React, { useContext, useState } from "react";
import "./NavBar.scss";
import { Theme } from "../../context/themes";
import logoLibrenda from "../../assets/logo-librenda-mobile.png";
import logoLibrendaDark from "../../assets/logo-librenda-dark-mobile.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const { navBg, iconTheme, clicked } = useContext(Theme);
  const [menu, setMenu] = useState(false);
  return (
    <div id="nav-bar" style={{ background: `${navBg}87` }}>
      <div className="nav">
        <button
          className="icon-menu"
          style={{ background: navBg }}
          onClick={() => setMenu(!menu)}
        >
          <img
            src={clicked === "libros" ? logoLibrendaDark : logoLibrenda}
            alt="logo librenda"
          />
        </button>
      </div>
      <div className={menu ? "menu menu-in" : "menu menu-out"}>
        <Link
          to={"/"}
          onClick={() => setMenu(!menu)}
          className={menu ? "li animation-in" : "li animation-out"}
          style={clicked ==="sobreMi" ? {display:"none"}:{ background: "#55b191" }}
        >
          SOBRE MÍ
        </Link>
        <Link
          to={"/que-vas-a-encontrar"}
          onClick={() => setMenu(!menu)}
          className={menu ? "li animation-in" : "li animation-out"}
          style={clicked ==="encontrar" ? {display:"none"}:{ background: "#0884FF" }}
        >
          ¿QUÉ VAS A ENCONTRAR?
        </Link>
        <Link
          to={"/libros"}
          onClick={() => setMenu(!menu)}
          className={menu ? "li animation-in" : "li animation-out"}
          style={clicked ==="libros" ? {display:"none"}:{ background: "#FFC692", color: "#3B1D00" }}
        >
          LIBROS
        </Link>
        <Link
          to={"box-multisensorial"}
          onClick={() => setMenu(!menu)}
          className={menu ? "li animation-in" : "li animation-out"}
          style={clicked ==="boxMultisensorial" ? {display:"none"}:{ background: "#7231D2" }}
        >
          BOX MULTISENSORIAL
        </Link>
        <Link
          to={"contactame"}
          onClick={() => setMenu(!menu)}
          className={menu ? "li animation-in" : "li animation-out"}
          style={clicked ==="contactame" ? {display:"none"}:{ background: "#B51F70" }}
        >
          CONTACTAME
        </Link>
      </div>
    </div>
  );
};
