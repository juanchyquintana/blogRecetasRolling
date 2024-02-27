import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemRecetas = ({receta}) => {
    const { nombreReceta, imagen, id, dificultad } = receta

  return (
    <Col xs={12} md={6} lg={4}>
    <Card style={{ width: "80%" }} className="mb-5 ">
      <Card.Img variant="top" src={imagen} />
      <Card.Body className="card-body">
        <Card.Title className="text-light text">{nombreReceta}</Card.Title>
        <Card.Text className="btn btn-light">Nivel: {dificultad}</Card.Text>
        <Card.Footer className="d-flex justify-content-center">
          <Link className="btn btn-light" to={`/recetas/${id}`} >Ver más</Link>
        </Card.Footer>
      </Card.Body>
    </Card>
  </Col>
  );
};

export default ItemRecetas;
