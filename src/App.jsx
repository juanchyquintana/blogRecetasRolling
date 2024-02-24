import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./components/pages/Inicio";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NuevoProducto from "./components/pages/NuevoProducto";
import DetalleProducto from "./components/pages/DetalleProducto";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
          <Route
            exact
            path="/detalleProducto"
            element={<DetalleProducto></DetalleProducto>}
          ></Route>
          <Route exact path="/administrador/crear-producto" element={<NuevoProducto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
