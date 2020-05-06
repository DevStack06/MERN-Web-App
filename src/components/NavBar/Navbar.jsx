import React from "react";
import "./Navbar.css";
// import { NavLink, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const navbar = (props) => {
  const Logout = () => {
    // localStorage.removeItem("jwtToken");
    // localStorage.removeItem("username");
    localStorage.clear();
    sessionStorage.clear();
  };

  let userUI = (
    <div>
      <button
        type="button"
        className="btn btn-outline-success my-2 my-sm-0 ml-2"
        onClick={props.SignUp}
      >
        Signup
      </button>

      <button
        type="button"
        className="btn btn-outline-success my-2 my-sm-0 mx-2"
        onClick={props.SignIn}
      >
        Login
      </button>
    </div>
  );

  if (props.authenticated) {
    userUI = (
      <div>
        <ul className="navbar-nav mr-auto mr-sm-2">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Hi {props.username}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" to="/profile">
                Go to Profile
              </NavLink>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/work/notifications">
                Delete Account
              </a>
              <a className="dropdown-item" href="/" onClick={Logout}>
                Logout
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
        <NavLink className="navbar-brand" to="/" exact>
          FrenzoApp
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" href="/">
                Advance
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" href="/">
                Notifications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Add Blog
              </a>
            </li>

            <form className="form-inline my-2 my-lg-0 ">
              <i className="fa fa-search" id="icon"></i>
              <input
                className="form-control mr-sm-2 "
                id="form"
                type="search"
                placeholder="Search blogs"
                aria-label="Search"
              />
            </form>
            {userUI}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default navbar;
