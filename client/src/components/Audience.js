import React from 'react'
import {useState} from 'react'
import { Card, Form } from 'react-bootstrap';
// import { Form } from 'react-router-dom';


const Audience = (props) => {
    const [audienceFormData, setUserFormData] = useState('');
    
    const handleInputChange = event => {
       
        setUserFormData(event.target.value);

        console.log('audience:', event.target.value);
      };
    return (
        <div>
        <Card className='card-post'>
            <Card.Header className='header'>Audience</Card.Header>
            <Card.Body>
                <Card.Title>Step 2:</Card.Title>
                <Card.Text>
                    Who is your target audience?
                </Card.Text>
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor='audience'></Form.Label>
                       <Form.Text>
                        <input
                        type="text"
                        id="audienceInput"
                        name="audienceInput"
                        onChange={handleInputChange}
                        value={audienceFormData}
                        >
                        </input>
                        
                        </Form.Text>
                    
                </Form.Group> 
                </Form>
                       
            </Card.Body>
        </Card>
        
        </div>
    )
};


export default Audience;