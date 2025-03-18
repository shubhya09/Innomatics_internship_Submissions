import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    if (aToken) {
      setAToken('');
      localStorage.removeItem('aToken');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        borderBottom: '1px solid #ccc',
        backgroundColor: '#ffffff',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '8px' }}>
        <h1
          onClick={() => navigate('/admin-dashboard')}
          style={{
            color: '#28a745',
            fontWeight: 'bold',
            backgroundColor: '#f8f8f8',
            // padding: '8px 12px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Medicare
        </h1>
        <p
          style={{
            border: '1px solid #888',
            padding: '4px 10px',
            borderRadius: '20px',
            color: '#666',
          }}
        >
          {aToken ? 'Admin' : 'Doctor'}
        </p>
      </div>
      <button
        onClick={logout}
        style={{
          backgroundColor: '#007bff',
          color: '#ffffff',
          fontSize: '14px',
          padding: '6px 20px',
          borderRadius: '20px',
          cursor: 'pointer',
          border: 'none',
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
