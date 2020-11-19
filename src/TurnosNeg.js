import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./css/App.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";



export default function TurnosNeg() {
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

  function convertDate(d){
    var resultado = {}
    var arr = d.split("T")
    var arr2 = arr[1].split(".")
    arr.push(arr2[0])  
    arr.splice(1, 1)
    resultado.date = arr[0]
    resultado.hour = arr[1]
    return resultado
  }

  return (
    <div className="contenedorgigante">
      <div className="header"></div>
      <div className="cajaja"></div>
      <label className="tusproximosclientes"> Tus proximos clientes son:</label>
      {turnos.map((turno) => (
        <div key={turno._id} className="client1">
          <div className="salame">{convertDate(turno.date).date}</div>
          <div className="salamin">{convertDate(turno.date).hour}</div>
          <div className="raton2">{turno.nombre}</div>
          <div className="flechita2"></div>
          <div className="carlitos">{turno.apellido}</div>
        </div>
      ))}
      <Link to={"/"}>
        <Button className="anterior">Clientes anteriores</Button>
      </Link>
    </div>
  );
}
