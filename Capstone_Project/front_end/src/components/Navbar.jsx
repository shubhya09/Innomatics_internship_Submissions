
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken(false);
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '14px',
        padding: '5px 0',
        borderBottom: '1px solid gray',
        marginBottom: '5px',
      }}
      className="navbar"
    >
      {/* Logo */}
      <h3
        onClick={() => navigate('/')}
        style={{
          color: '#22c55e',
          fontWeight: 'bold',
          backgroundColor: '#f9fafb',
          padding: '5px',
          boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
          textTransform: 'uppercase',
          cursor: 'pointer',
        }}
      >
        Medicare
      </h3>

      {/* Desktop Menu */}
      <ul
        style={{
          display: 'none',
          gap: '20px',
          fontWeight: '500',
        }}
        className="desktop-menu"
      >
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/doctors" className="nav-link">
          All Doctors
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </ul>

      {/* Right Section */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
        className="right-section"
      >
        {token ? (
          <div style={{ position: 'relative', cursor: 'pointer' }} className="user-profile">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img style={{ width: '32px', borderRadius: '50%' }} src={assets.profile_pic} alt="Profile" />
              <img style={{ width: '10px' }} src={assets.dropdown_icon} alt="Dropdown" />
            </div>

            {/* Dropdown Menu */}
            <div
              style={{
                position: 'absolute',
                top: '40px',
                right: '0',
                fontSize: '16px',
                fontWeight: '500',
                color: 'gray',
                backgroundColor: '#f5f5f4',
                padding: '16px',
                borderRadius: '6px',
                display: 'none',
                flexDirection: 'column',
                gap: '10px',
              }}
              className="dropdown"
            >
              <p onClick={() => navigate('/my-profile')} className="dropdown-item">
                My Profile
              </p>
              <p onClick={() => navigate('/my-appointments')} className="dropdown-item">
                My Appointments
              </p>
              <p onClick={logout} className="dropdown-item">
                Logout
              </p>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            style={{
              backgroundColor: '#1e3a8a',
              color: 'white',
              padding: '12px 32px',
              borderRadius: '9999px',
              fontWeight: '300',
              display: 'none',
            }}
            className="login-btn"
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          style={{ width: '24px', cursor: 'pointer' }}
          src={assets.menu_icon}
          alt="Menu"
          className="mobile-menu-icon"
        />
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            right: '0',
            bottom: '0',
            width: '100%',
            backgroundColor: 'white',
            transition: 'all 0.3s ease-in-out',
            zIndex: 20,
          }}
          className="mobile-menu"
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '24px',
            }}
          >
            <h1
              onClick={() => {
                setShowMenu(false);
                navigate('/');
              }}
              style={{
                color: '#22c55e',
                fontWeight: 'bold',
                backgroundColor: '#f9fafb',
                padding: '12px',
                boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Medicare
            </h1>
            <img
              style={{ width: '28px', cursor: 'pointer' }}
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt="Close"
            />
          </div>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              fontSize: '18px',
              fontWeight: '500',
              paddingTop: '10px',
            }}
          >
            <NavLink onClick={() => setShowMenu(false)} to="/" className="mobile-link">
              Home
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors" className="mobile-link">
              All Doctors
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about" className="mobile-link">
              About
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact" className="mobile-link">
              Contact
            </NavLink>
          </ul>
        </div>
      )}

      {/* Responsive Styles */}
      <style>
        {`
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
          .login-btn {
            display: block !important;
          }
        }

        .user-profile:hover .dropdown {
          display: flex !important;
        }

        .dropdown-item {
          cursor: pointer;
          transition: color 0.2s;
        }

        .dropdown-item:hover {
          color: black !important;
        }
        `}
      </style>
    </div>
  );
};

export default Navbar;
