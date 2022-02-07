import RegionItem from "./RegionItem";
import classes from "./RegionsList.module.css";
const RegionsList = () => {
  const regions = [
    {
      name: "Puna",
      description:
        "Cielos infinitos de aire puro y extensas planicies de altura a más de 3600 msnm",
      picture: require("../../assets/puna.png"),
    },
    {
      name: "Quebrada",
      description:
        "Mejor conocida como “de Humahuaca” es la región contigua a la anterior",
      picture: require("../../assets/quebrada.png"),
    },
    {
      name: "Valles",
      description:
        "Nacen al sur de la Quebrada, desde Lozano hasta el Río de Las Pavas, en El Carmen",
      picture: require("../../assets/valles.png"),
    },
    {
      name: "Yungas",
      description:
        "Extenso corredor biomático, son la continuación hacia el este de la Quebrada",
      picture: require("../../assets/yungas.png"),
    },
  ];

  return (
    <div className={classes["container"]}>
      {regions.map((region) => {
        return <RegionItem item={region} />;
      })}
    </div>
  );
};

export default RegionsList;
