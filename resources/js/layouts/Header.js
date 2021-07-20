import React from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/images/bookworm_logo.svg";
import {Container, Nav, Navbar} from "react-bootstrap";
import {connect} from "react-redux";
import {ToastContainer} from "react-toastify";

function Header (props) {
    return (
        <header className="section-header">
            <section className="border-bottom">
                <Navbar className="navbar navbar-main  navbar-expand-lg navbar-light" expand="lg">
                    <Container>
                        <Navbar.Brand className="py-2">
                            <Link to="/">
                                <img src={logo} className="logo"/>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Item activeClassName="active">
                                    <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                                </Nav.Item>
                                <Nav.Item >
                                    <NavLink to="/shop" className="nav-link" activeClassName="active">Shop</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="/cart" className="nav-link" activeClassName="active">Cart ({props.cart.length})</NavLink>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>

            <ToastContainer position="bottom-right" />
        </header>
    );
}

const mapStateToProps = state => {
    return {
        cart: state._cartReducers.Carts
    }
}

export default connect(mapStateToProps, null)(Header)
