import React, { Component } from "react";
import "./Navbar.css";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav
          class="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <a class="navbar-brand" href="#">
            FrenzoApp
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  My Blog
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Advance
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Notifications
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Add Blog
                </a>
              </li>

              <form class="form-inline my-2 my-lg-0 ">
                <i class="fa fa-search" id="icon"></i>
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search blogs"
                  aria-label="Search"
                />
              </form>

              <ul class="navbar-nav mr-auto mr-sm-2">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hi
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/userlogout">
                      Logout
                    </a>
                    <a class="dropdown-item" href="/faqs">
                      FAQS
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="/work/notifications">
                      Notifications
                    </a>
                  </div>
                </li>
              </ul>

              <button
                type="button"
                class="btn btn-outline-success my-2 my-sm-0 ml-2"
                data-toggle="modal"
                data-target="#Signup"
              >
                <svg
                  class="bi bi-person-fill"
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
                class="btn btn-outline-success my-2 my-sm-0 mx-2"
                data-toggle="modal"
                data-target="#login"
              >
                Login
              </button>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
