import React from 'react';
import './App.css';
import Login from './component/Login';
import Dashboard  from './component/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const isLoggedIn = !!localStorage.getItem("token");


  return (
    <div className="App">



    <Router>
        <Routes>
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
    

    </div>
  );
}

export default App;
