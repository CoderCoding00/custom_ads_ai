import React from 'react';
import './App.css';

//Import components
import LoginForm from './components/LoginForm'
import NavTab from './components/Navbar'
import Home from './components/Home'
// import Display from './components/Display'
// import Home from './components/Home'
// import ProductDescription from './components/ProductDescription'
import SignUp from './components/SignupForm'
import Product from './components/Product';
import Audience from './components/Audience';
import Features from './components/Features';
// import Result from './components/Result';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
    <div className='App'>
      <NavTab />
      {/* <Home /> */}
      <Routes>
        {/* <Route path="/" exact element={<//>} /> */}
        {/* fix later for home */}
        {/* <Route path="/product-description" element={<ProductDescription/>} /> */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/display" element={<Display />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Audience" element={<Audience />} />
        <Route path="/Features" element={<Features />} />
        {/* <Route path="/Result" element={<Result />} /> */}
        {/* <Route path="/Display" element={<Display />} /> */}

      </Routes>
    </div>
    </Router>
  );
}
  
export default App;