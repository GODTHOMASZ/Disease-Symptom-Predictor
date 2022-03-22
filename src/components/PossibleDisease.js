import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import * as ROUTES from '../constants/routes';
import Select from 'react-select';

export default function PossibleDisease() {
        

        return (
            <Container className='text-center'>
                <Form>
                    <div className='border w-25'>
                        <h3>Коронавирус</h3>
                        <img src="pic/covid.jpg"></img>
                        <h4>40%</h4>
                    </div>
                </Form>
            </Container>
        )
}