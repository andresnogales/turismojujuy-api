import { useContext } from "react";
import { Link } from "react-router-dom";
import { ArticleContext } from "../../context/articleContext";
import Card from "../Card/Card";
import classes from "./ArticleItem.module.css";
const ArticleItem = (props) => {
  const { article, setArticle } = useContext(ArticleContext);

  const selectCardHandler = () => {
    setArticle(props.item);
  };

  return (
    <div className="wrapper" onClick={selectCardHandler}>
      <Link className={classes["link"]} to={"/article/" + props.item.id}>
        <Card item={props.item} />
      </Link>
    </div>
  );
};

export default ArticleItem;
