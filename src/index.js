import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Register from './pages/Register.jsx';


import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/register' element={<Register/>}/>
        
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
