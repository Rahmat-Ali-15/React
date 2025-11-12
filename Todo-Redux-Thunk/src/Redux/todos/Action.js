import * as types from "../todos/ActionsTypes"

export const AddTodos = (payload) => {
    return {
        type: types.ADD_TODO_SUCCESS,
        payload: payload
    };
};