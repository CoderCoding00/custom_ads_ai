import React from 'react'
import {useState} from 'react'
import { Card, Form, Row, Col, Container, Button } from 'react-bootstrap';
// import { Form } from 'react-router-dom';


const Audience = () => {
    // const [audienceFormData, setAudienceFormData] = useState('');
    
    // const handleInputAudienceChange = event => {
       
    //     setAudienceFormData(event.target.value);

    //     console.log('audience:', event.target.value);
    //   };

    //   const [featureFormData, setFeaturesFormData] = useState('');
    
    //       const handleInputFeaturesChange = event => {
             
    //           setFeaturesFormData(event.target.value);
      
    //           console.log('3 features:', event.target.value);
    //         };

    //         const [productFormData, setProductFormData] = useState('');
    
    //             const handleInputProductChange = event => {
                   
    //                 setProductFormData(event.target.value);
            
    //                 console.log('product:', event.target.value);
    //               };

    const [product, setProduct] = useState('');
    const [feature, setFeature] = useState('');
    const [audience, setAudience] = useState('');

    const [result, setResult] = useState('');

    async function onSubmit(event) {
        event.preventDefault();
       
        setResult('');
    const response = await fetch('/components/Home', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringtify({product, 
            feature, 
            audience}),
    });
    const data = await response.json();
    setResult(data.result.replaceAll('\n', '<br />'));
    }
     
    return (
        <div>
            <Container>
            <h1 className='home-title'> Social Media Post Generator</h1>
          <p className='sub-title'>Follow the steps below to generate a social media post!</p>
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
                        onChange={(e) => setProduct(e.target.value)}
                        value={product}
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
                        onChange={(e) => setAudience(e.target.value)}
                        value={audience}
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
                onChange={(e) => setFeature(e.target.value)}
                value={feature}
                >
                </input>
                
                </Form.Text>
            
        </Form.Group> 
        </Form>
               
    </Card.Body>
</Card>
</Col>
</Row>
    <div className="result-main">
  <h3>Result</h3>
          
           <Button onClick={onSubmit}>Generate Post</Button>
              <textarea>{result}</textarea>
              
          </div>

                </Container>
            </div>

    // <div dangerouslySetInnerHTML={{ __html: result }}></div>

    // )
    )}

    export default Audience;


