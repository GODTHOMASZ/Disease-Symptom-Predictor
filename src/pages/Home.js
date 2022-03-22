import React, { Component } from 'react';
import DiseaseHome from '../components/DiseaseHome';
import { Container, Form } from 'react-bootstrap';

export default function Home() {

        return (
            <>
                <Container>
                    <h1 className="text-center mt-3 mb-2">Disease Symptom Predictor</h1>
                    <DiseaseHome/>
                </Container>
                {/* <CarouselBox/> */}
                {/* <CardDeck/> */}
            </>
        )
    }
