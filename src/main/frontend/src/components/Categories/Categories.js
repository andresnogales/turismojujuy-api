import { Link } from "react-router-dom";

import classes from "./Categories.module.css";
import { categoriesList } from "../../data/categories";

import Category from "./Category";
const Categories = () => {
  const onClickCategoryHandler = (idCategory) => {
    const categorySelected = categoriesList.find((c) => c.id === idCategory);
  };

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
                thumbnail={category.thumbnail}
                picture={category.picture}
                title={category.title}
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
