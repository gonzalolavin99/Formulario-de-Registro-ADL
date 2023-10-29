import React from "react";

class SocialButton extends React.Component {
  render() {
    return (
      <div className="redes">
        <div className="icono">{this.props.facebookIcon}</div>
        <div className="icono">{this.props.githubIcon}</div>
        <div className="icono">{this.props.linkedinIcon}</div>
      </div>
    );
  }
}

export default SocialButton;
