import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function LoginForm(props) {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error, data }] = useMutation(LOGIN_USER); 

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {email: userFormData.email, password: userFormData.password},
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    }catch (e){
      console.log(e);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  

    // check if form has everything (as per react-bootstrap docs)
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    // try {
    //   const response = await LOGIN_USER(userFormData);

    //   if (!response.ok) {
    //     throw new Error('something went wrong!');
    //   }

    //   const { token, user } = await response.json();
    //   console.log(user);
    //   Auth.login(token);
    // } catch (err) {
    //   console.error(err);
    //   setShowAlert(true);
    // }

    // setUserFormData({
    //   email: '',
    //   password: '',
    // });
  

  return (
    <>
    <Card className='card-login'>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit} className='form'>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
    <h1 className='in'>Sign In</h1>
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
          <Form.Label htmlFor='email' className='label label-bold'>Email</Form.Label>
          <Form.Control className='input-auth'
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='form-login'>
          <Form.Label className='label label-bold' htmlFor='password'>Password</Form.Label>
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

        <p className='label' >
                Don't have an account? <Link to="/signup" className='label'>Register</Link>
              </p>
        <Button className='button-33' role='button'
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
        </>)}
      </Form>
      


      {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
      </Card>
    </>
  );
};

export default LoginForm;