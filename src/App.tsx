import React from 'react';
import './App.css';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from './PrivateRoutes';
import { useState, createContext } from 'react';
import NotFound from './component/NotFound';

export const LoginContext = createContext({});

function App(): JSX.Element {
  const isLoggedIn: boolean = !!localStorage.getItem("token");
  // const [userData, setUserData] = useState(null);
  const [loginData, setLoginData] = useState({});

  return (

    <LoginContext.Provider value={{ loginData, setLoginData }}>
    <div className="App">
      {/* <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard userData={userData}/>} />
          </Route>
          <Route path="/login" element={isLoggedIn ? <Dashboard userData={userData}/> : <Login setUserData={setUserData} />} />
        </Routes>
      </Router> */}

<Router>
  <Routes>
    <Route element={<PrivateRoutes />}>
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
    <Route path="/login" element={ <Login  />} />
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
</Router>
    </div>
    </LoginContext.Provider>
  );
}

export default App;
