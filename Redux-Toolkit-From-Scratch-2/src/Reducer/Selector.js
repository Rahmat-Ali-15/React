import { createSelector } from "@reduxjs/toolkit";

const selectData = (state) => {
  return state;
};

export const selectedComponents = createSelector([selectData], (value) => {
// console.log("🚀 ~ value:", value);

  return {
    count: value.count.value,
    updatedByPayload: value.count.sumOfNumberPayload,
    random: value.count.unHandleAction,
  };
});

export const isEven = createSelector([selectData], (count) => {
  return count.count.value % 2 === 0;
});
