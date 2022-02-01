import { ArticleContext } from "../../context/articleContext";
import classes from "./ArticleDetails.module.css";
const ArticleDetails = (props) => {
  //const { title, picture, description } = props.article;
  return (
    <ArticleContext.Consumer>
      {(value) => (
        <article className={classes["entry-content"]}>
          <h1>{value.article.title}</h1>
          <p>{value.article.description}</p>
        </article>
      )}
    </ArticleContext.Consumer>
  );
};

export default ArticleDetails;
