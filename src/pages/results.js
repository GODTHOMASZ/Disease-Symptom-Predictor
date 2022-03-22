import React, { Component } from 'react';
import Feedback from '../components/Feedback';

import PossibleDisease from '../components/PossibleDisease';

export default function Main() {
        let i = 0;
        let diseases = [];
        while (i<5)
        {
            diseases[i] = 'говно' + i;
            i++;
        }
        return (
            <div>
                <div>
                    <h1 className='text-center mt-3 mb-2'>Disease Symptom Predictor</h1>
                    <h4 className='text-center mt-1 mb-2'>Ниже предсавлены варианты возможных болезней</h4>
                </div>
            <div>
                <PossibleDisease/>
            </div>
            </div>
            
        );
}
