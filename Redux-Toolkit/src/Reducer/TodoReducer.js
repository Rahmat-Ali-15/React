import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoReducer = createSlice({
  name: "todos",
  initialState: { item: [] },
  reducers: {
    addTodos(state, action) {
      let todo = {
        id: nanoid(),
        text: action.payload,
        isEdited: false,
        isCompleted: false,
      };
      state.item.push(todo);
    },
    removeTodo(state, action) {
      state.item = state.item.filter((el) => el.id !== action.payload);
    },
    editTodo(state, action) {
      state.item = state.item.map((el) =>
        el.id === action.payload ? { ...el, isEdited: !el.isEdited } : {...el, isEdited: false}
      );
    },
    cancelTodo(state, action) {
      state.item = state.item.map((el) =>
        el.id === action.payload ? { ...el, isEdited: !el.isEdited } : el
      );
    },
    confirmTodo(state, action) {
      const { id, updatedData } = action.payload;

      state.item = state.item.map((el) =>
        el.id === id ? { ...el, text: updatedData, isEdited: false } : el
      );
    },
    toggleCheckbox(state, action) {
      state.item = state.item.map((el) =>
        el.id === action.payload ? { ...el, isCompleted: !el.isCompleted } : el
      );
    },
  },
});

export const { addTodos, removeTodo, editTodo, cancelTodo, confirmTodo, toggleCheckbox } =
  todoReducer.actions;
export default todoReducer.reducer;
