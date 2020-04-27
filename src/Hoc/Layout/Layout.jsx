import React, { Component } from "react";
import NavBar from "../../components/NavBar/Navbar";
import classes from "./Layout.module.css";
import SignIn from "../../components/AuthUser/login";
import SignUp from "../../components/AuthUser/signup";
import Modal from "../../components/UI/Modal/Modal";
class Layout extends Component {
  state = {
    pageType: "",
    pageShow: false,
  };
  signInbuttonClick = () => {
    this.setState({
      pageType: "signIn",
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
    let page = <SignIn />;
    if (this.state.pageType === "signup") {
      page = <SignUp />;
    }
    return (
      <React.Fragment>
        <NavBar
          SignIn={this.signInbuttonClick}
          SignUp={this.signUpbuttonClick}
        />
        <Modal show={this.state.pageShow} modalClosed={this.popUpCancelHandler}>
          {page}
        </Modal>
        <main className={classes.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
