import axios from "axios";
import * as types from "../todos/ActionsTypes";

const API = import.meta.env.VITE_API;

export const getRequestTodo = () => {
  return {
    type: types.GET_TODO_REQUEST,
  };
};

export const getSuccessTodo = (payload) => {
  return {
    type: types.GET_TODO_SUCCESS,
    payload: payload,
  };
};
export const getFailureTodo = (payload) => {
  return {
    type: types.GET_TODO_FAILURE,
    payload: payload,
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
    type: types.ADD_TODO_FAILURE,
  };
};
export const addTodoSuccess = (payload) => {
  return {
    type: types.ADD_TODO_SUCCESS,
    payload: payload,
  };
};

// edit functionality

export const editTodoRequest = () => {
  return {
    type: types.EDITS_TODO_REQUEST,
  };
};
export const editTodoSuccess = (payload) => {
  return {
    type: types.EDITS_TODO_SUCCESS,
    payload: { id: payload[0], data: payload[1] },
  };
};
export const editTodoFailure = () => {
  return {
    type: types.EDITS_TODO_FAILURE,
  };
};

// edit functionality

export const deleteTodoRequest = () => {
  return {
    type: types.DELETE_TODO_REQUEST,
  };
};
export const deleteTodoSuccess = (payload) => {
  return {
    type: types.DELETE_TODO_SUCCESS,
    payload: payload,
  };
};
export const deleteTodoFailure = () => {
  return {
    type: types.DELETE_TODO_FAILURE,
  };
};

// cancel functionlity
export const cancelTodoRequest = () => {
  return {
    type: types.CANCEL_TODO_REQUEST,
  };
};
export const cancelTodoSuccess = (payload) => {
  return {
    type: types.CANCEL_TODO_SUCCESS,
    payload: payload,
  };
};
export const cancelTodoFailure = () => {
  return {
    type: types.CANCEL_TODO_FAILURE,
  };
};

// confirm functionality
export const confirmTodoRequest = () => {
  return {
    type: types.CONFIRM_TODO_REQUEST,
  };
};

export const confirmTodoSuccess = (payload) => {
  return {
    type: types.CONFIRM_TODO_SUCCESS,
    payload: payload,
  };
};
export const confirmTodoFailure = () => {
  return {
    type: types.CONFIRM_TODO_SUCCESS,
  };
};

// here we are fetching api
export const getApiCall = (dispatch) => {
  dispatch(getRequestTodo());
  axios
    .get(API)
    .then((res) => dispatch(getSuccessTodo(res.data)))
    .catch((err) => dispatch(getFailureTodo(err)));
};

export const handleInputVal = ({ dispatch, elementData }) => {
  const values = elementData.current.value;

  if (values.trim() === "") return;

  const obj = {
    id: Date.now(),
    text: values.trim(),
    isEdit: false,
    isComplete: false,
  };

  dispatch(addTodoRequest());
  return axios
    .post(API, obj)
    .then((res) => {
      dispatch(addTodoSuccess(res.data));
    })
    .catch((err) => dispatch(addTodoFailure(err)));
};

// Edit button functionality
export const handleEdit = ({ id, dispatch, todos }) => {
  console.log("🚀 ~ todos:", todos);
  dispatch(editTodoRequest());
  const updateEdit = todos
    .map((el) => (el.id === id ? { ...el, isEdit: !el.isEdit } : null))
    .filter((el) => el !== null);
  console.log("🚀 ~ updateEdit:", updateEdit);

  axios
    .patch(`${API}/${id}`, ...updateEdit)
    .then((res) => {
      dispatch(editTodoSuccess([id, res.data]));
    })
    .catch((err) => {
      dispatch(editTodoFailure(err));
    });
};

// Delete button functionality
export const handleDelete = ({ id, dispatch, todos }) => {
  dispatch(deleteTodoRequest());
  let deleteItem = todos.filter((dl) => dl.id !== id);
  console.log("🚀 ~ deleteItem:", deleteItem);
  axios
    .delete(`${API}/${id}`)
    .then((res) => {
      console.log("res", res);
      dispatch(deleteTodoSuccess(deleteItem));
    })
    .catch((err) => {
      dispatch(deleteTodoFailure(err));
    });
};

// Cancel button functionality
export const handleCancel = ({ id, dispatch, todos }) => {
  dispatch(cancelTodoRequest());
  const cancelItem = todos.map((cl) =>
    cl.id === id ? { ...cl, isEdit: !cl.isEdit } : cl
  );
  console.log("🚀 ~ cancelItem:", cancelItem);
  axios
    .patch(`${API}/${id}`, { isEdit: false })
    .then(() => {
      return dispatch(cancelTodoSuccess(cancelItem));
    })
    .catch((err) => dispatch(cancelTodoFailure(err)));
};

// confirm button functionality
export const handleConfirm = ({ id, dispatch, todos }) => {
  dispatch(confirmTodoRequest());
  const confirmItem = todos.map((cf) =>
    cf.id === id ? { ...cf.todos, isEdit: !cf.isEdit } : cf
  );
  axios
    .patch(`${API}/${id}`, { isEdit: false })
    .then(() => {
      return dispatch(confirmTodoSuccess(confirmItem));
    })
    .catch((err) => dispatch(confirmTodoFailure(err)));
};
