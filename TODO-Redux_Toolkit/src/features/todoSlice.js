// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { todoService } from '../services/todoServices';

import { createSlice, nanoid } from "@reduxjs/toolkit";

// //! ==================== Thunks: createAsynchThunk is used when the task is asynchrounous ==================

// //# Create Todo
// export const addTodo = createAsyncThunk("todos/addTodo", async (todoData, thunkAPI) => {
//     try {
//         return await todoService.createTodo(todoData);
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.response?.data?.message || error.message)
//     }
// })



const initialState = {
    todos: [],
}



//# Todo SLice
const todoSlice = createSlice({
    name: "todos",
    initialState, 
    reducers: {
        addTodo: (state, action) => {
            const todoData = {
                id: nanoid(),
                todoText: action.payload,
                isEdited: false,
                isCompleted: false
            }
            state.todos.push(todoData)
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((el) => el.id !== action.payload)
        },

        editTodo: (state, action) => {
            // //# this logic is for only one item will be edit at one time 
            // state.todos = state.todos.map((el) => el.id === action.payload ? {...el, isEdited: !el.isEdited} : {...el, isEdited: false});

            //# this logic is for multiple item can be edited at one time
            state.todos = state.todos.map((el) => el.id === action.payload ? {...el, isEdited: !el.isEdited}: el) 
        },

        cancelTodo: (state, action) => {
            state.todos = state.todos.map((el) => el.id === action.payload ? {...el, isEdited: false} : el)
        },

        confirmTodo: (state, action) => {
            state.todos = state.todos.map((el) => el.id === action.payload.id ? {...el, todoText: action.payload.todoText, isEdited: false}: el)
        },

        toggleCheckbox: (state, action) => {
            state.todos = state.todos.map((el) => el.id === action.payload ? {...el, isCompleted: !el.isCompleted} : el)
        }

    }, 

    //! Extra reducer comes when we use createAsynThunk 
    // extraReducers: (builder) => {
    //     builder

    //         //# Create or Add todo
    //         .addCase(addTodo.pending, (state) => {
    //             state.isLoading = true,
    //                 state.isError = false
    //         })

    //         .addCase(addTodo.fulfilled, (state, action) => {
    //             state.isLoading = false,
    //                 state.isError = false,
    //                 state.todos.push(action.payload)
    //         })

    //         .addCase(addTodo.rejected, (state, action) => {
    //             state.isLoading = false,
    //                 state.isError = action.payload
    //         })
    // }
});

//# Exporting actions 
export const { addTodo, deleteTodo, editTodo, cancelTodo, confirmTodo, toggleCheckbox } = todoSlice.actions

//# Exporting reducer 
export const todoReducer = todoSlice.reducer