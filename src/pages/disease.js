import React, {lazy, Suspense, Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import '../App.css'

export default function Main() {
    
    function Test(some){
        return console.log(some)
    }
    
    return (
    
        <div className="d-flex align-items-center flex-column bd-highlight example-parent">
            <div>
                <h1 className="text-center mt-3 mb-2">Коронавирус</h1>
                <h4 className="text-center mt-1 mb-2">НЕ ЯВЛЯЕТСЯ ОКОНЧАТЕЛЬНЫМ ДИАГНОЗОМ. ДЛЯ ПОЛУЧЕНИЯ ПОЛНОЙ КАРТИНЫ ВАМ СЛЕДУЕТ ОБРАТИТЬСЯ К ВАШЕМУ ЛЕЧАЩЕМУ ВРАЧУ</h4>
            </div>

            <div className="border d-flex justify-content-center w-50">
                <div className="border p-2 col-example text-left w-75">Описание</div>
                <div className="border p-2 col-example text-left w-25">Картинка</div>
            </div>
            
            <div className="border p-2 bd-highlight col-example w-50 mt-2">ТЕГИ</div>
            <div className="border p-2 bd-highlight col-example w-50 mt-2">РЕКОМЕНДАЦИИ К ЛЕЧЕНИЮ</div>
            <Link className="d-flex justify-content-end" to={ROUTES.STATISTICS} onClick={({target})=>Test("ЛОЛ")} component={Test("lol")}>Статистика по заболеванию</Link>
       </div>
    );
}
