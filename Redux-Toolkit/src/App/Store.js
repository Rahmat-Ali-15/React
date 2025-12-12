import {configureStore} from "@reduxjs/toolkit";
import  TodoReducer  from "../Reducer/TodoReducer";

export const myStore = configureStore({
    reducer: {
        todo: TodoReducer
    }
})