import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import LanguageButton from "../Language/LanguageButton";
import classes from "./Navbar.module.css";
import { categoriesList } from "../../data/categories";
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";

const Navbar = () => {
  let location = useLocation();
  const { language, setLanguage } = useContext(LanguageContext);

  const regions = ["Puna", "Quebrada", "Valles", "Yungas"];

  const menu = [
    {
      id: 1,
      title: {
        es: "Inicio",
        en: "Home",
      },
    },
    {
      id: 2,
      title: {
        es: "Qué Hacer",
        en: "What to do",
      },
      submenu: categoriesList,
    },
    {
      id: 3,
      title: {
        es: "Destinos",
        en: "Desntinations",
      },
      submenu: regions,
    },
    {
      id: 4,
      title: {
        es: "Servicios",
        en: "Services",
      },
    },
    {
      id: 5,
      title: {
        es: "Información",
        en: "Information",
      },
    },
    {
      id: 6,
      title: {
        es: "Institucional",
        en: "Institutional",
      },
    },
  ];

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <Link to={"/"}>
          <img src={Logo} width="180" alt="Jujuy Turismo" />
        </Link>
      </div>
      <div className={classes["navbar__container"]}>
        <div className={classes["navbar__items-container"]}>
          {menu.map((item) => {
            return (
              <ul className={classes["navbar__items"]}>
                <li className={classes["navbar__item-link"]} key={item.id}>
                  <Link className={classes["link"]} to={"/"}>
                    <span>{item.title[language]}</span>
                  </Link>
                  {item.submenu ? (
                    <ul className={classes["sub-menu"]}>
                      {item.submenu.map((subitem) => {
                        return (
                          <li key={item.submenu.id}>
                            <Link className={classes["link"]} to={"/"}>
                              {subitem.title
                                ? subitem.title[language]
                                : subitem}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                  {item.submenu ? <IoIosArrowDown /> : ""}
                </li>
              </ul>
            );
          })}
        </div>

        <LanguageButton />
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
