import Button from "../Button/Button";
import classes from "./Widget.module.css";
const Widget = () => {
  return (
    <div className={classes["widget"]}>
      <div className={classes["title"]}>
        <h3>Consultas e informes</h3>
      </div>
      <div className={classes["content"]}>
        <p>
          <img
            className={classes["icon"]}
            src="http://c2210489.ferozo.com/wp-content/uploads/Info.png"
            width="41"
          />
          Contacte con el personal de informes de la Secretaría de Turismo de
          Jujuy para esclarecer cualquier cualquier duda.
        </p>
      </div>
      <div className={classes["link"]}>
        <Button label="Ir a la página" />
      </div>
    </div>
  );
};

export default Widget;
