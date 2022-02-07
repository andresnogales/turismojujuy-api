import { Fragment, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleDetails from "./components/Articles/ArticleDetails";
import ArticlesList from "./components/Articles/ArticlesList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { ArticleContext } from "./context/articleContext";
import { CategoryContext } from "./context/categoryContext";
import Home from "./pages/Home";
function App() {
  const [article, setArticle] = useState("");
  const articleValue = { article, setArticle };
  const [category, setCategory] = useState();
  const categoryValue = { category, setCategory };

  return (
    <BrowserRouter>
      <ArticleContext.Provider value={articleValue}>
        <CategoryContext.Provider value={categoryValue}>
          <Navbar />
          <Header />

          <div className="main">
            <Routes>
              <Route path="/article/:id" element={<ArticleDetails />} />
              <Route path="/cat/:id" element={<ArticlesList />} />
              <Route path="/" exact={true} element={<Home />} />
            </Routes>
          </div>
        </CategoryContext.Provider>
      </ArticleContext.Provider>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
