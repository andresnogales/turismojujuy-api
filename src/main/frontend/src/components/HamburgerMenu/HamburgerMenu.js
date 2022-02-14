import { useState } from "react";
import classes from "./HamburgerMenu.module.css";

const HamburgerMenu = () => {
  const [state, setState] = useState("");
  const toggleMobileMenu = () => {
    if (state === "") setState("open");
    else setState("");
  };
  return (
    <div
      id={classes["hamburger-icon"]}
      className={classes[state]}
      onClick={toggleMobileMenu}
    >
      <div className={classes["bar1"]}></div>
      <div className={classes["bar2"]}></div>
      <div className={classes["bar3"]}></div>
      <ul className={classes["mobile-menu"]}>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Qué hacer</a>
        </li>
        <li>
          <a href="#">Destinos</a>
        </li>
        <li>
          <a href="#">Servicios</a>
        </li>
        <li>
          <a href="#">Información</a>
        </li>
        <li>
          <a href="#">Institucional</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
