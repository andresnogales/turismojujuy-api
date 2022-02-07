import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { listArticlesByCategory } from "../../actions/articleAction";
import ArticleItem from "./ArticleItem";
import { CategoryContext } from "../../context/categoryContext";
import classes from "./ArticlesList.module.css";

const ArticlesList = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.articleListByCategory);
  const { error, articles } = articleList;

  const { category, setCategory } = useContext(CategoryContext);
  console.log(category);

  useEffect(() => {
    dispatch(listArticlesByCategory(id));
  }, [dispatch]);

  return (
    <div className={classes["articles"]}>
      <CategoryContext.Consumer>
        {(value) => (
          <h1 className={classes["section-title"]}>{value.category.titleEs}</h1>
        )}
      </CategoryContext.Consumer>

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
