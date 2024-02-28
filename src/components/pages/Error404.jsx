import { Link } from "react-router-dom";
import error from "../../assets/error.jpg"

const Error404 = () => {
    return (
        <section className="container text-center my-4 imagenFondoError">
            <img src={error} alt="imgError" className="img-fluid" style={{ width: "25%", objectFit: "cover" }}/>
            <h1 className="mb-1 fw-bolder tamanioLetraError">Error 404</h1>
            <Link to={"/"} className="btn btn-success" >Página principal</Link>
            
        </section>
    );
};

export default Error404;