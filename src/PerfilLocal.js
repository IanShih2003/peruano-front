import React from "react";
// import axios from "axios";
import "./css/App.css";
import { Input } from "reactstrap";

export default function PerfilLocal() {
  return (
    <div className="contenedorgigante">
      <div className="header"></div>
      <div className="lacuartacaja">
        <div className="n">Nombre:</div>
        <Input className="tb1"></Input>
        <div className="n2">Apellido:</div>
        <Input className="tb2"></Input>
        <div className="n3">Email:</div>
        <Input className="tb3"></Input> 
        <div className="n4">Contraseña:</div>
        <Input className="tb4"></Input>
        <div className="textolargo">
          Actualiza los datos de tu local. Configura tu perfil. Proporciona informacion para que tus clientes puedan identificarte con mayor facilidad. Nunca proporciones la
          contraseña de tu cuenta de TuFast a otro individuo que pregunte por
          ella.
        </div>
      </div>
    </div>
  );
}
