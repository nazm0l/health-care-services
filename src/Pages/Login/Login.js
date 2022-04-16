import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-5">Login Here</h2>
      <div className="w-25 mx-auto">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="dark" type="submit">
            LogIn
          </Button>
        </Form>
        <p className="mt-2">New Here?<Link className="text-decoration-none ps-2" to="/register">Register Now</Link></p>
      </div>
    </div>
  );
};

export default Login;
