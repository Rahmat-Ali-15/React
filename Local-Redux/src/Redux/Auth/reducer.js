import { LocalData } from "../../Local_Storage/LocalStorage";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./action";


const token = LocalData("token");


const initialState = {
  isAuth : token ? true : false,
  token : token || "",
};

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        token: payload,
      };

    default:
      return state;
  }
};
