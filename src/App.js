import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import registrarse from "./registrarse";
import inicio from "./inicio";
import TurnosNeg from "./Screens/Negocio/TurnosNeg";
import turno from "./turno";
import RegistroLocal from "./Screens/Negocio/RegistroLocal";
import RegistroCliente from "./Screens/Cliente/RegistroCliente";

import Login from "./login";
import SacarTurno from "./Screens/Cliente/SacarTurno";
import TurnosCli from "./Screens/Cliente/TurnosCli";
import Principal from "./Principal";
import PerfilLocal from "./Screens/Negocio/PerfilLocal";
import PerfilCliente from "./Screens/Cliente/PerfilCliente";
import HistorialNeg from "./Screens/Negocio/HistorialNeg";
import HistorialCli from "./Screens/Cliente/HistorialCli";
import PendingTurnos from "./Screens/Negocio/PendingTurnos"

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
