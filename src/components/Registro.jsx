import React from 'react'
import SocialButton from './SocialButton'; 
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Registro = () => {
  return (
    <div>
      <h1>Crea una cuenta</h1>
      <div>
        <SocialButton
          facebookIcon={<FaFacebook />}
          githubIcon={<FaGithub />}
          linkedinIcon={<FaLinkedin />}
        />
      </div>
    </div>
  )
}

export default Registro;
