import { LOGIN_SUCCESS } from "./action";

const initialState = {
  todos: [],
};

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        
      };

    default:
      return state;
  }
};
