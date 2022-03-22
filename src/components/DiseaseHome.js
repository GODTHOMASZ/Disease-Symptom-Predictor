import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import * as ROUTES from '../constants/routes';
import Select from 'react-select';

export default function DiseaseHome() {
        const [heightInp, setHeightInp] = useState('');
        const [widthInp, setWidthInp] = useState('');
        const [sexInp, setSexInp] = useState(null);
        const [ageInp, setAgeInp] = useState('');

        const options = [
            { value: 'men', label: 'Муж.', color: '#00B8D9', isFixed: true },
            { value: 'women', label: 'Жен.', color: '#0052CC' },
          ];
          
        const isEmpty = heightInp === '' || widthInp === '' || sexInp === null || ageInp === '';

        return (
            <Container className='text-center'>
                <Form>
                    <h4 className='text-center mt-1 mb-2'> <p>Введите свои данные, чтобы продолжить</p></h4>
                    <Form.Group className='w-50 d-flex d-sm-inline-flex' controlId="formBasicEmail">
                        <Form.Control className='text-center w-25' type="height" placeholder="Рост" value={heightInp} onChange={({target})=>setHeightInp(target.value)}/>
                        <Form.Control className='text-center w-25' type="weight" placeholder="Вес" value={widthInp} onChange={({target})=>setWidthInp(target.value)}/>
                        <Select 
                            options={options}
                            defaultValue={sexInp}
                            className="w-25 rounded mx-auto"
                            onChange={setSexInp}
                        />
                        <Form.Control className='text-center w-25' type="age" placeholder="Возраст" value={ageInp} onChange={({target})=>setAgeInp(target.value)}/>
                    </Form.Group>
                    <div className='text-center'><Button disabled={isEmpty} className="button mt-3" href={ROUTES.ANALYSIS}>Продолжить</Button></div>
                </Form>
            </Container>
        )
}