import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  articlesListReducer,
  articleReducer,
  articlesListByCategoryReducer,
} from "./reducers/articleReducer";

const reducer = combineReducers({
  articleList: articlesListReducer,
  articleListByCategory: articlesListByCategoryReducer,
  articleDetails: articleReducer,
});

const middleware = [thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
