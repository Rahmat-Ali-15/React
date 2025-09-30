import './App.css'
import { ApiCall } from './Components/ApiCall'
import { Todo } from './Components/Todo'
import { TodoList } from './Components/TodoList'

export function App() {

  return (
    <>
      <ApiCall />
      <Todo />
      <TodoList />
    </>
  )
}
