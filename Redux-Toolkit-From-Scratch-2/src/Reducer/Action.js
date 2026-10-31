import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../Api/Api";

export const increment = createAction("counter/increment");
export const decrement = createAction("counter/decrement");
export const incrementByValue = createAction("counter/incrementByValue");
export const unknown = createAction("counter/unknown");

export const randomNumber = createAction("random/number");

export const isActionWithNumberPayload = (action) => {
  // console.log("🚀 ~ action:", action);

  // It's always return bool value
  return typeof action.payload === "number";
};

//? This is anction p age we only use in createReducer



// Here we are doing with HTTPS method

// ? READ

export const fetchTodos = createAsyncThunk("readTodo", async () => {
  const res = await api.post("/todo");
  return res.data;
});

// # CREAT

export const addTodoHttp = createAsyncThunk("createTodo", async (newPost) => {
  console.log("🚀 ~ newPost:", newPost);
  const res = await api.post("/todo", newPost);
  return res.data;
});

// ! Delete

export const deleteTodos = createAsyncThunk("delteTodo", async(id) => {
  const res = await api.delete(`/todo/${id}`);
  return res.data
})

// * Edit

export const updateTodos = createAsyncThunk("updateTodo", async({id, updateValue}) => {
  const res = await api.patch(`/todo/${id}`, updateValue);
  return res.data
})
