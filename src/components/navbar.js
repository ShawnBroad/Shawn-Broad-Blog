import React from 'react'; 
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


const Nav1 = () => {
    return(
    <Navbar bg="navbar" expand="lg">
  <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="./">Home</Nav.Link>
        <Nav.Link href="./aboutus">About Us</Nav.Link>
        <NavDropdown title="Blogs" id="basic-nav-dropdown">
          <NavDropdown.Item href="./rise">Rise Against</NavDropdown.Item>
          <NavDropdown.Item href="./anti">Anti-Flag</NavDropdown.Item>
          <NavDropdown.Item href="./streetlight">Streetlight Manifesto</NavDropdown.Item>
          <NavDropdown.Item href="./ramones">Ramones</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="./reelbigfish">Reel Big Fish</NavDropdown.Item>
          <NavDropdown.Item href="./adtr">A Day to Remember</NavDropdown.Item>
          <NavDropdown.Item href="./sum41">Sum 41</NavDropdown.Item>
          <NavDropdown.Item href="./rancid">Rancid</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="./contactus">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Nav1