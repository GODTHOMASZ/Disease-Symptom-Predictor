import React, { useState, Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';



export default class StatisticsAPI extends Component {
        
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://disease-info-api.herokuapp.com/diseases/pneumonia.json")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.disease
                });
            },
        )
    }

    render() {
        const {isLoaded, items} = this.state;
        if (!isLoaded) {return <p> Загрузка </p>}
        else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.name}>{item.facts}</li>
                        ))}
                </ul>
            )
        }
    }
}

