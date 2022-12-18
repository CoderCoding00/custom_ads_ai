import React from 'react'
import {useState} from 'react'
import { Card, Form, Row, Col } from 'react-bootstrap';
// import { Form } from 'react-router-dom';


const Audience = () => {
    const [audienceFormData, setAudienceFormData] = useState('');
    
    const handleInputAudienceChange = event => {
       
        setAudienceFormData(event.target.value);

        console.log('audience:', event.target.value);
      };

      const [featureFormData, setFeaturesFormData] = useState('');
    
          const handleInputFeaturesChange = event => {
             
              setFeaturesFormData(event.target.value);
      
              console.log('3 features:', event.target.value);
            };

            const [productFormData, setProductFormData] = useState('');
    
                const handleInputProductChange = event => {
                   
                    setProductFormData(event.target.value);
            
                    console.log('product:', event.target.value);
                  };
    return (
        <>
        <Row>
            <Col>
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
                        <input className='input-post'
                        type="text"
                        id="productInput"
                        name="productInput"
                        onChange={handleInputProductChange}
                        value={productFormData}
                        >
                        </input>
                        
                        </Form.Text>
                    
                </Form.Group> 
                </Form>
                       
            </Card.Body>
        </Card>
        </Col>
        

<Col>
        <Card className='card-post'>
            <Card.Header className='header'>Audience</Card.Header>
            <Card.Body>
                <Card.Title>Step 2:</Card.Title>
                <Card.Text>
                    Who is your target audience?
                </Card.Text>
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor='audience'></Form.Label>
                       <Form.Text>
                        <input className='input-post'
                        type="text"
                        id="audienceInput"
                        name="audienceInput"
                        onChange={handleInputAudienceChange}
                        value={audienceFormData}
                        >
                        </input>
                        
                        </Form.Text>
                    
                </Form.Group> 
                </Form>
                       
            </Card.Body>
        </Card>
    </Col>    
    
    <Col>
<Card className='card-post'>
    <Card.Header className='header'>Features</Card.Header>
    <Card.Body>
        <Card.Title>Step 3:</Card.Title>
        <Card.Text>
            What are 3 key features?
        </Card.Text>
        <Form>
            <Form.Group>
                <Form.Label htmlFor='features'></Form.Label>
               <Form.Text>
                <input className='input-post'
                type="text"
                id="featuresInput"
                name="featuresInput"
                onChange={handleInputFeaturesChange}
                value={featureFormData}
                >
                </input>
                
                </Form.Text>
            
        </Form.Group> 
        </Form>
               
    </Card.Body>
</Card>
</Col>
</Row>
</>
    )
};


export default Audience;