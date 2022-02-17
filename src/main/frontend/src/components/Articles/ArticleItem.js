import { useContext } from "react";
import { Link } from "react-router-dom";
import { ArticleContext } from "../../context/articleContext";
import { LanguageContext } from "../../context/languageContext";
import Card from "../Card/Card";
import classes from "./ArticleItem.module.css";
const ArticleItem = (props) => {
  const { article, setArticle } = useContext(ArticleContext);
  const { language, setLanguage } = useContext(LanguageContext);

  const selectCardHandler = () => {
    setArticle(props.item);
  };

  const spanishCard = (
    <Card
      title={props.item.title}
      picture={props.item.picture}
      tags={props.item.articleCategories.map((tag) => tag.title)}
    />
  );

  const englishCard = (
    <Card
      title={props.item.titleEn}
      picture={props.item.picture}
      tags={props.item.articleCategories.map((tag) => tag.titleEn)}
    />
  );

  return (
    <div className="wrapper" onClick={selectCardHandler}>
      <Link className={classes["link"]} to={"/article/" + props.item.id}>
        {language === "es" ? spanishCard : englishCard}
      </Link>
    </div>
  );
};

export default ArticleItem;
