import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const { tdoctors } = useContext(AppContext);

  const [filteredDoctors, setFilteredDoctors] = useState([]);

  // Filter doctors based on the selected speciality
  useEffect(() => {
    if (tdoctors) {
      const filtered = speciality
        ? tdoctors.filter((doc) => doc.speciality === speciality)
        : tdoctors;
      setFilteredDoctors(filtered);
    }
  }, [tdoctors, speciality]);

  const specialities = [
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist',
  ];

  return (
    <div style={styles.container}>
      {/* Specialities Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Specialities</h2>
        {specialities.map((spec) => (
          <p
            key={spec}
            onClick={() =>
              speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)
            }
            style={{
              ...styles.specialityItem,
              backgroundColor: speciality === spec ? '#E0E7FF' : 'white',
            }}
          >
            {spec}
          </p>
        ))}
      </div>

      {/* Doctors Display */}
      <div style={styles.doctorList}>
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <div
              key={doctor._id}
              onClick={() => doctor._id && navigate(`/appointment/${doctor._id}`)}
              style={styles.card}
            >
              <img
                style={styles.image}
                src={doctor.image || 'default-doctor.jpg'} // Placeholder if no image
                alt={doctor.name || 'Doctor'}
              />
              <div style={styles.cardContent}>
                <p style={styles.name}>{doctor.name}</p>
                <p style={styles.speciality}>{doctor.speciality}</p>
                <p style={styles.availability}>
                  <span style={styles.statusIndicator}></span> Available
                </p>
              </div>
            </div>
          ))
        ) : (
          <p style={styles.noDoctors}>No doctors available for this speciality.</p>
        )}
      </div>
    </div>
  );
};

// CSS Styles
const styles = {
  container: {
    display: 'flex',
    padding: '24px',
    gap: '24px',
  },
  sidebar: {
    width: '220px',
    padding: '16px',
    borderRight: '2px solid #E5E7EB',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    backgroundColor: '#F9FAFB',
    minHeight: '100vh', // Ensures it takes full height
  },
  sidebarTitle: {
    marginBottom: '12px',
    fontSize: '18px',
    fontWeight: '600',
    color: '#4B5563',
  },
  specialityItem: {
    padding: '8px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    color: '#4B5563',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
    border: '1px solid #D1D5DB',
    marginBottom: '8px',
    textAlign: 'center',
  },
  doctorList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
    width: '100%',
  },
  card: {
    border: '1px solid #BFDBFE',
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '10px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    backgroundColor: '#DBEAFE',
    marginBottom: '10px',
  },
  cardContent: {
    padding: '10px',
  },
  name: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '4px',
  },
  speciality: {
    fontSize: '14px',
    color: '#4B5563',
    marginBottom: '8px',
  },
  availability: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#10B981',
    fontSize: '14px',
  },
  statusIndicator: {
    width: '8px',
    height: '8px',
    backgroundColor: '#10B981',
    borderRadius: '50%',
    marginRight: '6px',
  },
  noDoctors: {
    color: '#9CA3AF',
    fontSize: '16px',
    marginTop: '20px',
    textAlign: 'center',
  },
};

export default Doctors;
