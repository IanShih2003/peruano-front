import React, { useState, useEffect } from "react";
// import axios from "axios";
import "../../css/App.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function PerfilCliente() {
  const history = useHistory();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setEmail] = useState("");
  const [password, setPass] = useState("");
  var token = "";

  useEffect(() => {
    token = localStorage.getItem("token");

    axios
      .post(
        "http://3.81.213.175:3000/api/getInfo",
        {},
        {
          headers: {
            token: token,
          },
        }
      )
      .then((response) => {
        setNombre(response.data.nombre);
        setApellido(response.data.apellido);
        setEmail(response.data.correo);
        setPass(response.data.password);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function editPerfil() {
    token = localStorage.getItem("token");
    axios
      .post(
        "http://3.81.213.175:3000/api/editprof",
        {
          nombre: nombre,
          apellido: apellido,
          correo: correo,
          password: password,
        },
        {
          headers: {
            token: token,
          },
        }
      )
      .then((response) => {
        if (response.data === "OK") {
          var result = window.confirm("Datos actualizados");
          if (result === true) {
            history.push("/Principal");
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="contenedorgigante">
      <div className="header"></div>
      <div className="lacuartacaja">
        <input
          className="tb1"
          id="Nombre"
          type="text"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
          placeholder="Nombre"
        />
        <div className="n2">Apellido:</div>
        <input
          className="tb2"
          id="Direccion"
          type="text"
          onChange={(e) => setApellido(e.target.value)}
          value={apellido}
          placeholder="Direccion"
        />
        <div className="n3">Correo:</div>
        <input
          className="tb3"
          id="Correo"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={correo}
          placeholder="Correo"
        />
        <div className="n4">Contraseña:</div>
        <input
          className="tb4"
          id="pass"
          type="password"
          onChange={(e) => setPass(e.target.value)}
          value={password}
          placeholder="Password"
        />
        <button className="tb5" onClick={() => editPerfil()}>Cambiar</button>
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
