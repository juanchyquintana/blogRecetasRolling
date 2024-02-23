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
import cheft1 from "../../assets/cheft1.jpeg";
import cheft2 from "../../assets/cheft2.jpeg";
import cheft3 from "../../assets/cheft3.jpeg";

const Inicio = () => {
  return (
    <section>
      <div id="contenBanner" style={{ maxWidth: "100%" }}>
        <img
          src={banner}
          className="img-fluid img-large"
          alt="banner"
          id="imgBanner"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>
      <Container>
        <div className="d-flex justify-content-between align-items-center categoria">
          <h3 className="my-4 mt-5 titulosFuente">CATEGORIAS POPULARES</h3>
          <a
            href="Otras categorías"
            className="link-secondary link-informacion mt-5 fw-bold h5"
          >
            Otras categorías
          </a>
        </div>

        <hr />
        <Row className="mb-4 mt-5 ms-4">
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "80%" }} className="mb-5 ">
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
      <Container className="mb-md-2 mb-lg-5">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="my-4 mt-5 titulosFuente">Nuevas Recetas</h3>
        </div>
        <hr />
        <section>
          <Carousel className="carrusel">
            <Carousel.Item>
              <img
                className="img-fluid"
                src={nuevaReceta1}
                alt="Nuevas recetas comida"
              />
              <Carousel.Caption className="mb-3">
                <Button variant="success" className="boton-carrusel text-light">
                  Ver Recetas
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={nuevaReceta2} alt="comidas" />
              <Carousel.Caption className="mb-3">
                <Button variant="success" className="boton-carrusel text-light">
                  Ver Recetas
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={nuevaReceta3} alt="postres" />
              <Carousel.Caption className="mb-3">
                <Button variant="success" className="boton-carrusel text-light">
                  Ver Recetas
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
      </Container>
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="my-4 mt-5 titulosFuente">Nuestros Chefts</h3>
        </div>
        <h5>
          "Cada uno de ellos tiene su lugar destacado en nuestro canal, dedicado
          a compartir las mejores recetas y técnicas de cocina contigo."
        </h5>
        <hr />
        <Row className="mb-4 mt-5 ms-4">
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "80%" }} className="mb-3 cheft-card">
              <Card.Img variant="top" src={cheft1} alt="sheyla" />
              <Card.Body className="card-body">
                <Card.Title className="text-light text">
                  Sheyla Astorga
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "80%" }} className="mb-3 cheft-card">
              <Card.Img variant="top" src={cheft2} alt="juan" />
              <Card.Body>
                <Card.Title className="text-light text">
                  Juan Diego Quintana
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "80%" }} className="mb-3 cheft-card">
              <Card.Img variant="top" src={cheft3} alt="natalia" />
              <Card.Body>
                <Card.Title className="text-light text">
                  Natalia Morales
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <section className="d-flex flex-column justify-content-center align-items-center mt-5 agradecimientoPirola mb-5 p-4 text-light">
        <h5 className="text-center">
          "¡Agradezco sinceramente tu visita a nuestra página! Estoy emocionada
          de compartir contigo mis recetas más queridas. Cada plato está lleno
          de amor y tradición, y espero que encuentres inspiración para tus
          propias creaciones culinarias. ¡Gracias por ser parte de nuestra
          comunidad gastronómica! Espero que disfrutes explorando y cocinando
          conmigo. ¡Bienvenido a mi cocina virtual!"
        </h5>
      </section>
    </section>
  );
};

export default Inicio;
