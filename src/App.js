import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Principal from "./principal";
import { Link } from "react-router-dom";
import registrarse from "./registrarse";
import index from "./index";
import style from "./style.css";
import inicio from "./inicio";
import turnos from "./turnos";
import cal from "./cal";
import { register } from "./serviceWorker";
import prueba from "./prueba";
import cliente from "./cliente";
import perfil from './perfil';
import turno from "./turno";
import jaja from "./jaja";

// import turnosform from "./turnosform"

const Login = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState('');
  const [correo, setEmail] = useState("");
  const [password, setPass] = useState('');
  const [dni, setDNI] = useState("");

  const handlerFunc = (func) => {
    return ({ target }) => func(target.value);
  }

  const handleNombre = handlerFunc(setNombre);
  const handleApellido = handlerFunc(setApellido);
  const handleDNI = handlerFunc(setDNI);
  const handleCorreo = handlerFunc(setEmail);
  const handlePass = handlerFunc(setPass);

  const Registrousuario = async () => {
    console.log("hola");
    const respuesta = await axios(configuracion);
    console.log(respuesta.data)
    if (respuesta.data.status === "Employeed Saved") {
      console.log("funciona");
    }
  };

  const configuracion = {
    url: "http://34.199.96.91:4000/turnos",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      Nombre: nombre,
      Apellido: apellido,
      Correo: correo,
      password: password,
      DNI: dni,
    },
  };

  return (
    <div className="contenedorgigante">
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
                value ={nombre}
              />
            </div>
            <div>
              <input
                id="apellido"
                placeholder="apellido"
                onChange={handleApellido}
                className="queso"
                type="text"
                value ={apellido}
              />
            </div>

            <div>
              <input
                id="correo"
                placeholder="Email"
                onChange={handleCorreo}
                className="queso"
                type="text"
                value = {correo}
              />
            </div>
            <div>
              <input
                id="contra"
                placeholder="Contraseña"
                onChange={handlePass}
                className="queso"
                type="password"
                value = {password}
              />
            </div>
            <div>
              <input
                id="dni"
                placeholder="DNI"
                onChange={handleDNI}
                className="queso"
                type="text"
                value = {dni}
              />
            </div>
            <div className="xdrow2">
            <Link to={"/principal"}>
            <button className="btnlogin" onClick={Registrousuario}>
              Ingresar
            </button>
            </Link>  
            </div>
          </div>
        </div>
      </div>
    </div>
)};


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/principal" exact component={Principal} />
          <Route path="/Login" exact component={Login} />
          <Route path="/registrarse" exact component={registrarse} />
          <Route path="/" exact component={inicio} />
          <Route path="/turnos" exact component={turnos} />
          <Route path="/cal" exact component={cal} />
          <Route path="/cliente" exact component={cliente} />
          <Route path="/perfil" exact component={perfil} />
          <Route path="/turno" exact component={turno} />
          <Route path="/jaja" exact component={jaja} />

    
          {/* <Route path="/turnosform" exact component={turnosform} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
