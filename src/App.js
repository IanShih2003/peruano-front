import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import registrarse from "./registrarse";
import inicio from "./inicio";
import turnos from "./turnos";
import cal from "./cal";
import cliente from "./cliente";
import perfil from "./perfil";
import turno from "./turno";
import RegistroLocal from "./RegistroLocal";
import RegistroCliente from "./RegistroCliente";

import Login from "./login";

function App() {
  return (
    <Router>
      <Route path="/login" exact component={Login} />
      <Route path="/registrarse" exact component={registrarse} />
      <Route path="/registroLocal" exact component={RegistroLocal} />
      <Route path="/registroCliente" exact component={RegistroCliente} />
      <Route path="/" exact component={inicio} />
      <Route path="/turnos" exact component={turnos} />
      <Route path="/cal" exact component={cal} />
      <Route path="/cliente" exact component={cliente} />
      <Route path="/perfil" exact component={perfil} />
      <Route path="/turno" exact component={turno} />
    </Router>
  );
}

export default App;
