import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Carrousel from './Components/Carrousel/Carrousel'
import FormContact from './Components/FormContact/FormContact'
import NavBar from './Components/NavBar/NavBar'
import ServicesProduct from './Components/ServicesProduct/Services'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Carrousel/>
      <About/>
      <ServicesProduct/>
      <FormContact/>
      <Footer/>
    </div>
  )
}

export default App
