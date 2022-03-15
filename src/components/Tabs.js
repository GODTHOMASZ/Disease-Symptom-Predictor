import React, { Component } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';

export default class Tabs extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab3</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Tab4</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <p>Text 1</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <p>Text 2</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    <p>Text 3</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fourth'>
                                    <p>Text 4</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}