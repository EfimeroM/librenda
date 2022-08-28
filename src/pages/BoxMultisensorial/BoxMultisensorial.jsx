import React from "react";
import banner from "../../assets/box-multisensorial/banner.png";
import bannerMobile from "../../assets/box-multisensorial/banner-mobile.jpg";
import "./BoxMultisensorial.scss";
import { ItemListContainerMultisensorial } from "../../components/ItemListContainerMultisensorial/ItemListContainerMultisensorial";
import { useMediaQuery } from "react-responsive";

export const BoxMultisensorial = () => {
  const screen = useMediaQuery({ query: "(min-width: 900px)" });

  return (
    <div id="box-multisensorial">
      <div className="banner" style={screen ? { backgroundImage: `url("${banner}")` } : { backgroundImage: `url("${bannerMobile}")` }}>
        <div className="content">
          <div className="head">
            <h2 style={screen ? { display: "none" } : { display: "block" }}>
              BOX MULTISENSORIAL
            </h2>
          </div>
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
