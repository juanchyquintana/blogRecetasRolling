import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import NuevoProducto from "./components/pages/NuevoProducto";
import DetalleProducto from "./components/pages/DetalleProducto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recetas from "./components/pages/receta/Recetas";
import Login from "./components/pages/Login";
import Error404 from "./components/pages/Error404";
import { useState } from "react";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("adminKeyRecetas")) || "";
  const [usuarioLog, setUsuarioLog] = useState(usuario);

  return (
    <>
      <BrowserRouter>
        <Header
          usuarioLog={usuarioLog}
          setUsuarioLog={setUsuarioLog}
        />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/detalleProducto" element={<DetalleProducto />} />
          <Route exact path="/administrador" element={<Administrador />} />
          <Route exact path="/login" element={<Login setUsuarioLog={setUsuarioLog} />} />
          <Route
            exact
            path="/administrador/crear-producto"
            element={
              <NuevoProducto editar={false} titulo="Agregar Nueva Receta" />
            }
          />
          <Route
            exact
            path="/administrador/editar-producto/:id"
            element={<NuevoProducto editar={true} titulo="Editar Receta" />}
          />
          <Route exact path="/recetas" element={<Recetas />} />
          <Route exact path="/recetas/:id" element={<DetalleProducto />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
