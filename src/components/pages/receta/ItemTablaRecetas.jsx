import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemTablaRecetas = ({ receta }) => {
  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td>
        <img
          src={receta.imagen}
          className="img-thumbnail"
          alt={receta.nombreReceta}
        ></img>
      </td>
      <td>{receta.descripcion}</td>
      <td>{receta.ingredientes}</td>
      <td>{receta.preparacion}</td>
      <td>{receta.categoria}</td>
      <td>
        <Link to={`/administrador/editar`} className="me-lg-2 btn btn-warning">
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
