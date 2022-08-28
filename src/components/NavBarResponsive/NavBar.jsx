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
      <div className="circle" style={{ background: iconTheme }}></div>
      <div className="square" style={{ background: iconTheme }}></div>
      <div
        className="triangle"
        style={{
          borderRight: "1.1vh solid transparent",
          borderBottom: `1.9vh solid ${iconTheme}`,
          borderLeft: "1.1vh solid transparent",
        }}
      ></div>
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
          style={{ background: "#55b191" }}
        >
          SOBRE MÍ
        </Link>
        <Link
          to={"/que-vas-a-encontrar"}
          onClick={() => setMenu(!menu)}
          className={menu ? "li animation-in" : "li animation-out"}
          style={{ background: "#0884FF" }}
        >
          ¿QUÉ VAS A ENCONTRAR?
        </Link>
        <Link
          to={"/libros"}
          onClick={() => setMenu(!menu)}
          className={menu ? "li animation-in" : "li animation-out"}
          style={{ background: "#FFC692", color: "#3B1D00" }}
        >
          LIBROS
        </Link>
        <Link
          to={"box-multisensorial"}
          onClick={() => setMenu(!menu)}
          className={menu ? "li animation-in" : "li animation-out"}
          style={{ background: "#7231D2" }}
        >
          BOX MULTISENSORIAL
        </Link>
        <Link
          to={"contactame"}
          onClick={() => setMenu(!menu)}
          className={menu ? "li animation-in" : "li animation-out"}
          style={{ background: "#B51F70" }}
        >
          CONTACTAME
        </Link>
      </div>
    </div>
  );
};
