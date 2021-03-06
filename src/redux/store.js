import { applyMiddleware, compose, createStore } from "redux";
import rootReduser from "./rootRedusers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReduser,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
