import axios from "axios";

export const singleArticle = (id) => async (dispatch) => {
  console.log("Llamada al servidor, get article");
  try {
    const { data } = await axios.get("/api/article/" + id);
    dispatch({
      type: "ARTICLE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ARTICLE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listArticles = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/article");
    dispatch({
      type: "ARTICLE_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ARTICLE_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listArticlesByCategory = (categoryId) => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/article/category/" + categoryId);
    dispatch({
      type: "ARTICLE_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ARTICLE_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
