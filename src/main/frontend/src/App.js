import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticlesList from "./components/Articles/ArticlesList";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Header></Header>
      <div className="main">
        <Routes>
          <Route path="/cat/:id" element={<ArticlesList />} />
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
