import React, { Component } from "react";
import { Container, Form, Nav, Navbar, FormControl, Button } from "react-bootstrap";
import * as ROUTES from '../constants/routes';

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
                                <Nav.Link href={ROUTES.ANALYSIS}><span class="navLink">Analysis</span></Nav.Link>
                                <Nav.Link href={ROUTES.RESULTS}><span class="navLink">Results</span></Nav.Link>
                                <Nav.Link href={ROUTES.ABOUT}><span class="navLink">About</span></Nav.Link>
                                <Nav.Link href={ROUTES.STATISTICS}><span class="navLink">Statistics</span></Nav.Link>
                                <Nav.Link href={ROUTES.NOT_FOUND}><span class="navLink">Not_Found</span></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
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