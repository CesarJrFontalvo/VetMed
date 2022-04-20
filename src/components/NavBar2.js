import React from 'react'
import { Nav, Navbar, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../actions/actionLogin'
import { Barranav, Buttomnew } from '../style/StyledNav';

const NavBar2 = () => {
    /*-----Funcion de logout-----*/
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }
    /*----------*/
    return (
        <Barranav expand="lg" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#">VetMed</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="inicio">Home</Nav.Link>
                        <NavDropdown title="Qué Necesitas" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="tipo-mascota">Registrar mascota</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="#action4">Articulos</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="veterinarias">Veterinarias</Nav.Link>
                        <Nav.Link as={Link} to="perfil">Perfil</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Buttomnew variant="primary" onClick={() => handleLogout()}>
                        Logout
                    </Buttomnew>

                </Navbar.Collapse>
            </Container>
        </Barranav>
    )
}

export default NavBar2