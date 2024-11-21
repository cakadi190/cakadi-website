import { Link } from "@inertiajs/react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar fixed="top" expand="lg">
      <Container>
        {/* Logo di kiri */}
        <Navbar.Brand href="/">
          <img
            src="/path-to-your-logo.png"
            alt="Logo"
            style={{ height: "40px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Menu kiri */}
          <Nav className="me-auto">
            <Link className="nav-link" href="/about">
              About
            </Link>
            <Link className="nav-link" href="/projects">
              Projects
            </Link>
            <Link className="nav-link" href="/blog">
              Blog
            </Link>
          </Nav>

          {/* Menu kanan */}
          <Nav>
            <Nav.Link
              href="https://github.com/cakadi190"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Nav.Link>
            <Nav.Link href="mailto:your-email@example.com">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
