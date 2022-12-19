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
        {/* <Card className='card-box'> */}
          {/* <Card.Header className='home-head'>{header}</Card.Header> */}
          {/* <Card.Body> */}
            {/* <Card.Title className='descrip'>{title}</Card.Title> */}
            {/* <Card.Text className='descrip'>{text}</Card.Text>
            <Nav.Link href={theLink}>
              <Button className='button-33' size="lg" variant='success'>
                Get Started
              </Button>
            </Nav.Link>
          </Card.Body>
        </Card> */}
        <Card className='image'
        >
        </Card>
        <a href='/product-description'><Button className='button-33 home-button' size="lg" variant='success'>
                Get Started
              </Button>
              </a>
        
      </div>
    );
  }
}

export default Display;
