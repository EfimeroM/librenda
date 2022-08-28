import "./Form.scss";

import React, { useContext, useState } from "react";

import { Theme } from "../../context/themes";
import emailjs from '@emailjs/browser';

export const Form = () => {
  const { navBg, text, borderInput, clicked } = useContext(Theme);
  const [hover, setHover] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form>
        <p style={{ fontWeight: `${clicked === "contactame" && "600"}` }}>
          Tu e-mail
        </p>
        <input
          type="email"
          className="input"
          style={{
            border: `3px solid ${
              clicked === "contactame" ? "#B51F70" : borderInput
            }`,
            background: text,
            color: navBg,
          }}
        />
        <p style={{ fontWeight: `${clicked === "contactame" && "600"}` }}>
          Escribí tu consulta
        </p>
        <textarea
          className="input textarea"
          style={{
            border: `3px solid ${
              clicked === "contactame" ? "#B51F70" : borderInput
            }`,
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
            clicked === "contactame" && hover
              ? {
                  boxShadow: `inset 0 0 3px 3px white`,
                  color: borderInput,
                  fontWeight: "600",
                  fontSize:".8rem"
                }
              : clicked === "contactame"
              ? {
                  boxShadow: `inset 0 0 2px 2px ${borderInput}`,
                  color: borderInput,
                  fontWeight: "600",
                  fontSize:".8rem"
                }
              : clicked !== "contactame" && hover
              ? { boxShadow: `inset 0 0 0 3px white`, color: text }
              : { boxShadow: `inset 0 -2px 0 0px ${text}`, color: text }
          }
        >
          ENVIAR
        </button>
      </form>
    </>
  );
};
