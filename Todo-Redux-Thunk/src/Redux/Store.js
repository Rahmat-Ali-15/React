import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./auth/Reducer";
import { todoReducer } from "./todos/Reducer";
import { thunk } from "redux-thunk";

const junctionOfReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});

const enhancer = applyMiddleware(thunk);

export const ownStore = createStore(junctionOfReducer, enhancer);
