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
      <div style={{marginLeft:"5%", marginRight:"5%", backgroundColor:"white", padding:"40px"}}>
      <h4>Comments</h4>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
}