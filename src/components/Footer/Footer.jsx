import React, { useContext, useState } from "react";
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

export const Footer = () => {
  const { navBg, text, clicked, borderInput } = useContext(Theme);
  const [hover, setHover] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="footer" style={{ background: navBg }}>
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
            <form>
              <p>Tu e-mail</p>
              <input
                type="email"
                className="input"
                style={{
                  border: `3px solid ${borderInput}`,
                  background: text,
                  color: navBg,
                }}
              />
              <p>Escribí tu consulta</p>
              <textarea
                className="input textarea"
                style={{
                  border: `3px solid ${borderInput}`,
                  background: text,
                  color: navBg,
                }}
              ></textarea>
              <button
                type="submit"
                className={hover ? "submit-animation submit" : "submit"}
                value={"ENVIAR"}
                onClick={(e) => onSubmit(e)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={
                  hover
                    ? { boxShadow: `inset 0 0 0 3px white`, color: text }
                    : { borderBottom: `2px solid ${text}`, color: text }
                }
              >ENVIAR</button>
            </form>
          </div>
        )}
      </div>
      <div className="by" style={{ background: text, color: navBg }}>
        <p>•• librenda. 2022. diseño y desarrollo por ••</p>
      </div>
    </div>
  );
};
