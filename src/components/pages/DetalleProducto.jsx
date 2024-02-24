import { Container } from "react-bootstrap";
import lasagna from "../../assets/lasagna.jpg";
const DetalleProducto = () => {
  return (
    <Container className="mt-5 d-flex justify-content-between "style={{ height: '400px' }}>
      <div className="bannerProducto w-100 text-center  ">
        <h2 className="text-light titulosFuente">{"Lasagna Boloñesa"}</h2>
        <p className="text-light">"Aprende a preparar esta receta de Lasagna a la boloñesa"</p>
        <p className="text-light">Un plato italiano clásico conocido por sus capas de pasta intercaladas con una rica mezcla de carne y salsas. En este caso, la lasagna a la boloñesa se destaca por su relleno de ragú boloñés, una salsa de carne que proviene de la región de Bolonia, Italia.</p>
      </div>
      <img src={lasagna} alt="lasagna" className="img-fluid w-50 "/>
    </Container>
  );
};

export default DetalleProducto;
