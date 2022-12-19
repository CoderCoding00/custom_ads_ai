import React from "react";
import { Component } from "react";
import Display from "./Display";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1 className="home-title">Social Media Post Generator </h1>
          <p className="sub-title">
            Click on "Get Started" and follow the steps to generate a social
            media post!
          </p>
          <Row className="card-home">
            <Col>
              <Display
                className="card-box"
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
