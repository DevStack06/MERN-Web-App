import React, { Component } from "react";
import axios from "../../axiosproject";
class Login extends Component {
  state = {
    username: "",
    password: "",
    err: "",
  };

  onChangeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  SignIn = async (e) => {
    e.preventDefault();

    const loginData = {
      username: this.state.username,
      password: this.state.password,
    };
    await axios
      .post("/user/login", loginData)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("jwtToken", res.data.token);
        localStorage.setItem("username", this.state.username);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          err: "Username/Password is incoorect",
        });
      });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.err}
        <form>
          <div className="form-group">
            <label htmlFor="email">Username:</label>
            <input
              className="form-control"
              name="username"
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
          <div className="checkbox">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button className="btn btn-success" onClick={this.SignIn}>
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
