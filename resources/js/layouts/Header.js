import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/images/bookworm_logo.svg";
import {Container, Nav, Navbar} from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <header className="section-header">
                <section className="border-bottom">
                    <Navbar className="navbar navbar-main  navbar-expand-lg navbar-light" expand="lg">
                        <Container>
                            <Navbar.Brand className="py-2">
                                <Link to="/">
                                    <img src={logo} className="logo" />
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Item>
                                        <Link to="/" className="nav-link">Home</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link to="/shop" className="nav-link">Shop</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link to="/about" className="nav-link">About</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link to="/cart" className="nav-link">Cart</Link>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </section>
            </header>
        );
    }
}

export default Header;
