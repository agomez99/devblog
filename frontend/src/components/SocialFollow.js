import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faTwitter,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
  return (
<div className="social-container">
      <a href="https://www.linkedin.com/in/austine-gomez/"
        className="linkedin social"
        style={{
            color: 'var(--twitter)',
            
          }}>
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
      <a href="https://twitter.com/austine_gomez"
        className="twitter social"        
        style={{
            color: 'var(--twitter)',
            
          }}>
        <FontAwesomeIcon icon={faTwitter} size="3x" />
      </a>
      <a href="https://github.com/agomez99"
        className="github social"
        style={{
            color: 'var(--textNormal)',
            
          }}>
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
</div>
  );
}