import React from "react";
import { ItemList } from "./ItemList";
import vector from "../../assets/libros/Vector.png"
import { novelas } from "../../data/libros";
import "./ItemListContainerLibros.scss"

export const ItemListContainerLibros = () => {
  return (
    <div id="item-list-container-libros">
      <div className="container-libros">
        <div className="container">
          <h2>Novelas</h2>
          <img src={vector} alt="vector" className="vector" style={{width:"150px"}} />
          <div className="slider">
            <ItemList array={novelas} />
          </div>
        </div>
        <div className="container">
          <h2>Clásicos</h2>
          <img src={vector} alt="vector" className="vector" style={{width:"150px"}}/>
          <div className="slider">
            <ItemList array={novelas} />
          </div>
        </div>
        <div className="container">
          <h2>Sobre feminismo</h2>
          <img src={vector} alt="vector" className="vector" style={{width:"300px"}} />
          <div className="slider">
            <ItemList array={novelas} />
          </div>
        </div>
        <div className="container">
          <h2>Historia</h2>
          <img src={vector} alt="vector" className="vector" style={{width:"150px"}} />
          <div className="slider">
            <ItemList array={novelas} />
          </div>
        </div>
      </div>
    </div>
  );
};
