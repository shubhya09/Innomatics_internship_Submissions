import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", user);
    // You can add API call here for user registration
  };

  return (
    <>
      <div className="auth-container">
        <div className="auth-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Name</label>
              <input 
                type="text" 
                name="username" 
                id="username" 
                placeholder="Enter your name" 
                value={user.username}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Enter your email" 
                value={user.email}
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
                value={user.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="auth-button">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
