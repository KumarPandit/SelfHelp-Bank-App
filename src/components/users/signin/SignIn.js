import React, { Component } from "react";
import "./SignIn.css";
import { Form, Button } from "react-bootstrap";

class SignIn extends Component {
  render() {
    return (
      <div className="signincontainerin" col-sm-12 col-md-5>
        <Form>
          <h1>Please Enter Your Login Details </h1>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="success" type="submit">
            Log In
          </Button>
        </Form>
      </div>
    );
  }
}
export default SignIn;
