import React, { useContext } from "react";
import { Form } from "../../components/Form/Form";
import "./Contactame.scss";
import { Theme } from "../../context/themes";
import { useMediaQuery } from "react-responsive";

export const Contactame = () => {
  const { borderInput } = useContext(Theme);
  const screen = useMediaQuery({ query: "(min-width: 900px)" });

  return (
    <div id="contactame" style={{ color: borderInput }}>
      <div className="animation-contactame">
        <div className="content">
          <div className="head">
            <h2 style={screen ? { display: "none" } : { display: "block" }}>
              CONTACTAME
            </h2>
          </div>
          <h1>¿Tienes alguna consulta?</h1>
          <h2>Podes preguntar libremente la duda que tengas aqui:</h2>
        </div>
      </div>
      <Form />
    </div>
  );
};
