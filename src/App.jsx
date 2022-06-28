import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Carrousel from './Components/Carrousel/Carrousel'
import FormContact from './Components/FormContact/FormContact'
import NavBar from './Components/NavBar/NavBar'
import ServicesProduct from './Components/ServicesProduct/Services'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Carrousel2 from "./Components/Carrousel/Carrousel2";

function App() {

  return (
    <div className="App">
      {/* <NavBar/> */}
      {/* <Carrousel/> */}
      <Carrousel2/>
      {/* <About/>
      <ServicesProduct/> */}
      <FormContact/>
      {/* <Footer/> */}
    </div>
  )
}

export default App
