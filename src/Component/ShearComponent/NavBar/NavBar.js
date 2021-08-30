import React, { useContext } from 'react';
import './NavBar.css'
import logo from '../../../Image/logo1.png'
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { userContext } from '../../../App';

const NavBar = () => {
    const logInUser = JSON.parse(localStorage.getItem('user'))

    return (
        <header className=" bg-primary" >
            <Navbar expand="md">
                <Navbar.Brand as={Link} to='/'>
                    <img src={logo} alt="Logo" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                    </Nav>
                    {/* {logedInUser.displayName || logedInUser.email ? ( */}
                    {localStorage.getItem('user') ? (
                        <Nav.Link as={Link} to="/profile">
                            <img
                                className="avatar"
                                src={
                                    logInUser.photoURL ||
                                    "https://i.ibb.co/JqYKzYK/avatar.jpg"
                                }
                                alt={logInUser.displayName || logInUser.email}
                            />
                        </Nav.Link>
                    ) : (
                        <Button as={Link} to="/logIn" variant="danger" className="ml-3 login-Button">
                            LogIn
                        </Button>
                    )}
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default NavBar;