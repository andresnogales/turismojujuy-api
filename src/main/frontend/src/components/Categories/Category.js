import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/languageContext";
import classes from "./Category.module.css";

const Category = (props) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const categoryClickHandler = () => {
    props.onClick(props.id);
  };

  return (
    <div className={classes.category} onClick={categoryClickHandler}>
      <h3 className={classes["category__title"]}>{props.title[language]}</h3>
      <img src={props.thumbnail} alt={props.title[language]} />
    </div>
  );
};

export default Category;
