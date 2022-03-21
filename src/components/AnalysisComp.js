import React, { useState, useEffect, Component } from 'react';
import { Button, Card, CardDeck, Container, Form } from 'react-bootstrap';
import * as ROUTES from '../constants/routes';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

    

export default function AnalysisComp() {
    
        const colourOptions = [
            { value: 'itching', label: 'Зуд', color: '#00B8D9', isFixed: true },
            { value: 'skin_rash', label: 'Кожная сыпь', color: '#0052CC' },
            { value: 'nodal_skin_eruptions', label: 'Узловые кожные высыпания', color: '#5243AA' },
            { value: 'fatigue', label: 'Усталость', color: '#FF5630', isFixed: true },
            { value: 'high_fever', label: 'Высокая температура', color: '#FF8B00' },
          ];
        const animatedComponents = makeAnimated();
        const MyComponent = () => (
            <Select 
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={colourOptions}
            className="w-50 rounded p-3 mx-auto"
            />
          )

        return (
            <Container>
                <Form>
                    <Form.Group className='d-flex flex-row' controlId="formBasicEmail">
                        <MyComponent/>
                    </Form.Group>
                    <div className='text-center'><Button className="button mt-3" href={ROUTES.RESULTS}>Продолжить</Button></div>
                </Form>
            </Container>
        )
}