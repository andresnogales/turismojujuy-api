import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { listArticles } from "../../actions/articleAction";
import ArticleItem from "./ArticleItem";

const ArticlesList = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.articleList);
  const { error, articles } = articleList;

  useEffect(() => {
    dispatch(listArticles());
  }, [dispatch]);

  return (
    <div>
      <h3>Categoria: {id}</h3>
      {articles && articles.length === 0 ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        articles.map((article) => {
          return <ArticleItem item={article} />;
        })
      )}
    </div>
  );
};

export default ArticlesList;
