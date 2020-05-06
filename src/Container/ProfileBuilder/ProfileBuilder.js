import React, { Component } from "react";
import axios from "../../axiosproject";
import ErrorHandler from "../../Hoc/ErrorHandler/ErrorHandeler";
import Model from "../../components/UI/Modal/MOdalCustom";
import Profile from "../../components/Profile/Profile/Profile";
import AddProfile from "../../components/Profile/AddProfile/ProfileAdd";

class ProfileBUilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availble: true,
      pageShow: true,
    };
    this.checkProfile();
  }
  async checkProfile() {
    await axios
      .get("/profile/")
      .then((res) => {
        const len = Object.keys(res.data).length;
        console.log("res body " + len);
        if (len < 3) {
          this.setState({
            availble: false,
          });
        }
      })
      .catch((err) => console.log(err));
    console.log(this.state.availble);
  }

  popUpCancelHandler = () => {
    this.setState({
      pageShow: false,
    });
    // console.log(this.props.history);
    this.props.history.replace("/home");
  };

  render() {
    let page = <Profile />;
    if (this.state.availble === false) {
      page = (
        <Model show={this.state.pageShow} modalClosed={this.popUpCancelHandler}>
          <AddProfile navigate={this.popUpCancelHandler} />;
        </Model>
      );
    }

    return <React.Fragment>{page}</React.Fragment>;
  }
}

export default ErrorHandler(ProfileBUilder, axios);
