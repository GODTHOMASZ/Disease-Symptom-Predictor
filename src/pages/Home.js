import React, { Component } from 'react';
import DiseaseHome from '../components/DiseaseHome';
import "./Styles.css"
import { Container, Form } from 'react-bootstrap';

export default class Home extends Component {
    render() {
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
}