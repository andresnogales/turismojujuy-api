import axios from "axios";

export const listArticles = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/article");
    dispatch({
      type: "ARTICLE_LIST_SUCCESS",
      payload: data,
    });
    console.log(data);
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
