import { Fragment, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleDetails from "./components/Articles/ArticleDetails";
import ArticlesList from "./components/Articles/ArticlesList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { ArticleContext } from "./context/articleContext";
import { LanguageContext } from "./context/languageContext";
import { useLanguage } from "./hooks/useLanguage";
import Home from "./pages/Home";
function App() {
  const [article, setArticle] = useState("");
  const articleValue = { article, setArticle };
  const [category, setCategory] = useState();
  const categoryValue = { category, setCategory };
  const [storedlanguage, setSroredLanguage] = useLanguage();
  const [language, setLanguage] = useState(storedlanguage);
  const languageValue = { language, setLanguage };

  return (
    <BrowserRouter>
      <LanguageContext.Provider value={languageValue}>
        <ArticleContext.Provider value={articleValue}>
          <Navbar />
          <Header />
          <Routes>
            <Route path="/article/:id" element={<ArticleDetails />} />
            <Route path="/cat/:id" element={<ArticlesList />} />
            <Route path="/" exact={true} element={<Home />} />
          </Routes>
        </ArticleContext.Provider>
        <Footer></Footer>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
