import React, {useState, useEffect, lazy, Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Icon } from '@iconify/react';
import { Button } from 'react-bootstrap';
import * as ROUTES from '../constants/routes';
import AnalysisComp from '../components/AnalysisComp';



export default function Main() {
  
  
  
  return (
  <div>
     <div>
           <h1 className="text-center mt-3 mb-2">Disease Symptom Predictor</h1>
           <h4 className="text-center mt-1 mb-2">Выберите симптомы, которые сейчас у вас, из списка ниже</h4>
      </div>
        
       <div className="">
          <AnalysisComp/>
      </div>
      
    </div>
  );
}