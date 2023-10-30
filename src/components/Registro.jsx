import React from 'react'
import SocialButton from './SocialButton'; 
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Registro = () => {
  return (
    <div>
     
      <div>
        <SocialButton
          facebookIcon={<FaFacebook />}
          githubIcon={<FaGithub />}
          linkedinIcon={<FaLinkedin />}
        />
      </div>
      <p>O usa tu email para registrarte</p>
    </div>
  )
}

export default Registro;
