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

export const addTodoFailure = () => {
    return {
        type: types.ADD_TODO_FAILURE
    }
}
export const addTodoSuccess = (payload) => {
    return {
        type: types.ADD_TODO_SUCCESS,
        payload: payload
    }
}

// edit functionality

export const editTodoRequest = () => {
    return {
        type: types.EDITS_TODO_REQUEST,
    };
}
export const editTodoSuccess = (payload) => {
    return {
        type: types.EDITS_TODO_SUCCESS,
        payload: {id: payload[0], data: payload[1]}
    };
}
export const editTodoFailure = () => {
    return {
        type: types.EDITS_TODO_FAILURE
    };
}


// edit functionality

export const deleteTodoRequest = () => {
    return {
        type: types.DELETE_TODO_REQUEST,
    };
}
export const deleteTodoSuccess = (payload) => {
    return {
        type: types.DELETE_TODO_SUCCESS,
        payload: payload
    };
}
export const deleteTodoFailure = () => {
    return {
        type: types.DELETE_TODO_FAILURE
    };
}