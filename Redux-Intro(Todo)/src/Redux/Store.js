import {legacy_createStore} from "redux"
import { initialVal, Reducer } from "./Reducer"

export const myStore = legacy_createStore(Reducer, initialVal);