import React from 'react'
import {useState} from 'react'
import { Card, Form } from 'react-bootstrap';
// import { Form } from 'react-router-dom';


const Audience = () => {
    const [userFormData, setUserFormData] = useState({userInput: ''});
    const [validated] = useState(false);

    function handleFormSubmit () {
        console.log("hello");
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
      };
    return (
        <div>
        <Card className='card-post'>
            <Card.Header className='header'>Audience</Card.Header>
            <Card.Body>
                <Card.Title>Step 2:</Card.Title>
                <Card.Text>
                    Who is your target audience?
                </Card.Text>
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor='audience'></Form.Label>
                        <Form.Control className='input-post'
                            type='text'
                            name='audienceInput'
                            onChange={handleInputChange}
                            value={userFormData.audienceInput}
                            required
                            />
                    <Form.Control.Feedback type='invalid'>Please enter target audience!</Form.Control.Feedback>
                </Form.Group> 
                </Form>
                {/* <Nav.Link href={enterButton}>
                    <Button variant="primary" size="lg">Enter</Button>
                </Nav.Link> */}
            </Card.Body>
        </Card>
        </div>
    )
};

export default Audience;