import React from 'react';
import './App.css';

//Import components
import LoginForm from './components/LoginForm'
import NavTab from './components/Navbar'
// import Home from './components/Home'
// import ProductDescription from './components/ProductDescription'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className='App'>
      <NavTab />
      <Routes>
        <Route path="/" exact element={<NavTab/>} />
        {/* <Route path="/product-description" element={<ProductDescription/>} /> */}
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
    </Router>
  );
}
  
export default App;