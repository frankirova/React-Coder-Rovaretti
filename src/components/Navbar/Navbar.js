import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import UserView from '../UserView/UserView';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav.Link href='/'><Navbar.Brand className='navbar-brand'>RealTech Store</Navbar.Brand></Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/category/Notebooks">Notebooks</Nav.Link>
            <Nav.Link href="/category/Celulares">Celulares</Nav.Link>
            <Nav.Link href="/category/Tablets">Tablets</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        <UserView />
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;