import "./App.css";
import Registro from "./components/Registro";
import Formulario from "./components/Formulario";
import Alert from "./components/Alert";
import React, { useState } from "react";

function App() {
  const [mensajeDeAlerta, setMensajeDeAlerta] = useState(null);
  const [tipoDeAlerta, setTipoDeAlerta] = useState("success");

  const mostrarAlerta = (mensaje, tipoDeMensaje) => {
    setMensajeDeAlerta(mensaje);
    setTipoDeAlerta(tipoDeMensaje);
  };

  return (
    <div className="form-control formu">
      <h1>Crea una cuenta</h1>
      <div>
        <Registro mostrarAlerta={mostrarAlerta}></Registro>
        <Formulario mostrarAlerta={mostrarAlerta}></Formulario>
        <Alert mensaje={mensajeDeAlerta} tipoDeMensaje={tipoDeAlerta}></Alert>

      </div>
    </div>
  );
}

export default App;
