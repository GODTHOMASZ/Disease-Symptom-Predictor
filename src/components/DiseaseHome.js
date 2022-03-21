import React, { useState, Component } from 'react';
import { Button, Card, CardDeck, Container, Form } from 'react-bootstrap';
import * as ROUTES from '../constants/routes';


export default function DiseaseHome() {
        const [heightInp, setHeightInp] = useState('');
        const [widthInp, setWidthInp] = useState('');
        const [sexInp, setSexInp] = useState('');
        const [ageInp, setAgeInp] = useState('');

        const isEmpty = heightInp === '' || widthInp === '' ||  sexInp === '' || ageInp === '';

        return (
            <Container>
                <Form>
                    <h4 className='text-center mt-1 mb-2'> <p>Введите свои данные, чтобы продолжить</p></h4>
                    <Form.Group className='d-flex flex-row' controlId="formBasicEmail">
                        <Form.Control className='w-25' type="height" placeholder="Рост" value={heightInp} onChange={({target})=>setHeightInp(target.value)}/>
                        <Form.Control className='w-25' type="weight" placeholder="Вес" value={widthInp} onChange={({target})=>setWidthInp(target.value)}/>
                        <Form.Control className='w-25' type="sex" placeholder="Пол" value={sexInp} onChange={({target})=>setSexInp(target.value)}/>
                        <Form.Control className='w-25' type="age" placeholder="Возраст" value={ageInp} onChange={({target})=>setAgeInp(target.value)}/>
                    </Form.Group>
                    <div className='text-center'><Button disabled={isEmpty} className="button mt-3" href={ROUTES.ANALYSIS}>Продолжить</Button></div>
                </Form>
            </Container>
        )
}