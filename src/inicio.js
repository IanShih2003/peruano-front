import React from "react";
import "./css/App.css";
import "./css/style.css"
// import { Link } from "react-router-dom";
import { Button } from "reactstrap";
// import { FacebookLoginButton } from "react-social-login-buttons";
import Imagentelefono from "./image/Imagentelefono.png";
import DIBUJO2 from "./image/DIBUJO2.png";
function inicio() {
  return (
    <div className="contenedorgigante">
      <div className="tituloprincipal"> TuFast</div>
      <div>
        <div className="header"></div>
        <img src={Imagentelefono} className="imagentelefono"></img>
        <img src={DIBUJO2} className="DIBUJO2"></img>
        <Button href="/registrarse" className="btninicio">
          {" "}
          Registrarse
        </Button>
        <div>
          <Button href="/Login" className="btninicio2">
            {" "}
            Ingresar
          </Button>
        </div>
      </div>
    </div>
  );
}
export default inicio;
