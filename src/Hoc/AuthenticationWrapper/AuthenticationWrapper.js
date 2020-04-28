import React, { Component } from "react";

const AuthenticationHandler = (WrappedComponent) => {
  return class extends Component {
    state = {
      token: null,
      authenticated: false,
      username: "",
    };

    componentWillMount() {
      let token = localStorage.getItem("jwtToken");
      let username = localStorage.getItem("username");
      // console.log(username);
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
