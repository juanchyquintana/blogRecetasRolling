import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from "./components/pages/Inicio";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <>
      <Header />
        <Inicio></Inicio>
      <Footer />
    </>
  )
}

export default App;
