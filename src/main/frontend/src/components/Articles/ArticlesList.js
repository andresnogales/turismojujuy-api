import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { listArticlesByCategory } from "../../actions/articleAction";
import ArticleItem from "./ArticleItem";
import { LanguageContext } from "../../context/languageContext";
import { categoriesList } from "../../data/categories";

import classes from "./ArticlesList.module.css";

const ArticlesList = (props) => {
  const { id } = useParams();
  const { language, setLanguage } = useContext(LanguageContext);
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.articleListByCategory);
  const { error, articles } = articleList;

  useEffect(() => {
    dispatch(listArticlesByCategory(id));
  }, [dispatch]);

  const category = categoriesList.find((item) => item.id === Number(id));

  return (
    <div className={classes["articles"]}>
      <h1 className={classes["section-title"]}>{category.title[language]}</h1>

      <div className={classes["container"]}>
        {articles && articles.length === 0 ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          articles.map((article) => {
            return <ArticleItem item={article} key={article.id} />;
          })
        )}
      </div>
    </div>
  );
};

export default ArticlesList;
