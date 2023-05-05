import React from 'react';
import './App.css';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from './PrivateRoutes';
import { useState } from 'react';

function App(): JSX.Element {
  const isLoggedIn: boolean = !!localStorage.getItem("token");
  const [userData, setUserData] = useState(null);

 

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard userData={userData}/>} />
          </Route>
          <Route path="/login" element={isLoggedIn ? <Dashboard userData={userData}/> : <Login setUserData={setUserData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
