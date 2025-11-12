import { applyMiddleware, createStore } from "redux";
import { authReducer } from "./auth/Reducer";
import { todoReducer } from "./todos/Reducer";

const junctionOfReducer = applyMiddleware({
    auth: authReducer,
    todo: todoReducer
});

export const ownStore = createStore(junctionOfReducer)