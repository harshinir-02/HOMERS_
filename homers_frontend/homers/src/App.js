import React from 'react'
import{Routes, Route, useNavigte } from 'react-router-dom';
import Login from "./components/Login";
import Home from "./container/Home";
//import chat from './components/Chat';

const App = () => {
  return (
    <Routes>
      <Route path="Login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App