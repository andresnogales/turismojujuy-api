import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer-widgets"]}>
        <div className={classes["footer-area"]}>
          <h3>LIBRO DE RECLAMOS, SUGERENCIAS Y FELICITACIONES</h3>
          <p>Su opinión es importante para nosotros.</p>
          <a href="">Click aquí.</a>
        </div>
        <div className={classes["footer-area"]}>
          <h3>Encuesta de Satisfacción por Atención en OIT</h3>
          <p>Ayudanos a mejorar respondiendo nuestra Online.</p>
          <a href="">Click aquí.</a>
        </div>
      </div>
      <div className={classes["site-footer"]}>
        <p>
          © 2022 Ministerio de Cultura y Turismo de Jujuy | Andrés Nogales
          developer.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
