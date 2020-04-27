import React, { Component } from "react";
import NavBar from "../../components/NavBar/Navbar";
import classes from "./Layout.module.css";
class Layout extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className={classes.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
