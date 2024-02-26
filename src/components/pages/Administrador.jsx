import { Button, Table } from "react-bootstrap";
import ItemTablaRecetas from "./receta/ItemTablaRecetas";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { leerRecetasAPI } from "../../helpers/queries";

const Administrador = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerRecetasAPI();
      setRecetas(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container my-4">
      <div className="d-flex justify-content-between align-items-start">
        <h1 className="mb-3">Recetas disponibles</h1>
        <Link className="btn btn-primary" to="/nuevoProducto">
          <i className="bi bi-pencil-square"></i>
        </Link>
      </div>
      <Table responsive striped bordered hover className="mt-4 text-center">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>URL Imagen</th>
            <th>Descripción</th>
            <th>Ingredientes</th>
            <th>Preparación</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            recetas.map ((receta)=><ItemTablaRecetas key={receta.id} receta={receta}></ItemTablaRecetas>)
          }
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
