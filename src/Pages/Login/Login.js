import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "./SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  let errorMessage;
  if (error) {
    errorMessage = <p className="text-danger">{error?.message}</p>;
  }

  if (loading || sending) {
    return <Loading></Loading>;
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast('Reset mail sent')
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5">Login Here</h2>
      <div className="w-50 mx-auto">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          {errorMessage}
          <Button variant="dark" type="submit">
            LogIn
          </Button>
        </Form>
        <p className="mt-2">
          Forgot Password?
          <button
            onClick={resetPassword}
            className="text-decoration-none btn btn-link ps-2">
            Reset Now
          </button>
        </p>
        <p className="mt-2">
          New Here?
          <Link className="text-decoration-none ps-2" to="/register">
            Register Now
          </Link>
        </p>
        <SocialLogin></SocialLogin>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Login;
