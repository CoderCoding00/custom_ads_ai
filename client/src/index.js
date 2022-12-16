// import express from 'express';
// import mongoose from 'mongoose';

// THIS CONNECTS THE REACT APP TO THE HTML FILE 
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// *** NOT SURE IF WE NEED THIS SO COMMENTED OUT FOR NOW
import reportWebVitals from './reportWebVitals';
import App from './App';

// MIGHT REPLACE LNE 12 WITH THIS
ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
    
  );

// *** COMMENTED OUT ORIGINAL FOR NOW REPLACED BY ABOVE
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />

//   </React.StrictMode>
// );

  
// *** NOT SURE IF WE NEED THIS SO COMMENTED OUT FOR NOW
reportWebVitals();