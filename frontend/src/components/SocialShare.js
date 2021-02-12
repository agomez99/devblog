import React from "react";
  import { Twitter, Facebook, Linkedin, } from 'react-social-sharing'

  export default function SocialShare() {
    const styleObj = {
      fontSize: 14,
      color: "#4a54f1",
      textAlign: "center",
      paddingBottom: "20px",
  }
    return (
        <div className="social-share" style={styleObj}>
        <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
          <label>Share</label>
              <Twitter link={"https://agblog.gtsb.io/" } />   
              <Facebook  link={"https://agblog.gtsb.io/" } /> 
              <Linkedin  link={"https://agblog.gtsb.io/" } />              
        </div>
    );
  }