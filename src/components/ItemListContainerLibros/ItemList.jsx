import React from "react";
import { Item } from "./Item";

export const ItemList = ({array}) => {
  return (
    <>
      {array.map((res) => (
        <Item key={res.id} {...res}/>
      ))}
    </>
  );
};
