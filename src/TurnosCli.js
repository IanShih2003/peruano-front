import React from "react";
// import axios from "axios";
import "./css/App.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
export default function TurnosCli() {

  return (
    <div className="contenedorgigante">
      <div className="header"></div>
      <div className="lacuartacaja">
        <div className="turnoscal">
          {" "}
          Los turnos que podes sacar son los siguientes:
        </div>
        <div className="m1"> Mañana</div>
        <Link to={"/turno"}>
          <Button className="btnhora1"> 11:00 hs </Button>
        </Link>
        <Button className="btnhora11"> 11:30 hs </Button>
        <Button className="btnhora12"> 12:00 hs </Button>
        <Button className="btnhora13"> 12:30 hs </Button>
        <Button className="btnhora14"> 13:00 hs </Button>
        <Button className="btnhora15"> 13:30 hs </Button>
        <Button className="btnhora16"> 14:00 hs </Button>

        <div className="m2"> Miercoles</div>
        <Button className="btnhora2"> 11:00 hs </Button>
        <Button className="btnhora21"> 11:30 hs </Button>
        <Button className="btnhora22"> 12:00 hs </Button>
        <Button className="btnhora23"> 12:30 hs </Button>
        <Button className="btnhora24"> 13:00 hs </Button>
        <Button className="btnhora25"> 13:30 hs </Button>
        <Button className="btnhora26"> 14:00 hs </Button>

        <div className="m3"> Jueves</div>
        <Button className="btnhora3"> 11:00 hs </Button>
        <Button className="btnhora31"> 11:30 hs </Button>
        <Button className="btnhora32"> 12:00 hs </Button>
        <Button className="btnhora33"> 12:30 hs </Button>
        <Button className="btnhora34"> 13:00 hs </Button>
        <Button className="btnhora35"> 13:30 hs </Button>
        <Button className="btnhora36"> 14:00 hs </Button>
        <div className="m4"> Viernes</div>
        <Button className="btnhora4"> 11:00 hs </Button>
        <Button className="btnhora41"> 11:30 hs </Button>
        <Button className="btnhora42"> 12:00 hs </Button>
        <Button className="btnhora43"> 12:30 hs </Button>
        <Button className="btnhora44"> 13:00 hs </Button>
        <Button className="btnhora45"> 13:30 hs </Button>
        <Button className="btnhora46"> 14:00 hs </Button>
      </div>
    </div>
  );
}
