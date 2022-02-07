import Categories from "../components/Categories/Categories";
import Regions from "../components/Regions/Regions";

const Home = () => {
  return (
    <main>
      <h1 className="site-description">
        Conéctate con lo auténtico, con la energía pura de una tierra
        extraordinaria.
      </h1>
      <Categories />
      <Regions />
    </main>
  );
};

export default Home;
