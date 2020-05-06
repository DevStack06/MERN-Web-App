import React, { Component } from "react";
import axios from "../../../axiosproject";
class AddProfile extends Component {
  //   console.log("add pf]rofile");
  state = {
    titleline: "",
    name: "",
    profession: "",
    interest: "",
    DOB: "",
    about: "",
  };
  submitHandler = (e) => {
    e.preventDefault();
  };
  onChangeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
  };
  onSubmit = async () => {
    const profile = this.state;
    console.log(profile);

    await axios
      .post("/profile/add/", profile)
      .then((res) => {
        console.log(res);
        this.props.navigate();
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label>TitleLine:</label>
            <input
              className="form-control"
              name="titleline"
              onChange={this.onChangeValue}
            />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input
              className="form-control"
              name="name"
              onChange={this.onChangeValue}
            />
          </div>
          <div className="form-group">
            <label>Profession:</label>
            <input
              className="form-control"
              name="profession"
              onChange={this.onChangeValue}
            />
          </div>
          <div className="form-group">
            <label>Interest:</label>
            <input
              className="form-control"
              name="interest"
              onChange={this.onChangeValue}
            />
          </div>
          <div className="form-group">
            <label>DOB:</label>
            <input
              type="date"
              className="form-control"
              name="DOB"
              onChange={this.onChangeValue}
            />
          </div>

          <div className="form-group">
            <label>About:</label>
            <textarea
              className="form-control"
              rows="3"
              cols="50"
              name="about"
              onChange={this.onChangeValue}
            />
          </div>

          <button className="btn btn-primary" onClick={this.onSubmit}>
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default AddProfile;
