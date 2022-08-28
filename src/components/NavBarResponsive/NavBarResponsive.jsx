import React from "react";
import { useMediaQuery } from "react-responsive";
import { NavBarPc } from "./NavBarPc";
import { NavBar } from "./NavBar";

export const NavBarResponsive = () => {
  const screen = useMediaQuery({ query: "(min-width: 900px)" });

  return (
    <div id="nav-bar-responsive">{screen ? <NavBarPc /> : <NavBar />}</div>
  );
};
