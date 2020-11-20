import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import registrarse from "./registrarse";
import inicio from "./inicio";
import TurnosNeg from "./TurnosNeg";
import turno from "./turno";
import RegistroLocal from "./RegistroLocal";
import RegistroCliente from "./RegistroCliente";

import Login from "./login";
import SacarTurno from "./SacarTurno";
import TurnosCli from "./TurnosCli";
import Principal from "./Principal";
import PerfilLocal from "./PerfilLocal";
import PerfilCliente from "./PerfilCliente";
import HistorialNeg from "./HistorialNeg";
import HistorialCli from "./HistorialCli";
import PendingTurnos from "./PendingTurnos"

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
      <Route path="/perfilCli" exact component={PerfilCliente} />
      <Route path="/perfilLocal" exact component={PerfilLocal} />
      <Route path="/turno" exact component={turno} />
      <Route path="/sacarturno" exact component={SacarTurno} />
      <Route path="/historialNeg" exact component={HistorialNeg} />
      <Route path="/historialCli" exact component={HistorialCli} />
      <Route path="/pendingTurn" exact component={PendingTurnos} />
    </Router>
  );
}

export default App;
