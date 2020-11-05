/*
const dia = el dia actual
const hora = la hora actual
*/
import React from 'react';
import axios from "axios";
import './App.css'; 
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
function turno(){
    const configuracion = {
        url: "http://34.199.96.91:4000/",
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: {
     
        },
      };
    
    return(
        <div className="contenedorgigante">
            <div className="header"></div>
            <div className="cajaja"></div>
            <label className="tusproximosclientes"> Tus proximos turnos son:</label>
            <div className="cliente1">
            <div className="catorce2">14:00hs</div>
                <div className="raton2"> Mañana</div>
                <div className="flechita2"></div>
                <div className="carlitos">Dentista</div>
                <div className="flechita4"></div>
                <div className="carlitos2">Av. Corrientes 2450</div>
            </div>
            <div className="cliente2">
                <div className="catorce">15:00hs</div>
                <div className="raton"> Jueves</div>
                <div className="flechita"></div>
                <div className="carlitos">Peluqueria</div>
                <div className="flechita3"></div>
                <div className="carlitos2">Av. Cabildo 2665 </div>
            </div>
            <Link to={"/"}>
            <Button className="anterior">Clientes anteriores</Button>
            </Link>
        </div>
    );
}
export default turno;