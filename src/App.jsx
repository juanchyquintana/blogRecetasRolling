import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./components/pages/Inicio";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NuevoProducto from "./components/pages/NuevoProducto";

function App() {
  return (
    <>
      <Header />
        {/* <Inicio></Inicio> */}
        <NuevoProducto />
      <Footer />
    </>
  );
}

export default App;
