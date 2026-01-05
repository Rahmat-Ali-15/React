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
    customId: 1,
    isLoading: false,
    isError: false,
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: state.customId,
        text: action.payload,
        isEdits: false,
        isComplete: false,
      };
      state.todoItems.push(todo);
      state.todoItems.sort((a, b) => a.id - b.id);
      state.customId += 1;
    },
    editTodo: (state, action) => {
      state.todoItems = state.todoItems.map((el) =>
        el.id === action.payload ? { ...el, isEdits: !el.isEdits } : el
      );
    },
    deleteTodo: (state, action) => {
      state.todoItems = state.todoItems.filter((el) => el.id != action.payload);
    },
    // completeTodo: (state, action) => {
    //   state.pinTodo = state.todoItems.map((el) =>
    //     el.id === action.payload ? { ...el, isComplete: !el.isComplete } : el
    //   );
    //   state.todoItems = state.todoItems.map((el) =>
    //     el.id === action.payload ? { ...el, isComplete: !el.isComplete } : el
    //   ).filter((el) => el.isComplete != true);
    // },

    completeTodo: (state, action) => {
      // 🔁 CASE 1: pin → todo
      if (state.pinTodo.some((el) => el.id === action.payload)) {
        state.todoItems = [
          ...state.todoItems,
          ...state.pinTodo
            .filter((el) => el.id === action.payload)
            .map((el) => ({ ...el, isComplete: false })),
        ];
        state.todoItems.sort((a, b) => a.id - b.id);
        state.pinTodo = state.pinTodo.filter((el) => el.id !== action.payload);
      }
      // 📌 CASE 2: todo → pin
      else {
        state.pinTodo = [
          ...state.pinTodo,
          ...state.todoItems
            .filter((el) => el.id === action.payload)
            .map((el) => ({ ...el, isComplete: true })),
        ];

        state.todoItems = state.todoItems.filter(
          (el) => el.id !== action.payload
        );
        state.pinTodo.sort((a, b) => a.id - b.id);
      }
    },
  },
  // selectors: {
  //   completeTodoChecked: (state) =>
  //     state.todoItems.filter((el) => el.isComplete === true),
  // },
  selectors: {
    completeTodoChecked: createSelector(
      [(state) => state.pinTodo],
      (pinTodo) => {
        return pinTodo.filter((el) => el.isComplete === true);
      }
    ),
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(action_type.fetchTodos.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(action_type.fetchTodos.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.todoItems = action.payload;
  //     })
  //     .addCase(action_type.fetchTodos.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.isError = action.payload;
  //     })
  //     .addCase(action_type.addTodoHttp.fulfilled, (state, action) => {
  //       state.todoItems = action.payload;
  //     });
  // },
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
;
