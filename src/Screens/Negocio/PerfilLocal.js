import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../css/App.css";
import { useHistory } from "react-router-dom";

export default function PerfilLocal() {
  const [nombre, setNombre] = useState("");
  const [dir, setDir] = useState("");
  const [correo, setCor] = useState("");
  const [cel, setCel] = useState("");
  const [pass, setPass] = useState("");
  var token = "";
  const history = useHistory();
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
        setDir(response.data.direccion);
        setCor(response.data.correo);
        setCel(response.data.celular);
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
          direccion: dir,
          correo: correo,
          celular: cel,
          password: pass,
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
        <div className="n">Nombre:</div>
        <input
          className="tb1"
          id="Nombre"
          type="text"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
          placeholder="Nombre"
        />
        <div className="n2">Direccion:</div>
        <input
          className="tb2"
          id="Direccion"
          type="text"
          onChange={(e) => setDir(e.target.value)}
          value={dir}
          placeholder="Direccion"
        />
        <div className="n3">Correo:</div>
        <input
          className="tb3"
          id="Correo"
          type="text"
          onChange={(e) => setCor(e.target.value)}
          value={correo}
          placeholder="Correo"
        />
        <div className="n4">Celular:</div>
        <input
          className="tb4"
          id="Celular"
          type="text"
          onChange={(e) => setCel(e.target.value)}
          value={cel}
          placeholder="Celular"
        />
        <div className="n5">Contraseña:</div>
        <input
          className="tb5"
          id="pass"
          type="password"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          placeholder="Password"
        />
        <button className="tb6" onClick={() => editPerfil()}>
          Cambiar
        </button>
        <div className="textolargo">
          Actualiza los datos de tu local. Configura tu perfil. Proporciona
          informacion para que tus clientes puedan identificarte con mayor
          facilidad. Nunca proporciones la contraseña de tu cuenta de TuFast a
          otro individuo que pregunte por ella.
        </div>
      </div>
    </div>
  );
}
