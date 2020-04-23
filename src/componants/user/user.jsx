import React from "react";
import "./user.css";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
class User extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup\_inner">
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
          <Button variant="outline-primary">Primary</Button>{" "}
          <button onClick={this.props.togglePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default User;
