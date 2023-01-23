import React from "react";
import { Component } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// import auth require???
// import Auth from "../utils/auth";

// THE 2 BELOW ARE NEED TO SAVE THE POST
// import { useMutation } from "@apollo/client";
// // IMPORT THE SAVE_AD QUERY
// import { SAVE_AD } from "../utils/mutations";

const { Configuration, OpenAIApi } = require("openai");

class ProductDescription extends Component {
  constructor() {
    super();
    this.state = {
      heading: "Your custom ad will be shown below",
      response: "...",
    };
  }
  // **** NEED TO CREATE A GLOBAL VARIABLE AND PASS INTO SAVE POST METHOD
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

    // *** REFACTORED CODE FROM OPENAI
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
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
          heading: `Custom Ad description for: ${formDataObj.productName}`,
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
          {/* <h2 className="home-title">
            {" "}
            Enter the name of the product for a unique ad to be generated{" "}
          </h2> */}
          {/* <h5 className="sub-title-des">
            Be as descriptive as you want to such adding your tageted audience.
          </h5> */}
          {/* <br /> */}
          <Form onSubmit={this.onFormSubmit}>
            <Form.Group classname="mb-3" controlId="formBasicEmail">
              <Form.Label className="sub-title">
                Please enter the name of the product and any other relevant
                information.
              </Form.Label>
              <br />
              <h5>
                Click Generate Response and the AI will create a unique ad.
              </h5>
              <br />
              <br />
              {/***** 'name' "productName" is the key in the formDataObj */}
              <Form.Control
                className="generate-input input-post"
                type="text"
                name="productName"
                placeholder="Enter Product Name"
              />
            </Form.Group>

            <Button
              variant="outline-success"
              className="secondary-button"
              size="md"
              type="secondary"
            >
              Generate Response
            </Button>
          </Form>

          <Card className="generate-post">
            {/* <Card.Header>Ad</Card.Header> */}
            <Card.Body>
              <Card.Title>
                <h1>{this.state.heading}</h1>
              </Card.Title>
              <Card.Text>
                <h4>{this.state.response}</h4>
              </Card.Text>
              {/* BUTTON TO SAVE THE POST (NOT WORKING AS OF NOW) */}
              <Button variant="outline-success">Save Post 💾</Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default ProductDescription;
