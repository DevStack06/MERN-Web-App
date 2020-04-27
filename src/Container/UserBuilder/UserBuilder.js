import React, { Component } from "react";

class AppBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <h1>Welcome to signin/signup page </h1>
      </React.Fragment>
    );
  }
}

export default AppBuilder;
