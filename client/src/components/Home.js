import React from 'react'
import { Component } from 'react'
import Display from './Display'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Result from './Result'
const { Configuration, OpenAIApi } = require("openai");


class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1>Social Media Post Generator</h1>
                    <p>Follow the steps below to generate a social media post!</p>
            <Row>
                <Col>
                <Display
                    header="Product"
                    title="STEP 1:"
                    text="What is your product?"                       
                    />
                </Col>
                <Col>
                <Display
                    header="Audience"
                    title="STEP 2:"
                    text="Who is your target audience?"                       
                    />
                </Col>
                <Col>
                <Display
                    header="Features"
                    title="STEP 3:"
                    text="What are 3 key features?"                       
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
}

export default Home