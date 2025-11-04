import { ADD_TODOS, DELETE_TODOS, EDIT_TODOS } from "./Action";

const initialState = {
  todos: [],
};

export const TodoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODOS:
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case EDIT_TODOS:
      return {
        todos: state.todos.map((el) =>
          el.id === payload ? { ...el, isEdit: true } : el
        ),
      };

    case DELETE_TODOS:
      return {
        todos: state.todos.filter((el) => el.id != payload),
      };

    default:
      return state;
  }
};
