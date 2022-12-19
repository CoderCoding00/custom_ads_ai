import React from "react";
import { Component } from "react";
import Display from "./Display";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Online Post Generator using OpenAI</h1>
          <p>Start by picking any of the use cases to get started</p>
          <Row>
            <Col>
              <Display
                header="Product Description"
                title="Generate Product Descriptions"
                text="Generate a product description for product"
                theLink="/product-description"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
