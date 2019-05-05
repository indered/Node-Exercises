import React, { Component } from "react";

export default class About extends Component {
  state = {
    about: ""
  };

  componentDidMount() {
    fetch("http://localhost:3001/about")
      .then(res => res.text())
      .then(result => this.setState({ about: result }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>{this.state.about}</h1>
      </div>
    );
  }
}
