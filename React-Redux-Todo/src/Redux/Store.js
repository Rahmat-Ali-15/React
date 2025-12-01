import {combineReducers, legacy_createStore} from "redux"

import { Reducer } from "./Reducer"

const rootReducer = combineReducers({
    todos: Reducer
})

export const myStore = legacy_createStore(rootReducer)