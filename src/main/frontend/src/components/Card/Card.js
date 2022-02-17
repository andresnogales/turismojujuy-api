import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={classes["card-container"]}>
      <div className={classes["card__image"]}>
        <img src={props.picture} />
      </div>
      <div className={classes["card__title"]}>
        <h3>{props.title}</h3>
      </div>
      <div className={classes["card__tags"]}>
        {props.tags.map((item) => {
          return <span>{item}</span>;
        })}
      </div>
    </div>
  );
};

export default Card;
