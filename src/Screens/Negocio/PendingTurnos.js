import React, { useEffect, useState } from "react";
// import axios from "axios";
import "../../css/App.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PendingTurnos() {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "http://3.81.213.175:3000/api/getAppoinments/pending",
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

  function changeState(id){
    axios
      .post(
        "http://3.81.213.175:3000/api/updateAppoinment",
        {
          idTurno: id,
          newStatus: "confirmed"
        }        
      )
      .then((response) => {
        if(response.data = "appointment updated successfully"){
          window.location.reload()
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Ocurrio un error")
      });
  }

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
      <div className="cajaja">
        <label className="tusproximosclientes">
          {" "}
          Turnos pendientes:
        </label>
        <div className="quesardo"></div>
        {turnos.map((turno) => (
          <div key={turno._id} className="cliente1">
            <div className="cheddar">{convertDate(turno.date).date}</div>
            <div className="cheddar">{convertDate(turno.date).hour}</div>
            <div className="cheddar">{turno.nombre}</div>
            <div className="cheddar">{turno.apellido}</div>
            <div className="cheddar">{turno.status}</div>
            <Button className="provologne" onClick={() => {changeState(turno._id)}}>
              Aceptar
            </Button>
          </div>
        ))}
        <Link to={"/principal"}>
          <Button className="anterior">Volver a pantalla principal</Button>
        </Link>
      </div>
    </div>
  );
}
