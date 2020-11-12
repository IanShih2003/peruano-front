import React from "react";
import "./css/App.css";
// import {
//   NavLink,
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
// import axios from "axios";

function registrarse() {
  return (
    <div>
      <div className="contenedorgigante">
        <div className="tituloprincipal"> TuFast</div>
        <div className="header"></div>
        <div className="cajitafeliz2">
          <div>
            <Button href="/RegistroCliente" className="btnlogin" id="2">
              {" "}
              Cliente
            </Button>
          </div>
          <div className="xdrow2">
            <Link to={"/RegistroLocal"}>
              <Button href="/RegistroLocal" className="btnlogin">
                {" "}
                Como un negocio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default registrarse;
