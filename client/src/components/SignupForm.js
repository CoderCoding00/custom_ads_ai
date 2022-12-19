import React from "react";
import { useState } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
// import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

const SignUp = () => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      console.log(userFormData);
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      {/* <Card className="card-login"> */}
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
            Something went wrong with your signup!
          </Alert>
          <h1 className="in">Sign Up</h1>
          {/* <Link to="/home" className="btn-flat waves-effect back-home">
            ⮐ Back to home
          </Link> */}
          <Form.Group className="form-login">
            <Form.Label htmlFor="username" className="label label-bold">
              Username
            </Form.Label>
            <Form.Control
              className="input-auth"
              type="username"
              placeholder="Your username"
              name="username"
              onChange={handleInputChange}
              value={userFormData.username}
              required
            />
            <Form.Control.Feedback type="invalid">
              Username is required!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="form-login">
            <Form.Label htmlFor="email" className="label label-bold">
              Email
            </Form.Label>
            <Form.Control
              className="input-auth"
              type="email"
              placeholder="Your email address"
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
            <Form.Label htmlFor="password" className="label label-bold">
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

          {/* <p className="grey-text text-darken-1">
            Already have an account? <Link to="/login">Log in</Link>
          </p> */}

<Button
            className="button-33 auth-button"
            role="button"
            disabled={
              !(
                userFormData.username &&
                userFormData.email &&
                userFormData.password
              )
            }
            type="submit"
            variant="success"
          >
            Submit
          </Button>
        
        </Form>

        {/* <Button
            className="button-33 auth-button"
            role="button"
            disabled={
              !(
                userFormData.username &&
                userFormData.email &&
                userFormData.password
              )
            }
            type="submit"
            variant="success"
          >
            Submit
          </Button> */}
      {/* </Card> */}
    </>
  );
};

export default SignUp;
