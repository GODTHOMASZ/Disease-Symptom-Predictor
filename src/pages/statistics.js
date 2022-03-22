import React, {lazy, Suspense, Component } from 'react';
import '../App.css'

import StatPieChart from '../components/StatPieChart';

export default function Main() {
    
    return (
    
        <div>
        <div>
            <h1 className="text-center mt-3 mb-2">Disease Symptom Predictor</h1>
            <h4 className="text-center mt-1 mb-2">Статистика по выбранному заболеванию</h4>
        </div>
           
        <div className="">
            <StatPieChart/>
        </div>
         
       </div>
    );
}
