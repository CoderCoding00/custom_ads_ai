import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { useMutation } from "@apollo/client";
// import { Link } from "react-router-dom";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login, { error }] = useMutation(LOGIN_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      console.log(data);
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Card className="card-login">
        <Form
          noValidate
          validated={validated}
          onSubmit={handleFormSubmit}
          className="form"
        >
          <Alert
            dismissible
            onClose={() => setShowAlert(false)}
            show={showAlert}
            variant="danger"
          >
            Something went wrong with your login credentials!
          </Alert>
          {/* ADDED LOG IN TO BE SHOW AS TEXT ON PAGE */}
          <h1 className="in">Log In</h1>
          {/* <h1 className="in">Sign In</h1>
          <Link to="/home" className="btn-flat waves-effect back-home">
            ⮐ Back to home
          </Link> */}

          <Form.Group className="form-login">
            <Form.Label htmlFor="email" className="label label-bold">
              Email
            </Form.Label>
            <Form.Control
              className="input-auth"
              type="text"
              placeholder="Your email"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
            <Form.Control.Feedback type="invalid">
              Email is required!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="form-login">
            <Form.Label className="label label-bold" htmlFor="password">
              Password
            </Form.Label>
            <Form.Control
              className="input-auth"
              type="password"
              placeholder="Your password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
            <Form.Control.Feedback type="invalid">
              Password is required!
            </Form.Control.Feedback>
          </Form.Group>

          {/* <p className="label">
            Don't have an account?{" "}
            <Link to="/signup" className="label">
              Register
            </Link>
          </p> */}

          <Button
            className="button-33"
            role="button"
            disabled={!(userFormData.email && userFormData.password)}
            type="submit"
            variant="success"
          >
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default LoginForm;
