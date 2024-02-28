import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <section className="container text-center my-5">
            <h1 className="mb-5 fw-bolder tamanioLetraError">Error 404</h1>
            <Link to={"/"} className="btn btn-success">Página principal</Link>
        </section>
    );
};

export default Error404;