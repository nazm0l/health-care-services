import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleRegister = event =>{
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(name, email, password);
    }

  return (
    <div className="container">
      <h2 className="text-center mt-5">Register Here</h2>
      <div className="w-50 mx-auto">
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Full name</Form.Label>
            <Form.Control ref={nameRef} type="text" placeholder="Your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
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
