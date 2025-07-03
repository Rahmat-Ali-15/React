import './App.css'
import { Card } from './components/Card'

export const App = () => {
  

  return (
    <>
      <h1>Hello</h1>
      <Card name = {"Rahmat"} age = {20} email = {"mdrahmatali926298@gmail.com"}/>
      <Card name = {"Rahmat"} email = {"silentkiller9708@gmail.com"} />
      <Card />
    </>
  )
}

export default App
