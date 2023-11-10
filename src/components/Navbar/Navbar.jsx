import { Navbar, Nav, Container } from "react-bootstrap";
import './Navbar.css'

function NavigationBar() {
  return (
    <>
      <Navbar expand="lg" className="n-wrapper my-3">
        <Container>
          <Navbar.Brand href="#home" className="n-logo">Joseph.<span className="n-logoName">Code</span></Navbar.Brand>
          <span>Toggler</span>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="n-links ms-auto mx-4 fs-5">
              <Nav.Link href="#home" className="text-black">Home</Nav.Link>
              <Nav.Link href="#link" className="text-black">Services</Nav.Link>
              <Nav.Link href="#link" className="text-black">Experience</Nav.Link>
              <Nav.Link href="#link" className="text-black">Portfolio</Nav.Link>
              <Nav.Link href="#link" className="text-black">Team</Nav.Link>
            </Nav>
            <button type="button n-button ">Contact</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
