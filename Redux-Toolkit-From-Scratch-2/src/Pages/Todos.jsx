import { PinList } from "../Components/PinList"
import { TodoInput } from "../Components/TodoInput"
import { TodoList } from "../Components/TodoList"

export const Todos = () => {
    return(
        <>
            <TodoInput />
            <PinList />
            <TodoList />
        </>
    )
}