import React from "react"
import { useState } from "react";
import { Card, Form } from 'react-bootstrap'
import Audience from "./Audience";
import Product from "./Product";
import Features from "./Features";
// import { Configuration, OpenAIApi } from "openai";

const { Configuration, OpenAIApi } = require("openai");

const Result = () => {
    const [userFormData, setUserFormData] = useState({userInput: ''});
    const [validated] = useState(false);

    function handleFormSubmit () {
        console.log("hello");
    }

        const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
      };
    // constructor() {
    //     super()
    //     this.state = {
    //         heading: 'Your social media post is generating....',
    //         response: '....stay tuned.'
    //     }
    // }

    handleFormSubmit = e => {
        e.preventDefault()

        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj.postGenData)

        //OpenAI
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
          });
          const openai = new OpenAIApi(configuration);

          openai.createCompletion("text-davinci-003", {
            prompt: `Generate a custom social media post for a ${userFormData.featuresInput} ${userFormData.productInput} that is targeted towards ${userFormData.audienceInput}.\n`,
            temperature: 0.8,
            max_tokens: 280,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          })
          .then((response) => {
            this.setState({
                heading: `Your social media post: ${formDataObj.postGenData}`,
                response: `${response.data.choices[0].text}`
            })
          });
    }
 
    return (
        <div>
        <Card className=' result card-post'>
            <Card.Header className='header'>Result</Card.Header>
            <Card.Body>
                <Card.Title>Result</Card.Title>
                <Card.Text>
                    Results
                </Card.Text>
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor='result'></Form.Label>
                        <Form.Control
                            type='text'
                            name='result'
                            onChange={handleInputChange}
                            value={userFormData.result}
                            required
                            />
                    <Form.Control.Feedback type='invalid'>Please enter target audience!</Form.Control.Feedback>
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




export default Result