
import './App.css'
import { Child } from './components/Child'

export function Parent() {
  let count = 1;
  return(
    <>
      <h1>Parent</h1>
      <Child counts = {count}/>
    </>
  )
}

