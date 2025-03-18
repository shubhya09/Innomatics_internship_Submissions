
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({ speciality, docId }) => {
  const { tdoctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDoc, setRelDocs] = useState([]);

  useEffect(() => {
    if (tdoctors.length > 0 && speciality) {
      const doctorsData = tdoctors.filter((doc) => doc.speciality === speciality && doc._id !== docId);
      setRelDocs(doctorsData);
    }
  }, [tdoctors, speciality, docId]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Top Doctors to Book</h1>
      <p style={styles.subText}>Simply browse through our extensive list of trusted doctors.</p>

      <div style={styles.gridContainer}>
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={styles.card}
          >
            <img src={item.image} alt={item.name} style={styles.image} />
            <div style={styles.cardContent}>
              <div style={styles.availability}>
                <span style={styles.dot}></span>
                <p>Available</p>
              </div>
              <p style={styles.docName}>{item.name}</p>
              <p style={styles.speciality}>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => navigate('/doctors')} style={styles.button}>
        See All Doctors
      </button>
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
    marginTop: '64px',
    color: '#1A202C',
    padding: '0 40px',
  },
  heading: {
    fontSize: '28px',
    fontWeight: '600',
  },
  subText: {
    width: '33%',
    textAlign: 'center',
    fontSize: '14px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
    paddingTop: '20px',
    width: '100%',
  },
  card: {
    border: '1px solid #BFDBFE',
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  cardHover: {
    transform: 'translateY(-10px)',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    backgroundColor: '#E0F2FE',
  },
  cardContent: {
    padding: '16px',
  },
  availability: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#16A34A',
  },
  dot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#16A34A',
    borderRadius: '50%',
  },
  docName: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1A202C',
  },
  speciality: {
    fontSize: '14px',
    color: '#4A5568',
  },
  button: {
    backgroundColor: '#1E40AF',
    color: 'white',
    padding: '12px 32px',
    borderRadius: '999px',
    marginTop: '24px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
};

export default RelatedDoctors;
