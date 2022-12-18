import { getToPathname } from "@remix-run/router";
import React from "react";
// import { useState, useEffect } from 'react';
import { useState } from "react";
// import Display from './Display'
import { Container, Row, Col, Button } from "react-bootstrap";
// import Result from './Result'
import Audience from "./Audience";
// import Product from './Product'
// import Features from './Features'

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "tQPQno7HwoRNVpf0IUv0T3BlbkFJau8C5cDh2lNo3UfR6Ynh",
});
const openai = new OpenAIApi(configuration);

const Home = (props) => {
  const [prompt, setPrompt] = useState({});
  const [result, setResult] = useState("");

  // const configuration = new Configuration({
  //     apiKey:'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',
  //       });
  //     const openai = new OpenAIApi(configuration);

  const generatePost = async () => {
    // let prompt = `Generate a custom social media post for a ${Features} ${Product} that is targeted towards ${Audience}.\n`;

    // const res = await openai.createCompletion({
    //     model:"text-davinci-003",
    //     prompt:
    //     `Generate a custom social media post for a ${props.audienceFormData} ${props.productFormData}  that is targeted towards ${props.featureFormData}.\n`,
    //     temperature: 0.8,
    //     max_tokens: 280,
    //     top_p: 1,
    //     frequency_penalty: 0,
    //     presence_penalty: 0,
    //   });

    const url = "https://api.openai.com/v/engines/davinci/completions";
    const params = {
      prompt: `Generate a custom social media post for a ${props.audienceFormData} ${props.productFormData}  that is targeted towards ${props.featureFormData}.\n`,
      max_tokens: 160,
      temperature: 0.7,
      frequency_penalty: 0.5,
    };
    const headers = {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    };

    try {
      const response = await getToPathname
        .post(url, { json: params, headers: headers })
        .json();
      const output = `${prompt}${response.choice[0].text}`;
      console.log(output);
    } catch (err) {
      console.log(err);
    }

    // setResult(response.data.data[0].url);
  };

  return (
    <div>
      <Container>
        <h1 className="home-title"> Social Media Post Generator</h1>
        <p className="sub-title">
          Follow the steps below to generate a social media post!
        </p>
        <Audience />
        <div className="result-main">
          <h3>Result</h3>

          <Button onClick={generatePost}>Generate Post</Button>
          <textarea>{result}</textarea>
        </div>
      </Container>
    </div>
  );
};

export default Home;
