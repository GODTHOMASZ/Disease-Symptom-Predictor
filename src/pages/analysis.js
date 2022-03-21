import React, {lazy, Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Icon } from '@iconify/react';
import { Button } from 'react-bootstrap';
import * as ROUTES from '../constants/routes';



export default function Main() {
  
  return (
  <div>
     <div>
           <h1 className="text-center mt-3 mb-2">Disease Symptom Predictor</h1>
           <h2 className="text-center mt-1 mb-2">Вам будут заданы вопросы, на которые необходимо ответить "Да" или "Нет"</h2>
      </div>
        
       <div className="border border-primary rounded w-25 p-3 mx-auto mt-5">
        <span className="center">Privet</span>
      </div>
      <div class="d-flex justify-content-around mt-5">
        <div>
        <Icon  icon="akar-icons:thumbs-up" width="200" height="200"  />
        </div>
        <div>
        <Icon  icon="bi:question-lg" width="200" height="200"  />
        </div>
        <div>
        <Icon  icon="akar-icons:thumbs-down" width="200" height="200"  />
        </div>
      </div>
      <div className='text-center '>
      <Button className="button mt-3 btn-lg" href={ROUTES.MAIN}>Отправить</Button>
      </div>
    </div>
  );
}