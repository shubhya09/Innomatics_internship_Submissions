import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAToken, backendUrl } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === 'Admin') {
        const { data } = await axios.post(`${backendUrl}/api/admin/login`, { email, password });
        if (data.success) {
          localStorage.setItem('aToken', data.token);
          setAToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        console.log('Doctor login not implemented yet.');
      }
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '20px',
        minWidth: '340px',
        maxWidth: '400px',
        border: '1px solid #DADADA',
        borderRadius: '12px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        color: '#5E5E5E'
      }}>
        <p style={{ fontSize: '24px', fontWeight: '600', margin: '0 auto' }}>
          <span style={{ color: '#007bff' }}>{state}</span> Login
        </p>
        <div style={{ width: '100%', marginBottom: '12px' }}>
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '4px',
              border: '1px solid #DADADA',
              borderRadius: '4px',
              outline: 'none'
            }}
            type="email"
            required
          />
        </div>
        <div style={{ width: '100%', marginBottom: '12px' }}>
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '4px',
              border: '1px solid #DADADA',
              borderRadius: '4px',
              outline: 'none'
            }}
            type="password"
            required
          />
        </div>
        <button style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#007bff',
          color: '#ffffff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}>Login</button>
        {state === 'Admin' ? (
          <p>
            Doctor Login?{' '}
            <span style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setState('Doctor')}>
              Click here?
            </span>
          </p>
        ) : (
          <p>
            Admin Login?{' '}
            <span style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setState('Admin')}>
              Click here?
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
