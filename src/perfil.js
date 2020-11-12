import React from "react";
// import axios from "axios";
import "./css/App.css";
import { Button, Input } from "reactstrap";

function perfil() {
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
        <div className="n4">Telefono:</div>
        <Input className="tb4"></Input>
        <div className="n5">Contraseña:</div>
        <Input className="tb5"></Input>
        <div className="textolargo">
          Actualiza tus datos personales. Configura tu perfil, nombre, apellido,
          email, telefono y contraseña. Proporciona informacion a los empleados
          para que identifiquen con mayor facilidad. Nunca proporciones la
          contraseña de tu cuenta de TuFast a otro individuo que pregunte por
          ella.
        </div>
      </div>
    </div>
  );
}
export default perfil;
