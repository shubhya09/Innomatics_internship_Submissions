
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div style={styles.container} id="speciality1">
      <h1 style={styles.heading}>Find by Speciality</h1>
      <p style={styles.subText}>
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>

      <div style={styles.specialityGrid}>
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
            style={styles.specialityItem}
          >
            <img src={item.image} alt={item.speciality} style={styles.image} />
            <p style={styles.specialityText}>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Embedded CSS Styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    padding: '64px 0',
    color: '#2D3748',
  },
  heading: {
    fontSize: '28px',
    fontWeight: '600',
  },
  subText: {
    width: '50%',
    textAlign: 'center',
    fontSize: '14px',
  },
  specialityGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    paddingTop: '20px',
    width: '100%',
    overflowX: 'auto', // Enables horizontal scrolling on small screens
    whiteSpace: 'nowrap',
    scrollbarWidth: 'none', // Hide scrollbar for modern browsers
  },
  specialityItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
    fontSize: '12px',
    cursor: 'pointer',
    flexShrink: 0,
    transition: 'transform 0.3s ease',
  },
  specialityItemHover: {
    transform: 'translateY(-10px)',
  },
  image: {
    width: '64px',
    maxWidth: '96px',
    marginBottom: '8px',
  },
  specialityText: {
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default SpecialityMenu;
