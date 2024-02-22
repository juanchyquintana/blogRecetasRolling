import { Container } from "react-bootstrap";
import banner from "../../assets/banner.png"
const Inicio = () => {
    return (
        <section>
        <div id="contenBanner">
        <img
          src={banner}
          className="img-fluid"
          alt="banner"
          id="imgBanner"
          style={{ width: "100%" }}
        />
      </div> 
      <Container>
      <h3 className="my-4 mt-5 titulosFuente">CATEGORIAS POPULARES</h3>
        <hr />
      </Container>
        </section>
        
    );
};

export default Inicio;