import React, { Component } from 'react';
import { Button, Card, CardDeck, Container, Form } from 'react-bootstrap';
import * as ROUTES from '../constants/routes';


export default class Home extends Component {
    render() {
        return (
            <Container>
                <Form>
                    <h4 className='text-center mt-1 mb-2'> <p>Введите свои данные, чтобы продолжить</p></h4>
                    <Form.Group className='d-flex flex-row' controlId="formBasicEmail">
                        <Form.Control className='w-25' type="height" placeholder="Рост"/>
                        <Form.Control className='w-25' type="weight" placeholder="Вес"/>
                        <Form.Control className='w-25' type="sex" placeholder="Пол"/>
                        <Form.Control className='w-25' type="age" placeholder="Возраст"/>
                    </Form.Group>
                    <div className='text-center'><Button className="button mt-3" href={ROUTES.ANALYSIS}>Отправить</Button></div>
                </Form>
            </Container>
        )
    }
}