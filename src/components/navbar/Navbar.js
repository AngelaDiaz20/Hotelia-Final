import React from 'react';
import { Navbar, Container, Nav, Button} from "react-bootstrap";
import Logo from '../../img/Hotelia horizontal blanco.png'

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" className="navbar">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={Logo}
                        height="38"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features"></Nav.Link>
                    </Nav>
                    <Nav className="navbar__items">
                        <Nav.Link href="/" className="navbar__link">Inicio</Nav.Link>
                        <Nav.Link href="#index__ubication" className="navbar__link">Ubícanos</Nav.Link>
                        <Nav.Link href="#index__opinion" className="navbar__link">Opiniones</Nav.Link>
                        <Nav.Link href="/login"><Button className="navbar-button"><i class="fa-solid fa-user"></i>Iniciar Sesión</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar