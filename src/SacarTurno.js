import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/App.css";
import "./css/style.css";
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Link } from "react-router-dom";
import Alert from "reactstrap/lib/Alert";
import { useHistory, useLocation } from "react-router-dom";

function isNumeric(str) {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseInt(str))
  ); // ...and ensure strings of whitespace fail
}

export default function SacarTurno() {
  const location = useLocation();
  const history = useHistory();

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMin] = useState("");

  const sacoTurno = async () => {
    // setYear(document.getElementById("year").value);
    // setMonth(document.getElementById("mes").value)
    // setDay(document.getElementById("dia").value)
    var idLocal = location.state.idLocal;
    var token = localStorage.getItem("token");
    console.log(token);
    var hora = 0;
    var minuto = 0;
    var año = parseInt(year);
    var mes = parseInt(month);
    var dia = parseInt(day);

    if (
      year === "" ||
      month === "" ||
      day === "" ||
      hour === "" ||
      minute === ""
    ) {
      return alert("Falta un campo");
    }
    if (typeof hour === "string" || typeof minute === "string") {
      if (isNumeric(hour) === false || isNumeric(minute) === false) {
        return alert("Horas y minutos tiene que ser un numero");
      } else {
        hora = parseInt(hour);
        minuto = parseInt(minute);
      }
    } else {
      hora = hour;
      minuto = minute;
    }

    setHour(hora);
    setMin(minuto);
    if (hour < 0 || hour > 23) {
      return alert("Mal formato de hora");
    }
    if (minute < 0 || minute > 59) {
      return alert("Mal formato de hora");
    }

    axios
      .post(
        "http://3.81.213.175:3000/api/newAppointment",
        {
          year: año,
          month: mes,
          day: dia,
          hour: hora,
          minute: minuto,
          idLocal: idLocal,
        },
        {
          headers: {
            token: token,
          },
        }
      )
      .then((response) => {
        if(response.status === 200){
          var result = window.confirm("Turno creado")
          if(result === true){
            history.push("/Principal")
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="contenedorgigante">
      <div className="tituloprincipal"> TuFast</div>
      <div className="header"></div>
      <div className="cajitafeliz2">
        <div className="formcontainer">
          <div className="App"></div>

          <div style={{ textAlign: "center" }}>
            <div>
              <select
                name="Año"
                id="year"
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="">Año</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>
            <div>
              <select
                name="Mes"
                id="mes"
                onChange={(e) => setMonth(e.target.value)}
              >
                <option value="">Mes</option>
                <option value="1">Enero</option>
                <option value="2">Febrero</option>
                <option value="3">Marzo</option>
                <option value="4">Abril</option>
                <option value="5">Mayo</option>
                <option value="6">Junio</option>
                <option value="7">Julio</option>
                <option value="8">Agosto</option>
                <option value="9">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
              </select>
            </div>
            <div>
              <select
                name="Dia"
                id="dia"
                onChange={(e) => setDay(e.target.value)}
              >
                <option value="">Dia</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
            </div>
            <div>
              <input
                id="Hora"
                placeholder="Hora"
                className="queso"
                type="text"
                onChange={(e) => setHour(e.target.value)}
                value={hour}
              />
            </div>
            <div>
              <input
                id="Minuto"
                placeholder="Minuto"
                className="queso"
                type="text"
                onChange={(e) => setMin(e.target.value)}
                value={minute}
              />
            </div>
            <div className="xdrow2">
              <button className="btnlogin" onClick={() => sacoTurno()}>
                Ingresar
              </button>
            </div>
            <div>Horas y minutos en formato 24hrs</div>
          </div>
        </div>
      </div>
    </div>
  );
}
