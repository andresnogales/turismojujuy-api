export const articlesListReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case "ARTICLE_LIST_SUCCESS":
      return { articles: action.payload };
    case "ARTICLE_LIST_FAIL":
      return { error: action.payload };
    default:
      return state;
  }
};

export const articlesListByCategoryReducer = (
  state = { articles: [] },
  action
) => {
  switch (action.type) {
    case "ARTICLE_LIST_SUCCESS":
      return { articles: action.payload };
    case "ARTICLE_LIST_FAIL":
      return { error: action.payload };
    default:
      return state;
  }
};

export const articleReducer = (state = { article: {} }, action) => {
  switch (action.type) {
    case "ARTICLE_SUCCESS":
      return { data: action.payload };
    case "ARTICLE_FAIL":
      return { error: action.payload };
    default:
      return state;
  }
};
