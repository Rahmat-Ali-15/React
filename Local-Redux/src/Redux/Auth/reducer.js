import {
  delete_token,
  LocalData,
  SaveData,
} from "../../Local_Storage/LocalStorage";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REMOVE_TOKEN,
} from "./action";

let token_var = "token"

const token = LocalData("token");

const initialState = {
  isAuth: token ? true : false,
  token: token || "",
  isError: false,
  isLoading: false
};

export const AuthReducer = (state = initialState, { type, payload }) => {
  console.log("🚀 ~ state:", state);
  console.log("🚀 ~ payload:", payload);
  switch (type) {
    case REMOVE_TOKEN: {
      delete_token(token_var);
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: "",
      };
    }
    case LOGIN_SUCCESS: {
      SaveData("token", payload);
      return {
        ...state,
        isAuth: true,
        token: payload,
        isLoading: true,
        isError: false,
      };
    }

    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: "",
        isError: true,
        isLoading: false,
      };
    }

    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    default:
      return state;
  }
};
