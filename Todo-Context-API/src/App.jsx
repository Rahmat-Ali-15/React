import "./App.css";
import { Todo } from "./Components/Todo";
import { TodoContextProvider } from "./Context/TodoContextProvider";

export function App() {
  return (
    <TodoContextProvider>
      <Todo />
    </TodoContextProvider>
  );
}
