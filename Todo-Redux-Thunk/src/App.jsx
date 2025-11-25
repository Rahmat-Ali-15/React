import './App.css'
import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'

export function App() {

  return (
    <>
      <h1>Redux todos</h1>
      <AddTodo />
      <TodoList/>
    </>
  )
}