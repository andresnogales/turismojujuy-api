import classes from "./Regions.module.css";
import RegionList from "./RegionsList";
const Regions = () => {
  return (
    <section className={classes["section"]}>
      <h3 className={classes["section-title"]}>Regiones de Jujuy</h3>
      <div className={classes["section-description"]}>
        <p>
          El relieve de la provincia de Jujuy se divide en cuatro regiones bien
          definidas Puna, Quebrada, Valles y Yungas, cada una de ellas bien
          diferenciada por su clima, biomas y actividades económicas.
        </p>
        <p>
          El resultando es una riqueza cultural y paisajística con
          características propias, que el turista ávido de experiencias puede
          encontrar recorriendo pocos kilómetros de distancia.
        </p>
      </div>
      <RegionList />
    </section>
  );
};

export default Regions;
