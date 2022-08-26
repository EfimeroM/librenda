import React, { useContext } from "react";
import { Form } from "../../components/Form/Form";
import "./Contactame.scss";
import { Theme } from "../../context/themes";

export const Contactame = () => {
  const { borderInput } = useContext(Theme);

  return (
    <div id="contactame" style={{ color: borderInput }}>
      <div className="animation-contactame">
        <div className="content">
          <h1>¿Tienes alguna consulta?</h1>
          <h2>Podes preguntar libremente la duda que tengas aqui:</h2>
        </div>
      </div>
      <Form />
    </div>
  );
};
