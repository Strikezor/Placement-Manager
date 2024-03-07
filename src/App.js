import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "https://kit.fontawesome.com/3994cc8e67.js";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Chatbot from './components/Chatbot';
import Console from './components/Console.jsx'; 


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/console" element={<Console />} />
      </Routes>
    </>
  );
};

export default App;