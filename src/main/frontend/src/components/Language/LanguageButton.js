import { GrLanguage } from "react-icons/gr";
import classes from "./LanguageButton.module.css";
const LanguageButton = () => {
  return (
    <div className={classes["button"]}>
      <GrLanguage />
    </div>
  );
};

export default LanguageButton;
