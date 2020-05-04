import React, { Component } from "react";
import axios from "../../axiosproject";
import ErrorHandler from "../../Hoc/ErrorHandler/ErrorHandeler";

class ProfileBUilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availble: false,
    };
  }
  async componentWillMount() {
    let token = localStorage.getItem("jwtToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios
      .get("/profile/", config)
      .then((res) => {
        console.log("res body " + res.body);
        if (res.body != null) {
          this.setState({
            availble: true,
          });
        }
      })
      .catch((err) => console.log(err));
  }
  render() {
    return <h1>profile section</h1>;
  }
}

export default ErrorHandler(ProfileBUilder, axios);
