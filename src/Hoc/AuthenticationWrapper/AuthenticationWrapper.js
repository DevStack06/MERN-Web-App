import React, { Component } from "react";

const AuthenticationHandler = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        token: null,
        authenticated: false,
        username: "",
      };
      // this.tokenCheck();
    }

    componentDidMount() {
      let token = "";
      let username = "";
      if (sessionStorage.getItem("jwtToken") === null) {
        token = localStorage.getItem("jwtToken");
        username = localStorage.getItem("username");
      } else {
        token = sessionStorage.getItem("jwtToken");
        username = sessionStorage.getItem("username");
      }
      // console.log(token);
      if (!token || token === "") {
        return;
      } else {
        this.setState({
          token: token,
          authenticated: true,
          username: username,
        });
      }
    }

    render() {
      // console.log(this.state.authenticated);
      return (
        <WrappedComponent
          {...this.props}
          token={this.state.token}
          authenticated={this.state.authenticated}
          username={this.state.username}
        />
      );
    }
  };
};

export default AuthenticationHandler;
