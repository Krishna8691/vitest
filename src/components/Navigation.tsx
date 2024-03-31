import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>Vitest</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <NavLink
                className={"text-decoration-none text-dark"}
                to={"/static"}
              >
                Static
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#link">
              <NavLink
                className={"text-decoration-none text-dark"}
                to={"/form"}
              >
                Form
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className={"text-decoration-none text-dark"}
                to={"/modal"}
              >
                Modal
              </NavLink>
            </Nav.Link>
            <NavDropdown
              className="border-0"
              title="Dropdown"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>Dropdown option 1</NavDropdown.Item>
              <NavDropdown.Item>Dropdown option 2</NavDropdown.Item>
              <NavDropdown.Item>Dropdown option 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}