import React, { useContext } from "react";
import "./Footer.scss";
import { Theme } from "../../context/themes";
import logoLibrenda from "../../assets/logo-librenda.png";
import logoLibrendaDark from "../../assets/logo-librenda-dark.png";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { Form } from "../Form/Form";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { navBg, text, clicked } = useContext(Theme);

  return (
    <div
      id="footer"
      style={{ background: navBg }}
      className={clicked === "contactame" && "animation-form"}
    >
      <div className="content">
        <div className={clicked === "contactame" ? "redes-full" : "redes"}>
          {clicked === "libros" ? (
            <img src={logoLibrendaDark} alt="logo librenda" />
          ) : (
            <img src={logoLibrenda} alt="logo librenda" />
          )}
          <div className="icons">
            <a
              className="related-box"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              style={{ background: text }}
            >
              <AiOutlineInstagram
                className="icon"
                style={{ background: text, color: navBg }}
              />
            </a>
            <a
              className="related-box"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              style={{ background: text }}
            >
              <AiOutlineTwitter
                className="icon"
                style={{ background: text, color: navBg }}
              />
            </a>
            <a
              className="related-box"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              style={{ background: text }}
            >
              <IoLogoTiktok
                className="icon"
                style={{ background: text, color: navBg }}
              />
            </a>
            <a
              className="related-box"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              style={{ background: text }}
            >
              <AiFillYoutube className="icon" style={{ color: navBg }} />
            </a>
          </div>
        </div>
        {clicked !== "contactame" && (
          <div className="contacto" style={{ color: text }}>
            <h2>DEJÁ ACÁ TU CONSULTA</h2>
            <Form />
          </div>
        )}
      </div>
      <div className="by" style={{ background: text, color: navBg }}>
        <p>
          •• librenda. 2022.{" "}
          <a
            className="related-box"
            href="https://cutt.ly/oXCrGOb"
            target="_blank"
            rel="noreferrer"
            style={{ color: navBg }}
          >
            DISEÑO Y DESARROLLO POR EL EQUIPO
          </a>
          {" "}••
        </p>
      </div>
    </div>
  );
};
