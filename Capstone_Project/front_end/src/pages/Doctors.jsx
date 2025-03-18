
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const { tdoctors } = useContext(AppContext);

  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  // Filter doctors based on speciality
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
      <p style={styles.headerText}>Browse through the doctors by speciality.</p>

      <div style={styles.flexContainer}>
        {/* Toggle Filter Button (for Mobile) */}
        <button
          style={{
            ...styles.filterButton,
            backgroundColor: showFilter ? '#4F46E5' : 'white',
            color: showFilter ? 'white' : 'black',
          }}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filter
        </button>

        {/* Filter Options */}
        <div style={{ ...styles.filterOptions, display: showFilter ? 'flex' : 'none' }}>
          {specialities.map((spec) => (
            <p
              key={spec}
              onClick={() => (speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`))}
              style={{
                ...styles.filterItem,
                backgroundColor: speciality === spec ? '#E0E7FF' : 'white',
              }}
            >
              {spec}
            </p>
          ))}
        </div>

        {/* Doctor List */}
        <div style={styles.gridContainer}>
          {filteredDoctors.map((doctor) => (
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
                <div style={styles.availability}>
                  <p style={styles.statusIndicator}></p>
                  <p>Available</p>
                </div>
                <p style={styles.name}>{doctor.name}</p>
                <p style={styles.speciality}>{doctor.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Embedded CSS Styles
const styles = {
  container: {
    padding: '24px 16px',
  },
  headerText: {
    color: '#4B5563',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '20px',
    marginTop: '20px',
  },
  filterButton: {
    padding: '6px 12px',
    border: '1px solid black',
    borderRadius: '6px',
    fontSize: '14px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    display: 'block',
  },
  filterOptions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    fontSize: '14px',
    color: '#4B5563',
  },
  filterItem: {
    width: '94vw',
    maxWidth: '200px',
    padding: '8px 16px',
    border: '1px solid #D1D5DB',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
    width: '100%',
  },
  card: {
    border: '1px solid #BFDBFE',
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
  },
  image: {
    backgroundColor: '#DBEAFE',
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '16px',
  },
  availability: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#10B981',
  },
  statusIndicator: {
    width: '8px',
    height: '8px',
    backgroundColor: '#10B981',
    borderRadius: '50%',
  },
  name: {
    color: '#111827',
    fontSize: '18px',
    fontWeight: '500',
  },
  speciality: {
    color: '#4B5563',
    fontSize: '14px',
  },
};

export default Doctors;
