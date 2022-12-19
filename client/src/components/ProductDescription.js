import React from "react";
import { Component } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// import auth require
import Auth from "../utils/auth";

// THE 2 BELOW ARE NEED TO SAVE THE POST
// import { useMutation } from "@apollo/client";
// // IMPORT THE SAVE_AD QUERY
// import { SAVE_AD } from "../utils/mutations";

const { Configuration, OpenAIApi } = require("openai");

class ProductDescription extends Component {
  constructor() {
    super();
    this.state = {
      heading: "The Response from the AI will be shown here",
      response: "...await the response",
    };
  }
  // **** NEED THIS TO BE GLOBAL VARIABLE AND PASSS INTO SAVE POST METHOD
  // var postData

  // ******* REWRITE THIS FOR CLASS COMPONENTS
  // const [savePost, { error }] = useMutation(SAVE_AD);
  // console.log(error);
  // ************* 1. Create a function to handle the form submit
  // handleSavePost = () => {
  //   // get token
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  // **** Try to save the post to the database
  //   try {
  //     // const { savedAdIds } = await saveAd({
  //     // const { data } = savedPost({
  //     //   variables: { adData: { ...adToSave } },
  //     // });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // Runs on line 63 onSubmit={this.onFormSubmit}
  onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    // *** USE .productName b/c the line 42 'name' is "productName"
    console.log(formDataObj.productName);

    // GIVEN CODE FROM OPENAI
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    // OPEN AI CODE GIVEN TO GENERATE THE AD
    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: `Generate a social media ad for ${formDataObj.productName}`,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((response) => {
        this.setState({
          heading: `AI Generated Ad description for: ${formDataObj.productName}`,
          response: response.data.choices[0].text,
        });
        // ************* SAVE THE AD TO THE DATABASE MAKE A GLOBAL VAR *************
        //  postData = {
        //   // Use uuid to generate a unique id
        //   adId: 1,
        //   title: this.state.heading,
        //   link: this.state.response,
        // };

        // .catch((error) => {
        //     console.log(error);
      });
  };
  // };

  render() {
    return (
      <div>
        <Container>
          <h1> Generate A Unique Social Media Ad </h1>
          <br />
          <h5> Enter the name of the product and we'll do the rest. </h5>
          <h5>
            Be as descriptive as you want to such adding your tageted audience.
          </h5>
          <br />
          <br />
          <Form onSubmit={this.onFormSubmit}>
            <Form.Group classname="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Please enter the name of the product and any other relevant
                information. Click Generate Response and the AI will generate a
                response.
              </Form.Label>
              {/***** 'name' "productName" is the key in the formDataObj */}
              <Form.Control
                type="text"
                name="productName"
                placeholder="Enter Product Name"
              />
            </Form.Group>

            <Button variant="primary" size="md" type="submit">
              Generate Response
            </Button>
          </Form>

          <Card>
            {/* <Card.Header>Ad</Card.Header> */}
            <Card.Body>
              <Card.Title>
                <h1>{this.state.heading}</h1>
              </Card.Title>
              <Card.Text>
                <h4>{this.state.response}</h4>
              </Card.Text>
              {/* BUTTON TO SAVE THE POST (NOT WORKING AS OF NOW) */}
              <Button className="btn-block btn-info">Save Post</Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default ProductDescription;
