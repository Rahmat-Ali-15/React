import './App.css'
import { BredCrumbs } from './Components/bredCrumbs'
import { Navbar } from './Components/Navbar'
import { AllRoutes } from './Routes/AllRoutes'

export function App() {

  return (
    <>
      <Navbar />
      <BredCrumbs />
      <AllRoutes />
    </>
  )
}
