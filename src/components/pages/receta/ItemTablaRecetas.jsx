import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemTablaRecetas = ({ receta }) => {
  const {
    id,
    nombreReceta,
    imagen,
    descripcionBreve,
    ingredientes,
    categoria,
  } = receta;
  return (
    <tr>
      <td>{id}</td>
      <td>{nombreReceta}</td>
      <td>
        <img
          src={imagen}
          className="img-thumbnail w-25"
          alt={nombreReceta}
        ></img>
      </td>
      <td>{descripcionBreve}</td>
      <td>{ingredientes}</td>
      <td>{categoria}</td>
      <td>
        <div className="d-flex gap-2">
          <Link
            to={`/administrador/editar-producto/${id}`}
            className="btn btn-warning"
          >
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button variant="danger" className="py-1 m-1">
            <i className="bi bi-trash3"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemTablaRecetas;
