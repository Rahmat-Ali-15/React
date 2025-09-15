import './App.css'
import "./Comonents/Card.css"
import { Card } from './Comonents/Card'

export function App() {

  return (
    <>
      <div style={{"display" : "flex", "gap": "15px"}} className='app-div'>
        <Card name = {"Md Rahmat Ali"} age = {"21"} email={"xyz@gmail.com"}/>
        <Card name = {"Md Rahmat Ali"} age = {"21"}/>
        <Card />
      </div>
    </>
  )
}