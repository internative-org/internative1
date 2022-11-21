import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Referral } from './Referral';
import "./style.css"
const NavBar = ()=>{
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Internative</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className='navdiv'>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="#home" >Home</Nav.Link>
            <Nav.Link href="#link">Hire From Us</Nav.Link>
            <Nav.Link href="#link">Course</Nav.Link>
            <Nav.Link href="#link"  >Refer and Earn</Nav.Link>
            <Nav.Link href="#link">Fees and PAP</Nav.Link>
            <Nav.Link href="#login">Apply Now Here</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;