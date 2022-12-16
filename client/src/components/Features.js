import React from 'react'
import {useState} from 'react'
import { Card, Form } from 'react-bootstrap';
// import { Form } from 'react-router-dom';


function Features (props) {
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
            <Card.Header className='header'>Features</Card.Header>
            <Card.Body>
                <Card.Title>Step 3:</Card.Title>
                <Card.Text>
                    What are 3 key features?
                </Card.Text>
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor='features'></Form.Label>
                        <Form.Control className='input-post'
                            type='text'
                            name='featuresInput'
                            onChange={handleInputChange}
                            value={props.features}
                            required
                            />
                    <Form.Control.Feedback type='invalid'>Please add features!</Form.Control.Feedback>
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

export default Features;