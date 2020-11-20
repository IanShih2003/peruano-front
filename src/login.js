import React, { useState } from "react";
import "./css/App.css";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
// import { FacebookLoginButton } from "react-social-login-buttons";
import usuario from "./image/usuario.png";
import llave from "./image/llave.png";
// import PELUQUERO from "./image/PELUQUERO.png";
// import COMIDA from "./image/COMIDA.png";
// import personaje from "./image/personaje.png";
// import MALETA from "./image/MALETA.png";
// import LUPA from "./image/LUPA.png";
// import CALENDARIO from "./image/CALENDARIO.png";
// import pregunta from "./image/pregunta.png";
import axios from "axios";

function Login() {
  const history = useHistory();

  const [correo, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handlerFunc = (func) => {
    return ({ target }) => func(target.value);
  };

  const handleCorreo = handlerFunc(setEmail);
  const handlePass = handlerFunc(setPass);

  const login = async () => {
    if (correo === "" || password === "") {
      return alert("Un parametro esta vacio");
    }
    axios
      .post("http://3.81.213.175:3000/api/login", {
        correo: correo,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("local", response.data.local)
        localStorage.setItem("token", response.data.token)
        history.push("/principal");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert(error.response.data);
        }
      });
  };

  return (
    <div className="contenedorgigante">
      <div className="header"></div>
      <div className="cajitafeliz2">
        <div className="formcontainer">
          <Form className="App">
            <img src={usuario} className="usuario"></img>

            <Input
              type="Email"
              className="queso"
              placeholder="Email"
              onChange={handleCorreo}
            ></Input>

            <FormGroup>
              <img src={llave} className="llave"></img>
              <Input
                type="Password"
                className="queso"
                placeholder="Contraseña"
                onChange={handlePass}
              />
            </FormGroup>
            <div className="xdrow">
              <a className="laviymeolvide"> Olvidaste tu contraseña?</a>
              <a href="/registrarse" className="laviymeolvide">
                {" "}
                Ingresa Aquí
              </a>
            </div>
            <Button className="btnlogin" onClick={login}>
              Ingresar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Login;
