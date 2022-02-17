import Categories from "../components/Categories/Categories";
import Regions from "../components/Regions/Regions";
import Sidebar from "../components/Sidebar/Sidebar";
const Home = () => {
  return (
    <div className="wrapper">
      <main className="main">
        <h1 className="site-description">
          Conéctate con lo auténtico, con la energía pura de una tierra
          extraordinaria.
        </h1>
        <Categories />
        <Regions />
      </main>
      <Sidebar />
    </div>
  );
};

export default Home;
