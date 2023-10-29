import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

class SocialButton extends React.Component {
  render() {
    return (
      <div className="redes">
        <div className=" icono">
          <FaFacebook />
        </div>
        <div className="icono">
          <FaGithub />
        </div>
        <div className="icono"> 
          <FaLinkedin />
        </div>
      </div>
    );
  }
}

<FaGithub />;

export default SocialButton;
