import React from 'react'
import {useState} from 'react'
import { Card, Form } from 'react-bootstrap';
// import { Form } from 'react-router-dom';


const Product = (props) => {
    const [productFormData, setUserFormData] = useState('');
    
    const handleInputChange = event => {
       
        setUserFormData(event.target.value);

        console.log('product:', event.target.value);
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
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor='product'></Form.Label>
                       <Form.Text>
                        <input
                        type="text"
                        id="productInput"
                        name="productInput"
                        onChange={handleInputChange}
                        value={productFormData}
                        >
                        </input>
                        
                        </Form.Text>
                    
                </Form.Group> 
                </Form>
                       
            </Card.Body>
        </Card>
        
        </div>
    )
};

<<<<<<< HEAD
export default Product
=======


export default Product;
>>>>>>> 2dcd267fadc43107828b6bbdd52d7fffd312203c
