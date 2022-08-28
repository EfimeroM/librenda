import React from "react";
import { blend } from "../../data/multisensorial";
import { velas } from "../../data/multisensorial";
import { pijamas } from "../../data/multisensorial";
import { almohadones } from "../../data/multisensorial";
import "./ItemListContainerMultisensorial.scss";
import { ItemList } from "./ItemList";
import vector from "../../assets/box-multisensorial/Vector.png";

export const ItemListContainerMultisensorial = () => {
  return (
    <div id="item-list-container-multisensorial">
      <div className="container-multisensorial">
        <div className="container">
          <h2>Blends</h2>
          <img src={vector} alt="vector" className="vector" style={{width:"120px"}}/>
          <div className="slider">
            <ItemList array={blend} />
          </div>
        </div>
        <div className="container">
          <h2>Velas Aromáticas</h2>
          <img src={vector} alt="vector" className="vector" style={{width:"300px"}} />
          <div className="slider">
            <ItemList array={velas} />
          </div>
        </div>
        <div className="container">
          <h2>Pijamas</h2>
          <img src={vector} alt="vector" className="vector" style={{width:"150px"}} />
          <div className="slider">
            <ItemList array={pijamas} />
          </div>
        </div>
        <div className="container">
          <h2>Almohadones</h2>
          <img src={vector} alt="vector" className="vector" style={{width:"250px"}} />
          <div className="slider">
            <ItemList array={almohadones} />
          </div>
        </div>
      </div>
    </div>
  );
};
