/* eslint-disable no-unused-vars */
import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("counter/increment");
export const decrement = createAction("counter/decrement");
export const incrementByAmount = createAction("counter/incrementByAmount");
export const decrementByAmount = createAction("counter/decrementByAmount");

const initialState = { value: 0 };

const rootReducer = createReducer(initialState, (para) => {
  para
    .addCase(increment, (state, action) => {
      state.value++;
    })
    .addCase(decrement, (state, action) => {
      state.value--;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload;
    })
    .addCase(decrementByAmount, (state, action) => {
      state.value -= action.payload;
    });
});

export default rootReducer;
