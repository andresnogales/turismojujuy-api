import React from "react";

export const ArticleContext = React.createContext({
  id: 0,
  title: "",
  description: "",
  picture: "",
  setArticle: () => {},
});
