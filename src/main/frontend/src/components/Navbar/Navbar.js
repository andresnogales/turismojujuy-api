import Logo from "../../assets/logo.png";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img src={Logo} width="160" alt="Jujuy Turismo" />
      </div>
      <ul className={classes["navbar__items"]}>
        <div className={classes["navbar__item-links"]}>
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
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
