import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./css/App.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function TurnosCli() {
  const [turnos, setTurnos] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "http://3.81.213.175:3000/api/getAppoinments",
        {},
        {
          headers: {
            token: token,
          },
        }
      )
      .then((response) => {
        if (response.data.length === 0) {
          alert("No hay turnos");
        }
        setTurnos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function convertDate(d) {
    var resultado = {};
    var arr = d.split("T");
    var arr2 = arr[1].split(".");
    arr.push(arr2[0]);
    arr.splice(1, 1);
    var hour = arr[1].substring(0, arr[1].length - 3);
    resultado.date = arr[0];
    resultado.hour = hour;
    return resultado;
  }

  return (
    <div className="contenedorgigante">
      <div className="header"></div>
      <div className="cajaja"></div>
      <label className="tusproximosclientes"> Tus proximos turnos son:</label>
      <div className="contenedor-negocios">
        {turnos.map((turno) => (
          <div key={turno._id} className="client1">
            <div className="lacajadelpayaso" />
            <div>{convertDate(turno.date).date}</div>
            <div>{convertDate(turno.date).hour}</div>
            <div>{turno.nombre}</div>
            <div>{turno.correo}</div>
            <div>{turno.direccion}</div>
            <div>{turno.celular}</div>
            <div>{turno.status}</div>
          </div>
        ))}
      </div>

      <Link to={"/"}>
        <Button className="anterior">Turnos Anteriores</Button>
      </Link>
    </div>
  );
}
