import React from "react";
import {useState} from 'react'
import { useMutation } from '@apollo/client';
import {Form, Button, Alert, Card} from 'react-bootstrap';
import { ADD_USER } from "../utils/mutations";
import Auth from '../utils/auth';
import {Link } from 'react-router-dom';

function SignUp(props) {
    const [userFormData, setUserFormData] = useState({ email: '', password: '', username: '',});
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
const [addUser, {error, data}] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: userFormData.email,
        password: userFormData.password,
        username: userFormData.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

    const handleInputChange = (event) => {
        const {name, value} =event.target;
        setUserFormData({...userFormData, [name]: value});
    };

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();

    //     const form = event.currentTarget;
    //     if(form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }

    //     try {
    //         const response = await ADD_USER(userFormData);

    //         if (!response.ok) {
    //             throw new Error('something went wrong!');
    //         }

    //         const {token, user} = await response.json();
    //         console.log(user);
    //         Auth.login(token);
    //     }catch (err) {
    //         console.error(err);
    //         setShowAlert(true);
    //     }

    //     setUserFormData({
    //       username: '',
    //         email: '',
    //         password: '',
    //     });
    

    return (
        <>
            <Card className='card-login'>

        <Form noValidate validated={validated} onSubmit={handleFormSubmit} className='form'>
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Something went wrong with your signup!
          </Alert>
          <h1 className='in'>Sign Up</h1>
          {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <>
        <Link to="/home" className="btn-flat waves-effect back-home">
        ⮐ Back to
              home
            </Link>
          <Form.Group className='form-login'>
            <Form.Label htmlFor='username' className='label label-bold'>Username</Form.Label>
            <Form.Control className='input-auth'
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
            <Form.Control className='input-auth'
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
            <Form.Control className='input-auth'
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
            </>
            )}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
        </Form>
        </Card>
      </>
    );
}

export default SignUp;