import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from "redux-logger";
import todoReducer from "./todo/todoReducer";

const store = createStore(
	todoReducer,
	composeWithDevTools(applyMiddleware(logger))
);

export default store;
