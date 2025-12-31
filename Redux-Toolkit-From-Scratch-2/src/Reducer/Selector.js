import { createSelector } from "@reduxjs/toolkit";

const selectData = (state) => {
  return state;
};

export const selectedComponents = createSelector([selectData], (value) => {

  return {
    count: value.value,
    updatedByPayload: value.sumOfNumberPayload,
    random: value.unHandleAction,
  };
});

export const isEven = createSelector([selectData], (count) => {
  return count.value % 2 === 0;
});
