import { GrLanguage } from "react-icons/gr";
import classes from "./LanguageButton.module.css";
import { useLanguage } from "../../hooks/useLanguage";
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
const LanguageButton = () => {
  const [storedLanguage, setStoredLanguage] = useLanguage();
  const { language, setLanguage } = useContext(LanguageContext);

  const selectLanguageHandler = () => {
    if (language === "es") {
      setLanguage("en");
      setStoredLanguage("en");
    } else {
      setLanguage("es");
      setStoredLanguage("es");
    }
  };

  return (
    <div className={classes["language-switcher"]}>
      <div className={classes["button"]} onClick={selectLanguageHandler}>
        <GrLanguage />
      </div>
      <ul className={classes["sub-menu"]}>
        <li className={language === "es" ? classes["selected"] : ""}>
          <span onClick={selectLanguageHandler}>Español</span>
        </li>
        <li className={language === "en" ? classes["selected"] : ""}>
          <span onClick={selectLanguageHandler}>English</span>
        </li>
      </ul>
    </div>
  );
};

export default LanguageButton;
