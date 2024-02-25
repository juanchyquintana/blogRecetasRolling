import { Button } from "react-bootstrap";

const ItemTablaRecetas = () => {
  return (
    <tr>
      <td>1</td>
      <td>nombre</td>
      <td>imagen</td>
      <td>descripcion</td>
      <td>ingredientes</td>
      <td>preparacion</td>
      <td>categoria</td>
      <td>
        <Button variant="warning" className="py-1 m-1">
          <i class="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" className="py-1 m-1">
          <i class="bi bi-trash3"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemTablaRecetas;
