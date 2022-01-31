import classes from "./ArticleItem.module.css";
const ArticleItem = (props) => {
  const { title, picture } = props.item;
  return (
    <div>
      <img src={picture} alt={title} width="300"></img>
      <h3>{title}</h3>
    </div>
  );
};

export default ArticleItem;
