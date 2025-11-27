import * as authActionType from "../auth/ActionsTypes"

export const getSignUpRequest = () => {
    return {
        type: authActionType.GET_SIGNUP_REQUEST
    }
}
export const getSignUpSuccess = (payload) => {
    return {
        type: authActionType.GET_SIGNUP_REQUEST,
        payload: payload
    }
}
export const getSignUpFailure = () => {
    return {
        type: authActionType.GET_SIGNUP_REQUEST
    }
}

export const getLoginRequest = () => {
    return {
        type: authActionType.GET_LOGIN_REQUEST
    }
}
export const getLoginSuccess = (payload) => {
    return {
        type: authActionType.GET_LOGIN_SUCCESS,
        payload: payload
    }
}
export const getLoginFailure = () => {
    return{
        type: authActionType.GET_LOGIN_FAILURE
    }
}

  export const handleFormSubmit = (data) => {
    console.log("🚀 ~ data:", data);
  };

 export const field = [
    {
      name: "username",
      placeholder: "Enter your username",
      label: "Username",
      type: "text",
      required: true,
      autocomplete: "username"
    },
    {
      name: "email",
      placeholder: "Enter your email",
      label: "Email",
      type: "email",
      required: true,
      autocomplete: "email"
    },
    {
      name: "password",
      placeholder: "Enter your password",
      label: "Password",
      type: "password",
      required: true,
      autocomplete: "current-password"
    },
  ];