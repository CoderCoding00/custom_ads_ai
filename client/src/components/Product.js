import React from 'react'
import {useState} from 'react'
import { Card, Form } from 'react-bootstrap';
// import { Form } from 'react-router-dom';

function Product(props) {
    const [userFormData, setUserFormData] = useState({userInput: ''});
    const [validated] = useState(false);
    const [product, setProduct] = useState({product: ''})

    function handleFormSubmit (e) {
e.preventDefault()
        console.log('hello');
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
      };
    return (
        <div>
        <Card className='card-post'>
            <Card.Header className='header'>Product</Card.Header>
            <Card.Body>
                <Card.Title>Step 1:</Card.Title>
                <Card.Text>
                    What is your product?
                </Card.Text>
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor='product'></Form.Label>
                        <Form.Control className='input-post'
                            type='text'
                            name='productInput'
                            onChange={handleInputChange}
                            value={props.product}
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

export default Product