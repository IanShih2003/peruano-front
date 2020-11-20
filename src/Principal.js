import React, { useEffect, useState } from "react";
import "./css/App.css";
// import {
//   NavLink,
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from "react-router-dom";

import { Button } from "reactstrap";
import personaje from "./image/personaje.png";
import MALETA from "./image/MALETA.png";
import CALENDARIO from "./image/CALENDARIO.png";
import pregunta from "./image/pregunta.png";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Principal() {
  const history = useHistory();
  const [negocios, setNegocios] = useState([]);
  var boton = null;

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
    if (localStorage.getItem("local") === "false") {
      history.push("/perfilCli");
    } else {
      history.push("/perfilLocal");
    }
  }

  function calendarLink() {
    if (localStorage.getItem("local") === "false") {
      history.push("/TurnosCli");
    } else {
      history.push("/TurnosNeg");
    }
  }

  function historialLink() {
    if (localStorage.getItem("local") === "false") {
      history.push("/historialCli");
    } else {
      history.push("/historialNeg");
    }
  }

  function pendingLink() {
    history.push("/pendingTurn");
  }

  if (localStorage.getItem("local") === "true") {
    boton = (
      <Button onClick={() => pendingLink()}>
        <img src={pregunta} className="pregunta"></img>
      </Button>
    );
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
        <div className="cajadeabajo3">
          <Button onClick={perfilLink}>
            <img src={personaje} className="personaje"></img>
          </Button>
          <Button onClick={historialLink}>
            <img src={MALETA} className="MALETA"></img>
          </Button>

          <Button onClick={calendarLink}>
            <img src={CALENDARIO} className="calendario"></img>
          </Button>

          <Button>
            <img src={pregunta} className="pregunta"></img>
          </Button>
          {boton}
        </div>
      </div>
    </div>
  );
}
