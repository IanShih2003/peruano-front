import React from "react";
import "./css/App.css";
// import {
//   NavLink,
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from "react-router-dom";

import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import PELUQUERO from "./image/PELUQUERO.png";
import COMIDA from "./image/COMIDA.png";
import personaje from "./image/personaje.png";
import MALETA from "./image/MALETA.png";
import LUPA from "./image/LUPA.png";
import CALENDARIO from "./image/CALENDARIO.png";
import pregunta from "./image/pregunta.png";
import axios from "axios";
const configuracion = {
  url: "http://54.162.46.22:3000/turnos/gol",
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  data: { Fecha: "2020-8-26", Hora: "5:17:23", Cant_per: 2, ESTADO: 0 },
};

const sacoturno = async () => {
  alert("Turno Creado")
  console.log("hola");
  const respuesta = await axios(configuracion);
  console.log(respuesta.data);

  if (respuesta.data.status === "Employeed Saved") {
  }
};

function turnos() {
  const negocios = [
    { name: "peluqueria1", id: 1, img: PELUQUERO },
    { name: "restaurante2", id: 2, img: COMIDA },
    { name: "restaurante3", id: 3, img: COMIDA },
    { name: "restaurante4", id: 4, img: COMIDA },
    { name: "restaurante5", id: 5, img: COMIDA },
    { name: "restaurante6", id: 6, img: COMIDA },
    { name: "restaurante7", id: 7, img: COMIDA },
    { name: "restaurante8", id: 8, img: COMIDA },
    
  ];
  console.log(negocios);
  return (
    <div className="contenedorgigante2">
      <div className="header"></div>
      <div className="cajagorda"></div>
      <div className="lacajadelosturnos">
        <div className="textolugar">Lugares mas cercanos:</div>
        <div className="contenedor-negocios">
          {negocios.map((negocio) => (
            <div key={negocio.id} className="cajaverde">
                  <Link to={"/cal"}>
                  <Button onClick={sacoturno} className="botonsacar1">
                {" "}
                Sacar turno
              </Button>
            </Link>
              
              <img src={negocio.img} className="PELUQUERO"></img>
            </div>
          ))}
        </div>
      </div>
      <div className="formcontainer"></div>
      <div className="cajadeabajo2">
      <Link to={"cliente"}>
        <img src={personaje} className="personaje"></img>
        </Link>
        <Link to={"turno"}>
        <img src={MALETA} className="MALETA"></img>
        </Link>
        <img src={LUPA} className="lupa"></img>
        <Link to={"cal"}>
        <img src={CALENDARIO} className="calendario"></img>

        </Link>
      
        <Link to={"perfil"}>
        <img src={pregunta} className="pregunta"></img>
        </Link>
      </div>
    </div>
  );
}

export default turnos;