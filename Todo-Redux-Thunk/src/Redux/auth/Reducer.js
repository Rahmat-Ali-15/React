// import { loadData } from "../../utils/localStorage";
import * as abrakadabra from "./ActionsTypes";

// const token = loadData("token");
// let VITE_API = "https://api-server-zecj.onrender.com/todo";

// const initialState = {
//   token: token || "",
//   isAuth: false,
//   isLoading: false,
//   isError: false,
// };

const initialState = {
  user: [],
  isAuth: false,
  isLoading: false,
  isError: false,
};

export const authReducer = (oldState = initialState, { type, payload }) => {
  switch (type) {
    case abrakadabra.GET_SIGNUP_REQUEST: {
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };
    }
    case abrakadabra.GET_SIGNUP_SUCCESS: {
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        user: [...oldState.user, payload],
      };
    }
    case abrakadabra.GET_SIGNUP_FAILURE: {
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    }

    case abrakadabra.GET_LOGIN_REQUEST: {
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };
    }
    case abrakadabra.GET_LOGIN_SUCCESS: {
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        user: [...oldState.user, payload],
      };
    }
    case abrakadabra.GET_LOGIN_FAILURE: {
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return oldState;
  }
};
