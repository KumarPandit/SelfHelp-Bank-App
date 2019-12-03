import React, { Component } from "react";
import "./Signup.css";
import { Form, Col, Button } from "react-bootstrap";

import { NavLink } from "react-router-dom";

class Signup extends Component {
  render() {
    return (
      <div className="signupcontainer col-sm-12 col-md-4">
        <Form>
          <h5 className="text-center p-4">Sign In Today and Start Saving</h5>
          <hr />

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="Your First name" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Your Last name" />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button  variant="danger" type="submit">
            Sign Up
          </Button>
        </Form>
        <h2>
          Already a member? <NavLink className="btn btn-success" to="/signin">Sign In</NavLink>
        </h2>
      </div>
    );
  }
}
export default Signup;
