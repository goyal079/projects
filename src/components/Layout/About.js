import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <p>Something About {this.props.teamMember}</p>
      </div>
    );
  }
}
export default About;
