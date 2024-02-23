import { Container, Nav, NavLink, Navbar } from "react-bootstrap";
import logoPriola from "../assets/logoDoñaPirola.png";

const Header = () => {
  return (
    <Navbar expand="lg" className="bgNavFooter shadow">
      <Container>
        <Navbar.Brand>
          <img
            src={logoPriola}
            alt="Logo Coffe"
            className="img-fluid"
            width={150}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <NavLink className="nav-link colorSecundario" to="/">
              Inicio
            </NavLink>
            <NavLink className="nav-link colorSecundario" to="/administrador">
              Administrador
            </NavLink>
            <NavLink className="nav-link colorSecundario" to="/registrarse">
              Registro
            </NavLink>
            <NavLink className="nav-link colorSecundario" to="/login">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
