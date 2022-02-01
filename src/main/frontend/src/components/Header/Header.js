import classes from "./Header.module.css";
import Hero from "../../assets/hero.png";
import { ImSearch } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { useContext, useEffect } from "react";
import { ArticleContext } from "../../context/articleContext";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const { article, setArticle } = useContext(ArticleContext);
  const articleHero = article.picture;
  const history = useNavigate();
  let location = useLocation();

  useEffect(() => {
    console.log("Ejecutando efecto");
    console.log(location.pathname);
    if (location.pathname === "/") {
      setArticle("");
    }
  }, [history]);

  return (
    <header className={classes.header}>
      <img src={articleHero ? articleHero : Hero} alt="Paisaje Jujuy" />
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
