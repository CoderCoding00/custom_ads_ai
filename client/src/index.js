// import express from 'express';
// import mongoose from 'mongoose';

// THIS CONNECTS THE REACT APP TO THE HTML FILE 
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

 
import App from './App';

// ReactDOM.render( <App />, document.getElementById('root'));

// MIGHT REPLACE LNE 12 WITH THIS
// ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);
  
reportWebVitals();