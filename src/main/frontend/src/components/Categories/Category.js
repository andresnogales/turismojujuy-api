import classes from "./Category.module.css";

const Category = (props) => {
  const clickCategory = () => {
    props.onClick(props.id);
  };

  return (
    <div className={classes.category} onClick={clickCategory}>
      <h3 className={classes["category__title"]}>{props.title}</h3>
      <img src={props.picture} alt={props.title} />
    </div>
  );
};

export default Category;
