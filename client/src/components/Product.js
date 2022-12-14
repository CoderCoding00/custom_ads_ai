import React from 'react'
import {useState} from 'react'
import { Card, Form } from 'react-bootstrap';
// import { Form } from 'react-router-dom';


const Product = () => {
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
        <Card>
            <Card.Header>Product</Card.Header>
            <Card.Body>
                <Card.Title>Step 1:</Card.Title>
                <Card.Text>
                    What is your product?
                </Card.Text>
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor='product'></Form.Label>
                        <Form.Control
                            type='text'
                            name='productInput'
                            onChange={handleInputChange}
                            value={userFormData.productInput}
                            required
                            />
                    <Form.Control.Feedback type='invalid'>Please enter a product!</Form.Control.Feedback>
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

export default Product;