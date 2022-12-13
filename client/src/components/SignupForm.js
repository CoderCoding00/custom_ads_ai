import React from "react";
import {useState} from 'react'
import {Form, Button, Alert, Card} from 'react-bootstrap';
import { ADD_USER } from "../utils/mutations";
import Auth from '../utils/auth';
import {Link } from 'react-router-dom';

// const SignUp = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     console.log(email, password)
//   }

//         return (
//             <form className="signup" onSubmit={handleSubmit}>
//                 <h3>Sign up</h3>

//                 <label>Email:</label>
//                 <input 
//                 type='email'
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 />
//                 <label>Password:</label>
//                 <input 
//                 type='password'
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//                 />
//                 <button>Sign up </button>

//             </form>
//         )
//     }


// export default SignUp

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

        {/* This is needed for the validation functionality above */}
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          {/* show alert if server response is bad */}
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Something went wrong with your signup!
          </Alert>
          <Form.Group>
            <Form.Label htmlFor='username'>Username</Form.Label>
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
  
          <Form.Group>
            <Form.Label htmlFor='email'>Email</Form.Label>
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
  
          <Form.Group>
            <Form.Label htmlFor='password'>Password</Form.Label>
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

          <Button
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