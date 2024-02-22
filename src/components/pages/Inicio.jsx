import { Container, Row, Col, Card, Button } from "react-bootstrap";
import banner from "../../assets/banner.png";
import pastas from "../../assets/lasagna.jpg";
import ensaladas from "../../assets/ensalada.jpg";
import salsas from "../../assets/salsas.jpg";
import postres from "../../assets/tarta.jpg";
import carnes from "../../assets/carne.jpg";
import entrada from "../../assets/entrada.jpg";
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
          <a href="Otras categorías" className="link-secondary link-informacion mt-5 fw-bold h5">
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
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="my-4 mt-5 titulosFuente">Nuevas Recetas</h3>
        </div>
        <hr />
        <Carousel fade>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Container>
    </section>
  );
};

export default Inicio;
