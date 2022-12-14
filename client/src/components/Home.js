import React from 'react'
import { useState, useEffect } from 'react'
// import Display from './Display'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Audience from './Audience'
import Product from './Product'
import Features from './Features'
import Result from './Result'


// const { Configuration, OpenAIApi } = require("openai");



function Home() {

    const [result, setResult] = useState({});

   const {
    Product = '',
    Audience = '',
    Features = '',
} = result;

const handleResultChange = event => {
    setResult(event.target.value)
  };

const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(result)

};

        return (
            <div>
                <Container>
                    <h1 className='home-title'> Social Media Post Generator</h1>
                    <p className='sub-title'>Follow the steps below to generate a social media post!</p>
            <Row>
                <Col>
                <Product
                       product={Product}              
                    />
                </Col>
                <Col>
                <Audience
                         audience={Audience}               
                    />
                </Col>
                <Col>
                <Features
                    features={Features}           
                    />
                </Col>
                {/* <Button variant="primary" size="lg" type="submit" className='submit-post button-33'>Submit</Button> */}
                {/* <Col> */}
                {/* <Result 
                                        
                    /> */}
                {/* </Col> */}
            </Row>
            <Button variant="primary" size="lg" type="submit" className='submit-post button-33' onChange={handleResultChange} onClick={handleFormSubmit}>Submit</Button>

            <Result 
                                        
             />

                </Container>
            </div>
        )
    }


export default Home