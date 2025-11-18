import * as types from "../todos/ActionsTypes"

export const getRequestTodo = () => {
    return {
        type: types.GET_TODO_REQUEST
    }
}

export const getSuccessTodo = (payload) => {
    return {
        type: types.GET_TODO_SUCCESS,
        payload: payload
    };
};
export const getFailureTodo = (payload) => {
    return {
        type: types.GET_TODO_FAILURE,
        payload: payload
    };
};

// Here adding the data into api

export const addTodoRequest = () => {
    return {
        type: types.ADD_TODO_REQUEST,
    };
};

export const addTodoFailure = (payload) => {
    return {
        type: types.ADD_TODO_FAILURE,
        payload: payload
    }
}
export const addTodoSuccess = (payload) => {
    return {
        type: types.ADD_TODO_SUCCESS,
        payload: payload
    }
}

// eidt functionality

export const eiditTodoRequest = () => {
    return {
        type: types.EDITS_TODO_REQUEST,
    };
}
export const eiditTodoSuccess = (payload) => {
    return {
        type: types.EDITS_TODO_SUCCESS,
        payload: payload
    };
}
export const eiditTodoFailure = (payload) => {
    return {
        type: types.EDITS_TODO_FAILURE,
        payload: payload
    };
}