import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleArticle } from "../../actions/articleAction";
import { ArticleContext } from "../../context/articleContext";
import { LanguageContext } from "../../context/languageContext";
import classes from "./ArticleDetails.module.css";

const ArticleDetails = (props) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { article, setArticle } = useContext(ArticleContext);
  const { id } = useParams();
  const dispatch = useDispatch();
  const articleData = useSelector((state) => state.articleDetails);
  const { error, data } = articleData;

  useEffect(async () => {
    if (!article) {
      dispatch(singleArticle(id));
    }
  }, [dispatch]);

  if (!article && data) setArticle(data);

  const spanishContent = (
    <div>
      <h1>{article ? article.title : data ? data.title : "Cargando.."}</h1>
      <p className={classes["display-text"]}>
        {article ? article.description : data ? data.description : ""}
      </p>
    </div>
  );

  const englishContent = (
    <div>
      <h1>{article ? article.titleEn : data ? data.titleEn : "Cargando.."}</h1>
      <p className={classes["display-text"]}>
        {article ? article.descriptionEn : data ? data.descriptionEn : ""}
      </p>
    </div>
  );

  return (
    <article className={classes["entry-content"]}>
      {language === "es" ? spanishContent : englishContent}
    </article>
  );
};

export default ArticleDetails;
