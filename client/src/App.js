import React from 'react';
import './App.css';

//Import components
import LoginForm from './components/LoginForm'
import NavTab from './components/Navbar'
import Home from './components/Home'
import Display from './components/Display'
import SignUp from './components/SignupForm'

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

      </Routes>
    </div>
    </Router>
  );
}
  
export default App;