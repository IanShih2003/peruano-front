import React from 'react';
import axios from "axios";
import './App.css'; 
import { Link } from "react-router-dom";
import { Button, Input } from 'reactstrap';

function jaja(){
    return(
        <div className="contenedorgigante">
        <div className="header"></div>
        <div className="cajitafeliz2">
       
        <input className="queso" placeholder="Nombre"></input>
        <input className="queso"placeholder="Direccion"></input>
        <input className="queso"placeholder="Local"></input>
        <input className="queso"placeholder="Email"></input>
        <input className="queso"placeholder="Celular"></input>
        <input className="queso"placeholder="Contraseña"></input>
        <div>
            <Link to={"/principal"}>
            <button className="btnloginja">Registrarse </button>
            </Link>
       
        </div>
       
       </div>
      
          </div>
          
    );
}
export default jaja;