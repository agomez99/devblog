import React from "react";
  import { Twitter, Facebook, Linkedin, } from 'react-social-sharing'

  export default function SocialShare() {
    return (
        <div class="social-share">
              <Twitter link={"https://agblog.gtsb.io/" } />   
              <Facebook  link={"https://agblog.gtsb.io/" } /> 
              <Linkedin  link={"https://agblog.gtsb.io/" } />              
        </div>
    );
  }