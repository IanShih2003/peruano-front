import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import registrarse from "./registrarse";
import inicio from "./inicio";
import TurnosNeg from "./TurnosNeg";
import perfil from "./perfil";
import turno from "./turno";
import RegistroLocal from "./RegistroLocal";
import RegistroCliente from "./RegistroCliente";

import Login from "./login";
import SacarTurno from "./SacarTurno";
import TurnosCli from "./TurnosCli"
import Principal from "./Principal";

function App() {
  return (
    <Router>
      <Route path="/login" exact component={Login} />
      <Route path="/registrarse" exact component={registrarse} />
      <Route path="/registroLocal" exact component={RegistroLocal} />
      <Route path="/registroCliente" exact component={RegistroCliente} />
      <Route path="/" exact component={inicio} />
      <Route path="/principal" exact component={Principal} />
      <Route path="/turnoscli" exact component={TurnosCli} />
      <Route path="/turnosneg" exact component={TurnosNeg} />
      <Route path="/perfil" exact component={perfil} />
      <Route path="/turno" exact component={turno} />
      <Route path="/sacarturno" exact component={SacarTurno} />

    </Router>
  );
}

export default App;
