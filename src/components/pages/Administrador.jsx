import { Button, Table } from "react-bootstrap";
import ItemTablaRecetas from "./receta/ItemTablaRecetas";

const Administrador = () => {
  return (
    <section className="container my-4">
      <div className="d-flex justify-content-between align-items-start">
        <h1 className="mb-3">Recetas disponibles</h1>
        <Button variant="primary p-2">+</Button>
      </div>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>URL Imagen</th>
            <th>Descripción</th>
            <th>Ingredientes</th>
            <th>Preparación</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          <ItemTablaRecetas></ItemTablaRecetas>
          <ItemTablaRecetas></ItemTablaRecetas>
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;