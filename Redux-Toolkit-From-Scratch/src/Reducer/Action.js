import { createAction } from '@reduxjs/toolkit';

export const increment = createAction("counter/increment")
export const decrement = createAction("counter/decrement")
export const incrementByValue = createAction("counter/incrementByValue")
export const unknown = createAction("counter/unknown")

export const randomNumber = createAction('random/number');

export const isActionWithNumberPayload = (action) => {
    console.log("🚀 ~ action:", action);
    // it's always return bool value
    return typeof action.payload === "number"
}


//? this is action Page we only use in createReducer