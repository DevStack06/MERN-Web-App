import React, { Component } from "react";
import "./Navbar.css";
import User from "./componants/user/user";
class Navbar extends Component {
  state = {
    authenticated: false,
    signup: false,
  };

  onSignUp = () => {
    this.setState({
      signup: !this.state.signup,
    });
  };
  render() {
    console.log(this.state.authenticated);
    let userUI = (
      <div>
        <button
          type="button"
          className="btn btn-outline-success my-2 my-sm-0 ml-2"
          onClick={this.onSignUp}
        >
          <svg
            className="bi bi-person-fill"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            />
          </svg>
          Signup
        </button>

        <button
          type="button"
          className="btn btn-outline-success my-2 my-sm-0 mx-2"
        >
          Login
        </button>
      </div>
    );

    if (this.state.authenticated) {
      userUI = (
        <div>
          <ul className="navbar-nav mr-auto mr-sm-2">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hi
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/userlogout">
                  Logout
                </a>
                <a className="dropdown-item" href="/faqs">
                  FAQS
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/work/notifications">
                  Notifications
                </a>
              </div>
            </li>
          </ul>
        </div>
      );
    }
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <a className="navbar-brand" href="#">
            FrenzoApp
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My Blog
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Advance
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Notifications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Add Blog
                </a>
              </li>

              <form className="form-inline my-2 my-lg-0 ">
                <i className="fa fa-search" id="icon"></i>
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search blogs"
                  aria-label="Search"
                />
              </form>
              {userUI}
            </ul>
          </div>
        </nav>
        {this.state.signup ? <User togglePopup={this.onSignUp} /> : null}
      </React.Fragment>
    );
  }
}

export default Navbar;
