import React from 'react'
import {useState} from 'react'
import { Card, Form } from 'react-bootstrap';
// import { Form } from 'react-router-dom';


const Display = () => {
    const [userFormData, setUserFormData] = useState({userInput: ''});
    const [validated] = useState(false);

    function handleFormSubmit () {
        console.log("hello");
    }
    // const { header, title, text } = this.props
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
      };
    return (
        <div>
        <Card>
            <Card.Header>Header</Card.Header>
            <Card.Body>
                <Card.Title>title</Card.Title>
                <Card.Text>
                    text
                </Card.Text>
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
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
                </Form>
                {/* <Nav.Link href={enterButton}>
                    <Button variant="primary" size="lg">Enter</Button>
                </Nav.Link> */}
            </Card.Body>
        </Card>
        </div>
    )
};

export default Display;