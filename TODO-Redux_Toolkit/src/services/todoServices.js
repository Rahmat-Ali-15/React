//# Services is generally created for Backend conncetion 


import { api } from "../Api/api"

export const todoService =  {
    //# Create Todo
    createTodo(data) {
        return api.post("/api/todo", data);
    } 
}