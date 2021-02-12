import React, { Component } from "react"
import Disqus from "disqus-react"


export default class extends Component {
  render() {
    const disqusShortname = "agdevblog-1"
    const disqusConfig = {
      url: "",
      identifier: "",
      title: "Title of Your Article",
      language: "en"
    }
    
    return (
      <div style={{ marginLeft: "5%", marginRight: "5%", backgroundColor: "white", padding: "40px", marginTop: "5%", borderRadius: ".5%" }}>
        <div>
          <div className="uk-tile uk-tile-primary uk-padding-small">
            <p align="center"><h4>Drop A Comment</h4>
            </p>
            <span uk-icon="comments; ratio: 3"></span>
          </div>
        </div>


        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
}