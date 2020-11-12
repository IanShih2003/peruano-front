import React, { useState } from "react";
import axios from "axios";
import "./css/App.css";
import "./css/style.css"
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Link } from "react-router-dom";
import Alert from "reactstrap/lib/Alert";
import { useHistory } from "react-router-dom";

export default function RegistroLocal() {
  const history = useHistory();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [dni, setDNI] = useState("");

  const handlerFunc = (func) => {
    return ({ target }) => func(target.value);
  };

  const handleNombre = handlerFunc(setNombre);
  const handleApellido = handlerFunc(setApellido);
  const handleDNI = handlerFunc(setDNI);
  const handleCorreo = handlerFunc(setEmail);
  const handlePass = handlerFunc(setPass);

  const Registrousuario = async () => {
    if (
      nombre === "" ||
      apellido === "" ||
      correo === "" ||
      password === "" ||
      dni === ""
    ) {
      return alert("Un parametro esta vacio");
    }
    axios
      .post("http://3.81.213.175:3000/api/register", {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        password: password,
        dni: dni,
        local: false,
      })
      .then((response) => {
        history.push("/turnos");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert(error.response.data);
        }
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
            <div id="formulario">
              <input
                id="nombre"
                placeholder="Nombre"
                onChange={handleNombre}
                className="queso"
                type="text"
                value={nombre}
              />
            </div>
            <div>
              <input
                id="apellido"
                placeholder="apellido"
                onChange={handleApellido}
                className="queso"
                type="text"
                value={apellido}
              />
            </div>

            <div>
              <input
                id="correo"
                placeholder="Email"
                onChange={handleCorreo}
                className="queso"
                type="text"
                value={correo}
              />
            </div>
            <div>
              <input
                id="contra"
                placeholder="Contraseña"
                onChange={handlePass}
                className="queso"
                type="password"
                value={password}
              />
            </div>
            <div>
              <input
                id="dni"
                placeholder="DNI"
                onChange={handleDNI}
                className="queso"
                type="text"
                value={dni}
              />
            </div>
            <div className="xdrow2">
              <button className="btnlogin" onClick={Registrousuario}>
                Ingresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
