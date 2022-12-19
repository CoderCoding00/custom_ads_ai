import React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Button, Nav } from "react-bootstrap";

class Display extends Component {
  render() {
    const { header, title, text, theLink } = this.props;
    return (
      <div>
        {/* <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card> */}
        <Card>
          <Card.Header>{header}</Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Nav.Link href={theLink}>
              <Button variant="primary" size="lg">
                Get Started
              </Button>
            </Nav.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Display;
