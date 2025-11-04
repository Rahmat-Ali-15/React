import {createStore, combineReducers} from "redux";
import { TodoReducer } from "./Todos/Reducer";
import { AuthReducer } from "./Auth/reducer";
const rootTerminal = combineReducers({
    auth: AuthReducer,
    todo: TodoReducer
});

export const myStore = createStore(rootTerminal)