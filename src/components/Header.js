import React, { Component } from "react";
import { Container, Form, Nav, Navbar, FormControl, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../pages/Styles.css"

import Home from '../pages/Home';
import Feedback from '../pages/Contacts';


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" className="header">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto ">
                                <Nav.Link href="/"><span class="navLink">Home</span></Nav.Link>
                                {/* <Nav.Link href="/feedback"><span class="navLink">Feedback</span></Nav.Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/feedback' component={Feedback} />
                    </Switch>
                </Router>
            </>
        )
    }
}

{/* <Navbar.Brand href="/" >
    <img
        src={logo}
        height="30"
        width="30"
        className="d-inline-block align-top"
        alt="Logo"
    />
</Navbar.Brand> */}