import { ADD_TODO, CANCEL_TODO, DELETE_TODO, EDIT_TODO } from "./Action";

const initialVal = [];

export const Reducer = (state = initialVal, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          isEdit: false,
          isComplete: false,
        },
      ];

    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isEdit: !todo.isEdit } : todo
      );

    case DELETE_TODO:
      return state.filter((dl)=> dl.id !== action.payload);
    
    case CANCEL_TODO:
      return state.map((cl)=> cl.id=== action.payload ? {...cl, isEdit:!cl.isEdit}: cl)

    default:
      return state;
  }
};
