import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./Pages/Home";
import ABout from "./Pages/About";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div>
      <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand text-success fw-semibold">
              React Restaurant
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
              <Nav.Link href="/" className="active text-uppercase">
                Home
              </Nav.Link>
              <Nav.Link href="/menu" className="active text-uppercase">
                Menu
              </Nav.Link>
              <Nav.Link href="/about" className="active text-uppercase">
                About
              </Nav.Link>
              <Nav.Link href="/contact" className="active text-uppercase">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<ABout />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="bg-body-tertiary">
        <p className="p-3 m-0 text-center">
          Copyright &copy; made by Ionut Cora
        </p>
      </footer>
    </div>
  );
}

export default App;
