import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./components/pages/Inicio";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import DetalleProducto from "./components/pages/DetalleProducto";

function App() {
  return (
    <>
      <Header />
      <Inicio></Inicio>
      {/* <Route exact path='/DetalleProducto' element={<DetalleProducto></DetalleProducto>}></Route> */}
      <Footer />
    </>
  );
}

export default App;
