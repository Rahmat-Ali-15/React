/* eslint-disable no-unused-vars */
import {
  createReducer,
  createSelector,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";
import * as action_type from "./Action";

export const myOwnReduceer = createReducer(
  { value: 0, sumOfNumberPayload: 0, unHandleAction: 0 },
  (builder) => {
    builder
      .addCase(action_type.increment, (state, action) => {
        state.value++;
      })
      .addCase(action_type.decrement, (state, action) => {
        state.value--;
      })
      .addMatcher(action_type.isActionWithNumberPayload, (state, action) => {
        state.sumOfNumberPayload += action.payload;
      })
      .addDefaultCase((state, action) => {
        state.unHandleAction += 1;
      });
  }
);

const myOwnTodoReducer = createSlice({
  name: "todos",
  initialState: {
    todoItems: [],
    pinTodo: [],
    isLoading: false,
    isError: false,
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        isEdits: false,
        isComplete: false,
      };
      state.todoItems.push(todo);
    },
    editTodo: (state, action) => {
      state.todoItems = state.todoItems.map((el) =>
        el.id === action.payload ? { ...el, isEdits: !el.isEdits } : el
      );
    },
    deleteTodo: (state, action) => {
      state.todoItems = state.todoItems.filter((el) => el.id != action.payload);
    },
    completeTodo: (state, action) => {
      state.pinTodo = state.todoItems.map((el) =>
        el.id === action.payload ? { ...el, isComplete: !el.isComplete } : el
      );
      state.todoItems = state.todoItems.map((el) =>
        el.id === action.payload ? { ...el, isComplete: !el.isComplete } : el
      ).filter((el) => el.isComplete != true);
    },
  },
  // selectors: {
  //   completeTodoChecked: (state) =>
  //     state.todoItems.filter((el) => el.isComplete === true),
  // },
  selectors: {
    completeTodoChecked: createSelector([(state) => state.pinTodo], (pinTodo) => {
      return pinTodo.filter((el) => el.isComplete === true);
    }
    ),
  },
});

export const { addTodo, editTodo, deleteTodo, completeTodo } =
  myOwnTodoReducer.actions;

// const pinItems = (state) => {
//   return myOwnTodoReducer.selectors.completeTodoChecked(state);
// };

export const { completeTodoChecked } = myOwnTodoReducer.getSelectors(
  (state) => {
    return state.todo;
  }
);

export const myTodoReducers = myOwnTodoReducer.reducer;
