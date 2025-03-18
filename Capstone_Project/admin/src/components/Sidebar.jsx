import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        borderRight: '1px solid blue',
        paddingTop: '20px',
        maxWidth: '300px',
        height: '0'
      }}
    >
      {aToken && (
        <ul style={{ color: '#515151', listStyle: 'none', padding: '0', margin: '0' }}>
          {/* Dashboard */}
          <NavLink
            to="/admin-dashboard"
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 20px',
              minWidth: '180px',
              cursor: 'pointer',
              backgroundColor: isActive ? '#F2F3FF' : 'transparent',
              borderRight: isActive ? '4px solid #007bff' : 'none',
              textDecoration: 'none',
              color: '#515151',
            })}
          >
            <img src={assets.home_icon} alt="Dashboard" />
            <p>Dashboard</p>
          </NavLink>

          {/* Appointments */}
          <NavLink
            to="/all-appointments"
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 20px',
              minWidth: '180px',
              cursor: 'pointer',
              backgroundColor: isActive ? '#F2F3FF' : 'transparent',
              borderRight: isActive ? '4px solid #007bff' : 'none',
              textDecoration: 'none',
              color: '#515151',
            })}
          >
            <img src={assets.appointment_icon} alt="Appointments" />
            <p>Appointments</p>
          </NavLink>

          {/* Add Doctor */}
          <NavLink
            to="/add-doctor"
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 20px',
              minWidth: '180px',
              cursor: 'pointer',
              backgroundColor: isActive ? '#F2F3FF' : 'transparent',
              borderRight: isActive ? '4px solid #007bff' : 'none',
              textDecoration: 'none',
              color: '#515151',
            })}
          >
            <img src={assets.add_icon} alt="Add Doctor" />
            <p>Add Doctor</p>
          </NavLink>

          {/* Doctor List */}
          <NavLink
            to="/doctor-list"
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 20px',
              minWidth: '180px',
              cursor: 'pointer',
              backgroundColor: isActive ? '#F2F3FF' : 'transparent',
              borderRight: isActive ? '4px solid #007bff' : 'none',
              textDecoration: 'none',
              color: '#515151',
            })}
          >
            <img src={assets.people_icon} alt="Doctor List" />
            <p>Doctor List</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
