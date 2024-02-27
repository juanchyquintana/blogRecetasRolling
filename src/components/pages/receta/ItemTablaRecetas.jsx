import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemTablaRecetas = ({ receta }) => {

  const { id, nombreReceta, imagen, descripcion, ingredientes, preparacion, categoria} = receta;
  return (
    <tr>
      <td>{id}</td>
      <td>{nombreReceta}</td>
      <td>
        <img
          src={imagen}
          className="img-thumbnail"
          alt={nombreReceta}
        ></img>
      </td>
      <td>{descripcion}</td>
      <td>{ingredientes}</td>
      <td>{preparacion}</td>
      <td>{categoria}</td>
      <td>
        <Link to={`/administrador/editar-producto/${id}`} className="me-lg-2 btn btn-warning">
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" className="py-1 m-1">
          <i className="bi bi-trash3"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemTablaRecetas;
