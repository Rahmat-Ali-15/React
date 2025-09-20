import Card from './Components/card'
import "./App.css"
import Albert_Einstein from './assets/Albert-Einstein.jpg'
import Issac_Newton from './assets/isac_newton.avif'
import Madam_Curie from './assets/madam_curie.jpg'

function App() {

  return (
    <div className='container'>
      <Card name="Albert Einstein" image={Albert_Einstein} disc = "disc 1" btn="Edit"/>
      <Card name="Issac Newton" image={Issac_Newton} disc = "disc 2" btn="Delete"/>
      <Card name="Madam Curie (Marie Curie)" image={Madam_Curie} disc = "disc 3" btn="Submit"/>
    </div>
  )
}

export default App
