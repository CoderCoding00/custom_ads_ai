import React from "react";
import {useState} from 'react'
import {Form, Button, Alert, Card} from 'react-bootstrap';
import { ADD_USER } from "../utils/mutations";
import Auth from '../utils/auth';
import {Link } from 'react-router-dom';

const SignUp = () => {
    const [userFormData, setUserFormData] = useState({username: '', email: '', password: ''});
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const {name, value} =event.target;
        setUserFormData({...userFormData, [name]: value});
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if(form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const response = await ADD_USER(userFormData);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const {token, user} = await response.json();
            console.log(user);
            Auth.login(token);
        }catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
          username: '',
            email: '',
            password: '',
        });
    };

    return (
        <>
            <Card className='card-login'>

        <Form noValidate validated={validated} onSubmit={handleFormSubmit} className='form'>
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Something went wrong with your signup!
          </Alert>
          <h1 className='in'>Sign Up</h1>
        <Link to="/home" className="btn-flat waves-effect back-home">
        ⮐ Back to
              home
            </Link>
          <Form.Group className='form-login'>
            <Form.Label htmlFor='username' className='label label-bold'>Username</Form.Label>
            <Form.Control
              type='username'
              placeholder='Your username'
              name='username'
              onChange={handleInputChange}
              value={userFormData.username}
              required
            />
            <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
          </Form.Group>
  
          <Form.Group className='form-login'>
            <Form.Label htmlFor='email' className='label label-bold'>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Your email address'
              name='email'
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
            <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
          </Form.Group>
  
          <Form.Group className='form-login'>
            <Form.Label htmlFor='password' className='label label-bold'>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Your password'
              name='password'
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
            <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
          </Form.Group>

          <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p> 

          <Button className='button-33' role='button'
            disabled={!(userFormData.username && userFormData.email && userFormData.password)}
            type='submit'
            variant='success'>
            Submit
          </Button>
        </Form>
        </Card>
      </>
    )
};

export default SignUp;