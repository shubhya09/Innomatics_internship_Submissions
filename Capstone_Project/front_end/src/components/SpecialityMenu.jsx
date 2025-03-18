// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);

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
            style={{
              ...styles.specialityItem,
              transform: hoverIndex === index ? 'translateY(-10px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
          >
            <div style={styles.circle}>
              <p style={styles.specialityText}>{item.speciality}</p>
            </div>
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
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'none',
  },
  specialityItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  circle: {
    backgroundColor: '#b3d4fc', // Light blue color
    borderRadius: '50%',
    width: '150px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '8px',
  },
  specialityText: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#2D3748',
    textAlign: 'center',
    margin: 0,
  },
};

export default SpecialityMenu;
