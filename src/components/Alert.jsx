import React from "react";

const Alert = ({ mensaje, tipoDeMensaje }) => {
  if (!mensaje) {
    return null;
  }
  
  return (
    <div className={`alert alert-${tipoDeMensaje}`}>
      {mensaje}
    </div>
  );
};

export default Alert;
