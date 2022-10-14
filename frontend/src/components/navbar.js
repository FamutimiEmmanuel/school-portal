import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" style={{ color:"#fff",fontSize:"20px", fontWeight:"bold"}}>Emmanuel Famutimi High School</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color:"#fff",fontSize:"20px"}}>Home</Nav.Link>
            <Nav.Link href="/about" style={{ color:"#fff",fontSize:"20px"}}>About Us</Nav.Link>
            <NavDropdown title="Activities" id="collasible-nav-dropdown" style={{ color:"#fff",fontSize:"20px"}}>
              <NavDropdown.Item href="https://buy.stripe.com/test_cN26rIfhy4kDfV66oo" style={{ color:"#333",fontSize:"20px"}}>
               payment
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/summer" style={{ color:"#333",fontSize:"20px"}}>Summer lesson</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/cultural" style={{ color:"#333",fontSize:"20px"}}>
                Cultural Display
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/sport" style={{ color:"#333",fontSize:"20px"}}>
              Inter-House Sport
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/studentlogin" style={{ color:"#fff",fontSize:"20px"}}>Student</Nav.Link>
            <Nav.Link eventKey={2} href="/stafflogin" style={{ color:"#fff",fontSize:"20px"}}>
              Staff
            </Nav.Link>
            <Nav.Link eventKey={3} href="/adminlogin" style={{ color:"#fff",fontSize:"20px"}}>
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;