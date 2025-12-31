import {configureStore} from "@reduxjs/toolkit"
import { myOwnReduceer } from "../Reducer/Reducer"

export const myOwnStore = configureStore({
    reducer: myOwnReduceer,
})