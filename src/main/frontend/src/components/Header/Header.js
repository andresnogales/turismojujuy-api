import classes from "./Header.module.css";
import Hero from "../../assets/hero.png";
import { ImSearch } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={Hero} alt="Paisaje Jujuy" />
      <div className={classes["search-toggle"]}>
        <ImSearch /> Buscar
      </div>
      <div className={classes["search-expanded"]}>
        <div className={classes["search-expanded-button"]}>
          <div>
            <ImSearch />
            <span className={classes["search-expanded-label"]}>
              Búsqueda desplegable
            </span>
          </div>
          <div>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
