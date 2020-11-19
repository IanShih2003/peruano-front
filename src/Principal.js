import React, { useEffect, useState } from "react";
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
import { useHistory } from "react-router-dom";

export default function Principal() {
  const history = useHistory();
  const [negocios, setNegocios] = useState([]);

  useEffect(() => {
    axios
      .post("http://3.81.213.175:3000/api/getlocals", {})
      .then((response) => {
        setNegocios(response.data);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert(error.response.data);
        }
      });
  }, []);

  function sacoturno(id) {
    history.push({
      pathname: "/sacarTurno",
      state: {
        idLocal: id,
      },
    });
  }

  function perfilLink() {
    history.push("/perfil");
  }

  function clientLink() {
    history.push("/cliente");
  }
  function calendarLink() {
    if (localStorage.getItem("local") === "false") {
      history.push("/TurnosCli");
    } else {
      history.push("/TurnosNeg");
    }
  }
  function turnoLink() {
    history.push("/turno");
  }

  return (
    <div className="contenedorgigante">
      <div className="header"></div>
      <div className="lacajadelosturnos">
        <div className="textolugar">Lugares mas cercanos:</div>
        <div className="contenedor-negocios">
          {negocios.map((negocio) => (
            <div key={negocio._id} className="cajaverde">
              <div className="pastrami">{negocio.nombre}</div>
              <Button
                onClick={() => sacoturno(negocio._id)}
                className="botonsacar1"
              >
                {" "}
                Sacar turno
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="cajadeabajo2">
        <Button onClick={perfilLink}>
          <img src={personaje} className="personaje"></img>
        </Button>
        <Button>
          <img src={MALETA} className="MALETA"></img>
        </Button>

        <Button onClick={calendarLink}>
          <img src={CALENDARIO} className="calendario"></img>
        </Button>

        <Button>
          <img src={pregunta} className="pregunta"></img>
        </Button>
      </div>
    </div>
  );
}

