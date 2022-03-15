import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default class Feedback extends Component {
    render() {
        return (
            <Container style={{ width: '500px', height: '600px', marginTop: '300px'}}>
                <h1 className='text-center'> Связаться с нами </h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email адрес</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                        {/* <Form.Text> Давай, пиши, чо не так </Form.Text> */}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Если имеются фото, приложите ссылку(и)</Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                    </Form.Group>
                    <Button className="button mt-4" type="submit">Отправить</Button>
                </Form>
            </Container>
        )
    }
}