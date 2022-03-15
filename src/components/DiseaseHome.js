import React, { Component } from 'react';
import { Button, Card, CardDeck, Container, Form } from 'react-bootstrap';
import PlaceHolder from "./bg.png";

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Text> Введите свои данные, чтобы продолжить </Form.Text>
                        <Form.Control type="height" placeholder="Рост"/>
                        <Form.Control type="weight" placeholder="Вес"/>
                        <Form.Control type="sex" placeholder="Пол"/>
                        <Form.Control type="age" placeholder="Возраст"/>
                    </Form.Group>
                    <Button className="button mt-4" type="submit">Отправить</Button>
                </Form>
            </Container>
        )
    }
}