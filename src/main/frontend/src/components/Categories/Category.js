import classes from "./Category.module.css";

const Category = (props) => {
  return (
    <div className={classes.category}>
      <h3 className={classes["category__title"]}>{props.title}</h3>
      <img src={props.image} alt={props.title} />
    </div>
  );
};

export default Category;
