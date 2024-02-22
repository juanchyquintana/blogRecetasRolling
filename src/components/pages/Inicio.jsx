import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import banner from "../../assets/banner.png";
import pastas from "../../assets/lasagna.jpg";
import ensaladas from "../../assets/ensalada.jpg";
import salsas from "../../assets/salsas.jpg";
import postres from "../../assets/tarta.jpg";
import carnes from "../../assets/carne.jpg";
import entrada from "../../assets/entrada.jpg";
import nuevaReceta1 from "../../assets/nuevaReceta1.jpg";
import nuevaReceta2 from "../../assets/nuevaReceta2.jpg";
import nuevaReceta3 from "../../assets/nuevaReceta3.jpg";
const Inicio = () => {
  return (
    <section>
      <div id="contenBanner" style={{ maxWidth: "100%" }}>
        <img
          src={banner}
          className="img-fluid"
          alt="banner"
          id="imgBanner"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="my-4 mt-5 titulosFuente">CATEGORIAS POPULARES</h3>
          <a
            href="Otras categorías"
            className="link-secondary link-informacion mt-5 fw-bold h5"
          >
            Otras categorías
          </a>
        </div>

        <hr />
        <Row className="mb-4 mt-5">
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "80%" }} className="mb-3">
              <Card.Img variant="top" src={pastas} />
              <Card.Body className="card-body">
                <Card.Title className="text-light text">Pastas</Card.Title>
                <Card.Footer className="d-flex justify-content-center">
                  <Button className="btn btn-light">Ver más</Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "80%" }} className="mb-3">
              <Card.Img variant="top" src={ensaladas} />
              <Card.Body>
                <Card.Title className="text-light text">Ensaladas</Card.Title>
                <Card.Footer className="d-flex justify-content-center">
                  <Button className="btn btn-light">Ver más</Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "80%" }} className="mb-3">
              <Card.Img variant="top" src={salsas} />
              <Card.Body>
                <Card.Title className="text-light text">Salsas</Card.Title>
                <Card.Footer className="d-flex justify-content-center">
                  <Button className="btn btn-light">Ver más</Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "80%" }} className="mb-3">
              <Card.Img variant="top" src={postres} />
              <Card.Body>
                <Card.Title className="text-light text">Postres</Card.Title>
                <Card.Footer className="d-flex justify-content-center">
                  <Button className="btn btn-light">Ver más</Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "80%" }} className="mb-3">
              <Card.Img variant="top" src={carnes} />
              <Card.Body>
                <Card.Title className="text-light text">
                  Platos/Carne
                </Card.Title>
                <Card.Footer className="d-flex justify-content-center">
                  <Button className="btn btn-light">Ver más</Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "80%" }} className="mb-3">
              <Card.Img variant="top" src={entrada} />
              <Card.Body>
                <Card.Title className="text-light text">
                  Aperitivos y Entradas
                </Card.Title>
                <Card.Footer className="d-flex justify-content-center">
                  <Button className="btn btn-light">Ver más</Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mb-5">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="my-4 mt-5 titulosFuente">Nuevas Recetas</h3>
        </div>
        <hr />
        <section className="recetas">
          <Carousel>
            <Carousel.Item>
              <img
                className="img-fluid"
                src={nuevaReceta1}
                alt="Nuevas recetas comida"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={nuevaReceta2} alt="comidas" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={nuevaReceta3} alt="postres" />
            </Carousel.Item>
          </Carousel>
        </section>
      </Container>
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="my-4 mt-5 titulosFuente">Nuestros Chefts</h3>
        </div>
          <h5>"Cada uno de ellos tiene su lugar destacado en nuestro canal, dedicado a compartir las mejores recetas y técnicas de cocina contigo."</h5>
        <hr />
      </Container>
    </section>
  );
};

export default Inicio;
