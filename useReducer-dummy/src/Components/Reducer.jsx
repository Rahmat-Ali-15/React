export const Reducer = (state,action) => {

    switch (action.type){
        case "INCREMENT" :
            return { count : state.count + 1 };
        
        case "DECREMENT" :
            return { count : state.count - 1 };

        case "RESET" :
            return { count : 0 };

        case "INCREMENTBYVALUE":
            return { count : state.count + action.payload };

        case "DECREMENTBYVALUE" :
            return { count : state.count - action.payload }

        default :
            return state;
    }

}