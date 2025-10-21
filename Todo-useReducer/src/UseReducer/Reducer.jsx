import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./Action";

export const Reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case EDIT_TODO:
      return state.map((el) =>
        el.id === action.payload.id
          ? { ...el, todoText: action.payload.todoText }
          : el
      );

    case DELETE_TODO:
      return state.filter((el) => el.id !== action.payload);

    default:
      return state;
  }
};
