import { Table } from "react-bootstrap";

const Administrador = () => {
    return (
        <section>
        <h1 className='text-center'>Recetas disponibles</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Ingredientes</th>
          <th>Preparación</th>
          <th>Categoria</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
        </section>
    );
};

export default Administrador;