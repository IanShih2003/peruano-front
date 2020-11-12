import React from 'react';
// import axios from "axios";
import './css/App.css'; 
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
function cliente(){
    // const configuracion = {
    //     url: "http://54.162.46.22:3000/",
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     data: {
     
    //     },
    //   };
    
    return(
        <div className="contenedorgigante">
            <div className="header"></div>
            <div className="cajaja"></div>
            <label className="tusproximosclientes"> Tus proximos clientes son:</label>
            <div className="cliente1">
            <div className="catorce2">14:00hs</div>
                <div className="raton2"> Mañana</div>
                <div className="flechita2"></div>
                <div className="carlitos">Carlos Monroe</div>

            </div>
            <div className="cliente2">
                <div className="catorce">15:00hs</div>
                <div className="raton"> Jueves</div>
                <div className="flechita"></div>
                <div className="carlitos">Maria Gomez</div>
            </div>
            <Link to={"/"}>
            <Button className="anterior">Clientes anteriores</Button>
            </Link>
        </div>
    );
}
export default cliente;