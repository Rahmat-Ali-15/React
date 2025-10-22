import { ADD_TODO } from "./Action";

export const initialVal = [];

export const Reducer = (state,action) => {
    console.log("🚀 ~ action:", action);
    console.log("🚀 ~ state:", state);
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    id: Date.now(),
                    text: action.payload,
                    isEdited : false,
                    isCompleted : false
                }
            ];

        default:
            return state;
    }
}