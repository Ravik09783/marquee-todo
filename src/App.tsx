import React from 'react';
import './App.css';
import Login from './component/Login';
import Dashboard  from './component/Dashboard';
// import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App">
     {<Login/>}

    { <Dashboard />}


    

    </div>
  );
}

export default App;
