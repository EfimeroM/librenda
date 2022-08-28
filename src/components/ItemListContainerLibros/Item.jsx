import React from "react";
import authorImg from "../../assets/libros/author.jpg"

export const Item = ({ name, text, img, author }) => {
  return (
    <div className="card">
      <div className="card-style">
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <p>{text}</p>
        <div className="footer">
          <img src={authorImg} alt="foto de author" />
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
};
