import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import LanguageButton from "../Language/LanguageButton";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <Link to={"/"}>
          <img src={Logo} width="180" alt="Jujuy Turismo" />
        </Link>
      </div>
      <div className={classes["navbar__container"]}>
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
          <LanguageButton />
        </ul>
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
