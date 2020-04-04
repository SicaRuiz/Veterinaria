import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './navbar.css';
import logo from './logo.png';

const BarrNav = () => {

    


    return ( 
        <Navbar bg="light" expand="lg">
             <Navbar.Brand >
                <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt=""
                />
            </Navbar.Brand>
            <Navbar.Brand href="#home" className="font-weight-bold" >Bigotes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/" className="nav-link px-3 py-2 text-decoration-none border-0 text-dark">Inicio</Link>
                    <Link to="/turnos" className="nav-link px-3 py-2 text-decoration-none border-0  text-dark">Turnos</Link>
                    <Link to="/contactos" className="nav-link px-3 py-2 text-decoration-none border-0 text-dark">Contacto</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
     );
}
 
export default BarrNav;