import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { Navbar } from "./components/Navbar";
import { TodoList } from "./components/TodoList";
import { AllRoutes } from "./Routes/AllRoutes";

export function App() {
  return (
    <>
      {/* <h1>Redux todos</h1>
      <AddTodo />
      <TodoList/> */}
      <Navbar />
      <AllRoutes />
    </>
  );
}
