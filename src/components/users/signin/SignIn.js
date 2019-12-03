import React, { Component } from "react";
import "./SignIn.css";
import { Form, Button, Col } from "react-bootstrap";

class SignIn extends Component {
  render() {
    return (
      <div className="signincontainerin col-sm-12 col-md-4">
        <Form>
          <h5 className="text-center p-3">Enter Your Login Details </h5>
          <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          </Form.Row>
          <Button variant="danger " type="submit">
            Log In
          </Button>
        </Form>
      </div>
    );
  }
}
export default SignIn;
