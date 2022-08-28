import React from "react";
import banner from "../../assets/box-multisensorial/banner.png";
import "./BoxMultisensorial.scss";
import { ItemListContainerMultisensorial } from "../../components/ItemListContainerMultisensorial/ItemListContainerMultisensorial";

export const BoxMultisensorial = () => {
  return (
    <div id="box-multisensorial">
      <div className="banner" style={{ backgroundImage: `url("${banner}")` }}>
        <div className="content">
          <div className="content-animation">
            <h1>Próximamente</h1>
            <p>
              Podrás elegir diferentes complementos para que puedas armar tu
              propio “spa de lectura”, con aromas específicos, texturas, sabores
              y demás accesorios que acompañen la experiencia.
            </p>
          </div>
        </div>
      </div>
        <ItemListContainerMultisensorial />
    </div>
  );
};
