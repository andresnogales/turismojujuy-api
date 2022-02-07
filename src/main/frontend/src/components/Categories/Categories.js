import { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../context/categoryContext";

import classes from "./Categories.module.css";

import Category from "./Category";
const Categories = () => {
  const { category, setCategory } = useContext(CategoryContext);

  const onClickCategoryHandler = (idCategory) => {
    console.log(idCategory);
    const categorySelected = categoriesList.find((c) => c.id === idCategory);
    setCategory(categorySelected);
    console.log(categorySelected);
  };

  const categoriesList = [
    {
      id: 1,
      picture: require("../../assets/aventura_naturaleza.png"),
      titleEs: "Aventura y Naturaleza",
    },
    {
      id: 2,
      picture: require("../../assets/cocina_vinos.png"),
      titleEs: "Cocina y Vinos",
    },
    {
      id: 5,
      picture: require("../../assets/comunitario.png"),
      titleEs: "Comunitario",
    },
    {
      id: 4,
      picture: require("../../assets/cultural.png"),
      titleEs: "Cultural",
    },
    {
      id: 3,
      picture: require("../../assets/imperdibles.png"),
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
        {categoriesList.map((category) => {
          return (
            <Link
              className={classes["category-link"]}
              to={"/cat/" + category.id}
              key={category.id}
            >
              <Category
                picture={category.picture}
                title={category.titleEs}
                key={category.id}
                id={category.id}
                onClick={onClickCategoryHandler}
              ></Category>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
