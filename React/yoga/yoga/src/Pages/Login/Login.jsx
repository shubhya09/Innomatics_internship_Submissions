import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", credentials);
    // You can add API call here for user authentication
  };

  return (
    <>
      <div className="auth-container">
        <div className="auth-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email"  // Fixed spelling issue from 'eamil' to 'email'
                name="email" 
                id="email" 
                placeholder="Enter your email" 
                value={credentials.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Enter your password" 
                value={credentials.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="auth-button">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
