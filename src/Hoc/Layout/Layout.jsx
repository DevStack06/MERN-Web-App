import React, { Component } from "react";
import NavBar from "../../components/NavBar/Navbar";
import classes from "./Layout.module.css";

import UserBuilder from "../../Container/UserBuilder/UserBuilder";
import AuthenticationWrapper from "../AuthenticationWrapper/AuthenticationWrapper";
class Layout extends Component {
  state = {
    pageType: "",
    pageShow: false,
  };
  signInbuttonClick = () => {
    this.setState({
      pageType: "signin",
      pageShow: true,
    });
  };
  signUpbuttonClick = () => {
    this.setState({
      pageType: "signup",
      pageShow: true,
    });
  };

  popUpCancelHandler = () => {
    this.setState({
      pageShow: false,
    });
  };
  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        <NavBar
          SignIn={this.signInbuttonClick}
          SignUp={this.signUpbuttonClick}
          authenticated={this.props.authenticated}
          username={this.props.username}
        />
        <UserBuilder
          pageShow={this.state.pageShow}
          popUpCancelHandler={this.popUpCancelHandler}
          pageType={this.state.pageType}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default AuthenticationWrapper(Layout);
