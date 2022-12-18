// import React from 'react'
// import {useState} from 'react'
// import { Card, Form } from 'react-bootstrap';
// // import { Form } from 'react-router-dom';


// const Features = (props) => {
//     const [featureFormData, setUserFormData] = useState('');
    
//     const handleInputChange = event => {
       
//         setUserFormData(event.target.value);

//         console.log('3 features:', event.target.value);
//       };
//     return (
//         <div>
//         <Card className='card-post'>
//             <Card.Header className='header'>Features</Card.Header>
//             <Card.Body>
//                 <Card.Title>Step 3:</Card.Title>
//                 <Card.Text>
//                     What are 3 key features?
//                 </Card.Text>
//                 <Form>
//                     <Form.Group>
//                         <Form.Label htmlFor='features'></Form.Label>
//                        <Form.Text>
//                         <input className='input-post'
//                         type="text"
//                         id="featuresInput"
//                         name="featuresInput"
//                         onChange={handleInputChange}
//                         value={featureFormData}
//                         >
//                         </input>
                        
//                         </Form.Text>
                    
//                 </Form.Group> 
//                 </Form>
                       
//             </Card.Body>
//         </Card>
        
//         </div>
//     )
// };

// export default Features;