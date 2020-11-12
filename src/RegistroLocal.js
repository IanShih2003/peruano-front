import React, { useState } from "react";
import axios from "axios";
import "./css/App.css";
// import {
//   NavLink,
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   useHistory,
// } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RegistroLocal() {
  const [nombre, setNombre] = useState("");
  const [dir, setDir] = useState("");
  const [correo, setCor] = useState("");
  const [cel, setCel] = useState();
  const [pass, setPass] = useState("");
  //Domingo Apertura Cierre
  const [horaApDom, setHoraApDom] = useState("");
  const [minApDom, setMinApDom] = useState("");
  const [horaCiDom, setHoraCiDom] = useState("");
  const [minCiDom, setMinCiDom] = useState("");

  //Lunes Apertura Cierre
  const [horaApLun, setHoraApLun] = useState("");
  const [minApLun, setMinApLun] = useState("");
  const [horaCiLun, setHoraCiLun] = useState("");
  const [minCiLun, setMinCiLun] = useState("");
  
  //Martes Apertura Cierre
  const [horaApMar, setHoraApMar] = useState("");
  const [minApMar, setMinApMar] = useState("");
  const [horaCiMar, setHoraCiMar] = useState("");
  const [minCiMar, setMinCiMar] = useState("");

  //Miercoles Apertura Cierre
  const [horaApMie, setHoraApMie] = useState("");
  const [minApMie, setMinApMie] = useState("");
  const [horaCiMie, setHoraCiMie] = useState("");
  const [minCiMie, setMinCiMie] = useState("");

  //Jueves Apertura Cierre
  const [horaApJue, setHoraApJue] = useState("");
  const [minApJue, setMinApJue] = useState("");
  const [horaCiJue, setHoraCiJue] = useState("");
  const [minCiJue, setMinCiJue] = useState("");

  //Viernes Apertura Cierre
  const [horaApVie, setHoraApVie] = useState("");
  const [minApVie, setMinApVie] = useState("");
  const [horaCiVie, setHoraCiVie] = useState("");
  const [minCiVie, setMinCiVie] = useState("");

  //Sabado Apertura Cierre
  const [horaApSab, setHoraApSab] = useState("");
  const [minApSab, setMinApSab] = useState("");
  const [horaCiSab, setHoraCiSab] = useState("");
  const [minCiSab, setMinCiSab] = useState("");

  const handlerFunc = (func) => {
    return ({ target }) => func(target.value);
  };

  const handleNombre = handlerFunc(setNombre);
  const handleDir = handlerFunc(setDir);
  const handleCorreo = handlerFunc(setCor);
  const handleCel = handlerFunc(setCel);
  const handlePass = handlerFunc(setPass);
  // const handleHorarios = handlerFunc(setHor)

  function hour(h, m){
    return h + ":" + m
  }

  const Registrousuario = async () => {
    console.log("hola");
    var horariosJson = {}
    horariosJson.domingo = [
      hour(horaApDom, minApDom), hour(horaCiDom, minCiDom)
    ]
    horariosJson.lunes = [
      hour(horaApLun, minApLun), hour(horaCiLun, minCiLun)
    ]
    horariosJson.martes = [
      hour(horaApMar, minApMar), hour(horaCiMar, minCiMar)
    ]
    horariosJson.miercoles = [
      hour(horaApMie, minApMie), hour(horaCiMie, minCiMie)
    ]
    horariosJson.jueves = [
      hour(horaApJue, minApJue), hour(horaCiJue, minCiJue)
    ]
    horariosJson.viernes = [
      hour(horaApVie, minApVie), hour(horaCiVie, minCiVie)
    ]
    horariosJson.sabado = [
      hour(horaApSab, minApSab), hour(horaCiSab, minCiSab)
    ]
    axios
      .post("http://3.81.213.175:3000/api/register", {
        nombre: nombre,
        direccion: dir,
        correo: correo,
        celular: cel,
        password: pass,
        horarios: horariosJson,
        local: true,
      })
      .then((response) => {
        // history.push("/turnos");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert(error.response.data);
        }
      });
  };  

  return (
    <div className="contenedorgigante">
      <div className="tituloprincipal">TuFast</div>
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
                id="direccion"
                placeholder="Direccion"
                onChange={handleDir}
                className="queso"
                type="text"
                value={dir}
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
                id="cel"
                placeholder="Numero de Telefono"
                onChange={handleCel}
                className="queso"
                type="text"
                value={cel}
              />
            </div>
            <div>
              <input
                id="dni"
                placeholder="Contraseña"
                onChange={handlePass}
                className="queso"
                type="password"
                value={pass}
              />
            </div>

            <div className="panceta">
              <table className="pastron">
                <tr>
                  <th>Horarios</th>
                  <th>Apertura</th>
                  <th>Cierre</th>
                </tr>
                <tr>
                  <td>Domingo</td>
                  <td>
                    <input
                      id="horaAperturaDomingo"
                      placeholder="Hora"
                      type="text"
                      className="nisman"
                      onChange={(e) => setHoraApDom(e.target.value)}
                    />
                    :
                    <input
                      id="minutosAperturaDomingo"
                      placeholder="Minutos"
                      type="text"
                      className="jamoncrudo"
                      onChange={(e) => setMinApDom(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      id="horaCierreDomingo"
                      placeholder="Hora"
                      type="text"
                      className="nisman"
                      onChange={(e) => setHoraCiDom(e.target.value)}
                    />
                    :
                    <input
                      id="minutosCierreDomingo"
                      placeholder="Minutos"
                      type="text"
                      className="jamoncrudo"
                      onChange={(e) => setMinCiDom(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Lunes</td>
                  <td>
                    <input
                      id="horaAperturaLunes"
                      placeholder="Hora"
                      type="text"
                      className="nisman"
                      onChange={(e) => setHoraApLun(e.target.value)}
                    />
                    :
                    <input
                      id="minutosAperturaLunes"
                      placeholder="Minutos"
                      type="text"
                      className="jamoncrudo"
                      onChange={(e) => setMinApLun(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      id="horaCierreLunes"
                      placeholder="Hora"
                      type="text"
                      className="nisman"
                      onChange={(e) => setHoraCiLun(e.target.value)}
                    />
                    :
                    <input
                      id="minutosCierreLunes"
                      placeholder="Minutos"
                      type="text"
                      className="jamoncrudo"
                      onChange={(e) => setMinCiLun(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Martes</td>
                  <td>
                    <input
                      id="horaAperturaMartes"
                      placeholder="Hora"
                      type="text"
                      className="nisman"
                      onChange={(e) => setHoraApMar(e.target.value)}
                    />
                    :
                    <input
                      id="minutosAperturaMartes"
                      placeholder="Minutos"
                      type="text"
                      className="jamoncrudo"
                      onChange={(e) => setMinApMar(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      id="horaCierreMartes"
                      placeholder="Hora"
                      type="text"
                      className="nisman"
                      onChange={(e) => setHoraCiMar(e.target.value)}
                    />
                    :
                    <input
                      id="minutosCierreMartes"
                      placeholder="Minutos"
                      type="text"
                      className="jamoncrudo"
                      onChange={(e) => setMinCiMar(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Miércoles</td>
                  <td>
                    <input
                      id="horaAperturaMiercoles"
                      placeholder="Hora"
                      type="text"
                      className="nisman"
                      onChange={(e) => setHoraApMie(e.target.value)}
                    />
                    :
                    <input
                      id="minutosAperturaMiercoles"
                      placeholder="Minutos"
                      type="text"
                      className="jamoncrudo"
                      onChange={(e) => setMinApMie(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      id="horaCierreMiercoles"
                      placeholder="Hora"
                      type="text"
                      className="nisman"
                      onChange={(e) => setHoraCiMie(e.target.value)}
                    />
                    :
                    <input
                      id="minutosCierreMiercoles"
                      placeholder="Minutos"
                      type="text"
                      className="jamoncrudo"
                      onChange={(e) => setMinCiMie(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Jueves</td>
                  <td>
                    <input
                      id="horaAperturaJueves"
                      placeholder="Hora"
                      type="text"
                      className="nisman"
                      onChange={(e) => setHoraApJue(e.target.value)}
                    />
                    :
                    <input
                      id="minutosAperturaJueves"
                      placeholder="Minutos"
                      type="text"
                      className="jamoncrudo"
                      onChange={(e) => setMinApJue(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      id="horaCierreJueves"
                      placeholder="Hora"
                      type="text"
                      className="nisman"
                      onChange={(e) => setHoraCiJue(e.target.value)}
                    />
                    :
                    <input
                      id="minutosCierreJueves"
                      placeholder="Minutos"
                      type="text"
                      className="jamoncrudo"
                      onChange={(e) => setMinCiJue(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Viernes</td>
                  <td>
                    <input
                      id="horaAperturaViernes"
                      placeholder="Hora"
                      type="text"
                      className="nisman"
                      onChange={(e) => setHoraApVie(e.target.value)}
                    />
                    :
                    <input
                      id="minutosAperturaViernes"
                      placeholder="Minutos"
                      type="text"
                      className="jamoncrudo"
                      onChange={(e) => setMinApVie(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      id="horaCierreViernes"
                      placeholder="Hora"
                      type="text"
                      className="nisman"
                      onChange={(e) => setHoraCiVie(e.target.value)}
                    />
                    :
                    <input
                      id="minutosCierreViernes"
                      placeholder="Minutos"
                      type="text"
                      className="jamoncrudo"
                      onChange={(e) => setMinCiVie(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Sábado</td>
                  <td>
                    <input
                      id="horaAperturaSabado"
                      placeholder="Hora"
                      type="text"
                      className="nisman"
                      onChange={(e) => setHoraApSab(e.target.value)}
                    />
                    :
                    <input
                      id="minutosAperturaSabado"
                      placeholder="Minutos"
                      type="text"
                      className="jamoncrudo"
                      onChange={(e) => setMinApSab(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      id="horaCierreSabado"
                      placeholder="Hora"
                      type="text"
                      className="nisman"
                      onChange={(e) => setHoraCiSab(e.target.value)}
                    />
                    :
                    <input
                      id="minutosCierreSabado"
                      placeholder="Minutos"
                      type="text"
                      className="jamoncrudo"
                      onChange={(e) => setMinCiSab(e.target.value)}
                    />
                  </td>
                </tr>
              </table>
            </div>

            <div className="xdrow2">
              <Link to={"/turnos"}>
                <button className="btnlogin" onClick={Registrousuario}>
                  Ingresar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
