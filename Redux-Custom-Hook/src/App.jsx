import './App.css'
import { useToggle } from './Hook/useToggle';

export function App() {

  const BASE_URL = `https://jsonplaceholder.typicode.com/posts`;

  const [value, toggleValue] = useToggle(true);

  return (
    <>
      <button onClick={toggleValue}>Toggle Handling</button>

      {/* this is for useFetch */}

      {value ? <h1>Custom Hook</h1> : null }
    </>
  )
}