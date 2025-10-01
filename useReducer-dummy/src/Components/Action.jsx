export const Increment = {type : "INCREMENT"};
export const Decrement = {type : "DECREMENT"};
export const Reset = {type : "RESET"};

export const IncrementByValue = (value) =>{
    return{
        type : "INCREMENTBYVALUE",
        payload : value
    }
};

export const DecrementByValue = (value) => {
    return {
        type : "DECREMENTBYVALUE",
        payload : value
    }
}