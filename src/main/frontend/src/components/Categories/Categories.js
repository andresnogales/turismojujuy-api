import { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./Categories.module.css";

import Category from "./Category";
const Categories = () => {
  const categoriesImages = [
    {
      id: 1,
      url: require("../../assets/aventura_naturaleza.png"),
      titleEs: "Aventura y Naturaleza",
    },
    {
      id: 2,
      url: require("../../assets/cocina_vinos.png"),
      titleEs: "Cocina y Vinos",
    },
    {
      id: 3,
      url: require("../../assets/comunitario.png"),
      titleEs: "Comunitario",
    },
    {
      id: 4,
      url: require("../../assets/cultural.png"),
      titleEs: "Cultural",
    },
    {
      id: 5,
      url: require("../../assets/imperdibles.png"),
      titleEs: "Imperdibles",
    },
    {
      id: 6,
      url: require("../../assets/religioso.png"),
      titleEs: "Religioso",
    },
  ];

  return (
    <section>
      <h3 className={classes["section-title"]}>Qué hacer en Jujuy</h3>
      <div className={classes.container}>
        {categoriesImages.map((category) => {
          return (
            <Link to={"/cat/" + category.id}>
              <Category
                image={category.url}
                title={category.titleEs}
                key={category.id}
              ></Category>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
