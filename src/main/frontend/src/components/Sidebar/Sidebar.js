import Widget from "../Widget/Widget";
import classes from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <aside className={classes["sidebar"]}>
      <Widget />
    </aside>
  );
};

export default Sidebar;
