import React from "react";

export const Item = ({ name, text, img }) => {
  return (
    <div className="card">
      <div className="card-style">
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
