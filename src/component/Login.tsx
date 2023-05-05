import React, { useState, useContext } from 'react';
import { useNavigate  } from 'react-router-dom';
import './Login.css';
import { LoginContext } from '../App';

const Login = () => {
  const { setLoginData }:any = useContext(LoginContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch('http://3.108.151.73/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Your data is:', data);

        localStorage.setItem('token', data.access_token);

        setLoggedIn(true);
        setLoginData(data.personalUserData)
       
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loggedIn) {
    navigate('/dashboard');
  }

  return (
    <div className="login-card">
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  </div>
  
  
  );
};

export default Login;
