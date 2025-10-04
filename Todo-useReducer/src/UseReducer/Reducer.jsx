export const Reducer = (state, action) => {
    switch(action.type){
        case "ADD_TODO":
            return {
                // ...state, {id : Date.now(), text : action.payload}
            }

        case "EDIT_TODO" :
            return


        case "DELETE_TODO" :
            return


        default : 
            return
    }
}