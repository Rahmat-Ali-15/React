import {configureStore} from "@reduxjs/toolkit"
// import { myOwnReduceer } from "../Reducer/Reducer"
import { rootSlices } from "./combineSlice"

export const myOwnStore = configureStore({
    reducer: rootSlices,
})