import React from 'react'
// import Display from './Display'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Result from './Result'
import Audience from './Audience'
import Product from './Product'
import Features from './Features'

const { Configuration, OpenAIApi } = require("openai");


const Home = () => {
    
        return (
            <div>
                <Container>
                    <h1>Social Media Post Generator</h1>
                    <p>Follow the steps below to generate a social media post!</p>
            <Row>
                <Col>
                <Product
                                     
                    />
                </Col>
                <Col>
                <Audience
                                        
                    />
                </Col>
                <Col>
                <Features
                                        
                    />
                </Col>
                <Button variant="primary" size="lg" type="submit">Submit</Button>
                <Col>
                <Result
                                        
                    />
                </Col>
            </Row>

                </Container>
            </div>
        )
    }


export default Home