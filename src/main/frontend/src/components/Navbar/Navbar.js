import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <Link to={"/"}>
          <img src={Logo} width="160" alt="Jujuy Turismo" />
        </Link>
      </div>
      <ul className={classes["navbar__items"]}>
        <div className={classes["navbar__item-links"]}>
          <li>
            <Link className={classes["link"]} to={"/"}>
              Inicio
            </Link>
          </li>
          <li>
            <a className={classes["link"]} href="#">
              Qué hacer
            </a>
          </li>
          <li>
            <a className={classes["link"]} href="#">
              Destinos
            </a>
          </li>
          <li>
            <a className={classes["link"]} href="#">
              Servicios
            </a>
          </li>
          <li>
            <a className={classes["link"]} href="#">
              Información
            </a>
          </li>
          <li>
            <a className={classes["link"]} href="#">
              Institucional
            </a>
          </li>
          <li>
            <a className={classes["link"]} href="#">
              Blog
            </a>
          </li>
        </div>
      </ul>
      <HamburgerMenu></HamburgerMenu>
    </nav>
  );
};

export default Navbar;
