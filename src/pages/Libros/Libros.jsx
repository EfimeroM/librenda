import React from "react";
import "./Libros.scss";
import banner from "../../assets/libros/banner.jpg";
import bannerMobile from "../../assets/libros/banner-mobile.jpg";
import { ItemListContainerLibros } from "../../components/ItemListContainerLibros/ItemListContainerLibros";
import { BiSearch } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";

export const Libros = () => {
  const screen = useMediaQuery({ query: "(min-width: 900px)" });

  return (
    <div id="libros">
      <div
        className="banner"
        style={
          screen
            ? { backgroundImage: `url("${banner}")` }
            : { backgroundImage: `url("${bannerMobile}")` }
        }
      >
        <div className="content">
          <div className="head">
            <h2 style={screen ? { display: "none" } : { display: "block" }}>
              LIBROS
            </h2>
          </div>
          <div className="content-animation">
            <h1>Próximamente</h1>
            <p>
              Podrás buscar tu libro entre una gran variedad de recomendaciones
              y propuestas para elegir el que mejor se lleve con tu momento
              especial.
            </p>
          </div>
        </div>
        <div className="search">
          <div className="icon">
            <BiSearch className="img" />
          </div>
          <input
            type="text"
            placeholder="Ingresar título, autor, editorial o palabra clave"
            disabled="disabled"
          />
          <select disabled="disabled">
            <option value="disabled">Filtrar por</option>
          </select>
        </div>
      </div>
      <ItemListContainerLibros />
    </div>
  );
};
