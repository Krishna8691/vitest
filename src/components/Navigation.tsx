import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function Navigation({ count }: { count: number }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>Vitest</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className={"nav-link text-decoration-none text-dark"}
              to={"/static"}
            >
              Static
            </NavLink>
            <NavLink
              className={"nav-link text-decoration-none text-dark"}
              to={"/form"}
            >
              Form
            </NavLink>
            <NavLink
              className={"nav-link text-decoration-none text-dark"}
              to={"/modal"}
            >
              Modal
            </NavLink>
            <span data-testid='nav-counter' className="nav-link text-danger"><b>{count}</b></span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
