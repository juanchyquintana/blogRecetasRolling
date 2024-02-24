import { Container,Col,Row } from "react-bootstrap";
import lasagna from "../../assets/lasagna.jpg";
const DetalleProducto = () => {
  return (
    <>
      <Container
        className="mt-5 d-flex justify-content-between "
        style={{ height: "300px" }}
      >
        <div className="bannerProducto w-100 text-center  ">
          <h2 className="text-light titulosFuente">{"Lasagna Boloñesa"}</h2>
          <p className="text-light">
            "Aprende a preparar esta receta de Lasagna a la boloñesa"
            Un plato italiano clásico conocido por sus capas de pasta
            intercaladas con una rica mezcla de carne y salsas.
          </p>
          {/* <p className="text-light">
            Un plato italiano clásico conocido por sus capas de pasta
            intercaladas con una rica mezcla de carne y salsas.
          </p> */}
        </div>
        <img src={lasagna} alt="lasagna" className="img-fluid w-50 " />
      </Container>
      <Container className="mt-5">
        <Row>
          <Col
            xs={12}
            md={5}
            lg={5}
            className="border border-1 me-md-5 mb-3 mb-md-0 "
          >
            <section className="listaIngredientes ">
              <h3 className="mt-3 ">{"Ingredientes:"}</h3>
              <hr />
              <ul className="mt-3">
                <li>Placas de lasagna - Cantidad necesaria</li>
                <hr />
                <li>
                  Ragú boloñés - Hecho con carne de res, cerdo, cebolla,
                  zanahoria, apio, tomate y vino tinto
                </li>
                <hr />
                <li>Salsa bechamel - Hecha con leche, harina y mantequilla</li>
                <hr />
                <li>Queso ricotta - 250 gramos</li>
                <hr />
                <li>Queso mozzarella - 200 gramos, rallado</li>
                <hr />
                <li>Queso parmesano - 50 gramos, rallado</li>
                <hr />
                <li>Sal y pimienta al gusto</li>
                <hr />
                <li>Aceite de oliva - Cantidad necesaria</li>
              </ul>
            </section>
          </Col>

          <Col xs={12} md={6} className="listaIngredientes">
            <section>
              <h3>{"Preparacion de la receta:"}</h3>
              <hr />
              <ol>
                <li>
                  Hervir las placas de lasagna según las instrucciones del
                  paquete. Escurrir y reservar.
                </li>
                <li>
                  Preparar el Ragú Boloñés:
                  <ul>
                    <li>
                      Saltear carne de res y cerdo en aceite de oliva hasta
                      dorar.
                    </li>
                    <li>
                      Agregar cebolla, zanahoria, apio y tomate. Cocinar hasta
                      que las verduras estén tiernas.
                    </li>
                    <li>
                      Verter vino tinto y cocinar a fuego lento hasta obtener un
                      ragú. Sazonar con sal y pimienta.
                    </li>
                  </ul>
                </li>
                <li>
                  Preparar la Salsa Bechamel:
                  <ul>
                    <li>Derretir mantequilla en una cacerola.</li>
                    <li>
                      Añadir harina y cocinar hasta formar una pasta dorada.
                    </li>
                    <li>
                      Verter leche gradualmente, cocinar hasta que la salsa
                      espese. Sazonar con sal y pimienta.
                    </li>
                  </ul>
                </li>
                <li>
                  Ensamblar la Lasagna:
                  <ul>
                    <li>
                      Colocar placas de lasagna en un recipiente para horno.
                    </li>
                    <li>
                      Agregar capas de Ragú Boloñés, Salsa Bechamel y quesos.
                    </li>
                    <li>
                      Repetir las capas hasta agotar ingredientes, terminar con
                      una capa de quesos.
                    </li>
                  </ul>
                </li>
                <li>
                  Hornear a 180°C (350°F) por 30-40 minutos, hasta que esté
                  dorada y burbujeante.
                </li>
                <li>Dejar reposar antes de cortar y servir.</li>
              </ol>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DetalleProducto;
