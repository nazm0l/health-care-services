import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-5">Register Here</h2>
      <div className="w-25 mx-auto">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Full name</Form.Label>
            <Form.Control type="text" placeholder="Your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Register
          </Button>
        </Form>
        <p className="mt-2">Already Registered?<Link className="text-decoration-none ps-2" to="/login">LogIn Here</Link></p>
      </div>
    </div>
  );
};

export default Register;
