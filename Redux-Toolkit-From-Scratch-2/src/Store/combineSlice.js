import { combineSlices } from "@reduxjs/toolkit";
import { myOwnReduceer, myTodoReducers } from "../Reducer/Reducer";

export const rootSlices = combineSlices({
    count: myOwnReduceer,
    todo: myTodoReducers
})