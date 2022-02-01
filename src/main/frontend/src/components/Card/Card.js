import classes from "./Card.module.css";
const Card = (props) => {
  const { title, picture } = props.item;

  return (
    <div className={classes["card-container"]}>
      <div className={classes["card__image"]}>
        <img src={picture} />
      </div>
      <div className={classes["card__title"]}>
        <h3>{title}</h3>
      </div>
      <div className={classes["card__tags"]}>
        <span>Dummy Tag</span>
      </div>
    </div>
  );
};

export default Card;
