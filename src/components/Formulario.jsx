import React, { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [error, setError] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();
    if (contraseña !== confirmarContraseña) {
      alert("Las  contraseñas no coinciden");
      setError(true);
    } else {
      setError(false);
      setNombre("");
      setEmail("");
      setContraseña("");
      setConfirmarContraseña("");
    }
  };
  return (
    <div>
      <form className="formulario" onSubmit={validarDatos}>
        <div className="form-control">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-control">
          <label>Contraseña</label>
          <input
            type="password"
            name="contraseña"
            className="form-control"
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
          />
        </div>
        <div className="form-control">
          <label>Confirmar contraseña</label>
          <input
            type="password"
            name="confirmarContraseña"
            className="form-control"
            onChange={(e)=> setConfirmarContraseña(e.target.value)}
            value={confirmarContraseña}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
