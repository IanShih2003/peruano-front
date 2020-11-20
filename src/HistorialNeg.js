import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./css/App.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function HistorialNeg() {
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

  var negocios = [
    {
      _id: 1,
      nombre: "Santiago",
    },
    {
      _id: 2,
      nombre: "Santiago",
    },
    {
      _id: 3,
      nombre: "Santiago",
    },
  ];

  return (
    <div className="contenedorgigante">
      <div className="header"></div>
      <div className="cajaja">
        <label className="tusproximosclientes">
          {" "}
          Tus proximos clientes son:
        </label>
        <div className="quesardo"></div>
        {turnos.map((turno) => (
          <div key={turno._id} className="cliente1">
            <div className="cheddar">{convertDate(turno.date).date}</div>
            <div className="cheddar">{convertDate(turno.date).hour}</div>
            <div className="cheddar">{turno.nombre}</div>
            <div className="cheddar">{turno.apellido}</div>
            <div className="cheddar">{turno.status}</div>
          </div>
        ))}
        <Link to={"/"}>
          <Button className="anterior">Clientes anteriores</Button>
        </Link>
      </div>
    </div>
  );
}
