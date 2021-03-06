import React, {useState, useEffect, lazy, Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import AnalysisComp from '../components/AnalysisComp';
import PropTypes from 'prop-types';



export default function Analysis(
  {
    heightInp,
    widthInp,
    sexInp,
    ageInp,
  }
) {
  
  
  return (
  <div>
     <div>
           <h1 className="text-center mt-3 mb-2">Disease Symptom Predictor</h1>
           <h4 className="text-center mt-1 mb-2">Выберите симптомы, которые сейчас у вас, из списка ниже</h4>
      </div>
        
       <div className="">
          <AnalysisComp />
      </div>
      
    </div>
  );
}


Analysis.propTypes = {
  heightInp: PropTypes.number.isRequired,
  widthInp: PropTypes.number.isRequired,
  sexInp: PropTypes.string.isRequired,
  ageInp: PropTypes.number.isRequired,
};