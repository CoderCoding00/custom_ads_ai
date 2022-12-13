import React from "react"
import { Component } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'

const { Configuration, OpenAIApi } = require("openai");

class Result extends Component {
    constructor() {
        super()
        this.state = {
            heading: 'Your social media post is generating....',
            response: '....stay tuned.'
        }
    }

    onFormSubmit = e => {
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
            prompt: "Generate a social media post for a ${formDataObj.productFeatures} ${formDataObj.productName} that is targeted towards ${formDataObj.productAudience}.\n",
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

    render() {
        function onSubmitFunction () {
            console.log("hello");
        }
            const { header, title, text, enterButton } = this.props
        return (
            <div>
            <Card>
                <Card.Header>{header}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Form
                    onSubmit={onSubmitFunction}
                    className="input">
                        <input id="inputname" type="text" />
                        {/* <Button variant="primary" size="lg" type="submit">Submit</Button> */}
                    </Form>
                </Card.Body>
            </Card>
            </div>
        )
    }


}

export default Result