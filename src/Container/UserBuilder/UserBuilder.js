import React, { Component } from "react";

class UserBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: true,
    };
  }
  popUpCancelHandler = () => {
    this.setState({
      popup: false,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Modal show={this.state.popup} modalClosed={this.popUpCancelHandler}>
          {page}
        </Modal>
      </React.Fragment>
    );
  }
}

export default UserBuilder;
