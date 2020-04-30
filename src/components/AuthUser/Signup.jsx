import React, { Component } from "react";
import axios from "../../axiosproject";
class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
    errmsg: "",
    remember: false,
  };
  onClickCheckBox = () => {
    let checVal = this.state.remember;
    this.setState({
      remember: !checVal,
    });
  };
  onChangeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  SignUp = (e) => {
    e.preventDefault();
    let msg = "";
    if (this.state.confirmPassword !== this.state.password) {
      e.preventDefault();
      msg = "password should be same";
      this.setState({
        errmsg: msg,
      });
    } else {
      this.setState({
        errmsg: "",
      });

      const signUpData = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      };
      // console.log(signUpData);
      axios
        .post("/user/register", signUpData)
        .then((response) => {
          console.log(response.data);
          const loginData = {
            username: this.state.username,
            password: this.state.password,
          };
          axios
            .post("/user/login", loginData)
            .then((res) => {
              // console.log(res.data);
              if (this.state.remember) {
                localStorage.setItem("jwtToken", res.data.token);
                localStorage.setItem("username", this.state.username);
              } else {
                sessionStorage.setItem("jwtToken", res.data.token);
                sessionStorage.setItem("username", this.state.username);
              }
              window.location.reload();
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
  };
  render() {
    return (
      <React.Fragment>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="username"
              className="form-control"
              id="username"
              name="username"
              onChange={this.onChangeValue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={this.onChangeValue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              name="password"
              onChange={this.onChangeValue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd1">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd1"
              name="confirmPassword"
              onChange={this.onChangeValue}
            />
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" onClick={this.onClickCheckBox} /> Remember
              me
            </label>
          </div>
          <button className="btn btn-success" onClick={this.SignUp}>
            Submit
          </button>
        </form>
        <h6>{this.state.errmsg}</h6>
      </React.Fragment>
    );
  }
}

export default Signup;
