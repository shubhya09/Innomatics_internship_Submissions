
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {
  const { docId } = useParams();
  const { tdoctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchDocInfo = async () => {
    const doc = tdoctors.find((doc) => doc._id === docId);
    setDocInfo(doc);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);
    let today = new Date();
    let slots = [];

    for (let i = 1; i < 8; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({ datetime: new Date(currentDate), time: formattedTime });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      slots.push(timeSlots);
    }

    setDocSlots(slots);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [tdoctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  return (
    docInfo && (
      <div style={styles.container}>
        {/* Doctor Details */}
        <div style={styles.detailsContainer}>
          <div>
            <img style={styles.doctorImage} src={docInfo.image} alt={docInfo.name} />
          </div>

          <div style={styles.infoBox}>
            <p style={styles.doctorName}>
              {docInfo.name} <img style={styles.verifiedIcon} src={assets.verified_icon} alt="Verified" />
            </p>
            <div style={styles.docDetails}>
              <p>{docInfo.degree} - {docInfo.speciality}</p>
              <button style={styles.experienceButton}>{docInfo.experience}</button>
            </div>

            <div>
              <p style={styles.aboutTitle}>
                About <img style={styles.infoIcon} src={assets.info_icon} alt="Info" />
              </p>
              <p style={styles.aboutText}>{docInfo.about}</p>
            </div>

            <p style={styles.feesText}>
              Appointment Fees: <span style={styles.feesAmount}>{currencySymbol}{docInfo.fees}</span>
            </p>
          </div>
        </div>

        {/* Booking Schedules */}
        <div style={styles.bookingContainer}>
          <p style={styles.bookingTitle}>Booking Slots</p>
          <div style={styles.slotContainer}>
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSlotIndex(index)}
                  style={{
                    ...styles.slotItem,
                    backgroundColor: slotIndex === index ? '#2B6CB0' : '#FFFFFF',
                    color: slotIndex === index ? '#FFFFFF' : '#4A5568',
                    border: slotIndex === index ? 'none' : '1px solid #CBD5E0',
                  }}
                >
                  <p>{item[1] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[1] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          <div style={styles.timeSlotContainer}>
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                  style={{
                    ...styles.timeSlot,
                    backgroundColor: item.time === slotTime ? '#2B6CB0' : 'transparent',
                    color: item.time === slotTime ? '#FFFFFF' : '#4A5568',
                    border: item.time === slotTime ? 'none' : '1px solid #CBD5E0',
                  }}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>

          <button style={styles.bookButton}>Book an Appointment</button>
        </div>

        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

// Embedded CSS Styles
const styles = {
  container: {
    padding: '20px',
    color: '#4A5568',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
  },
  doctorImage: {
    width: '100%',
    maxWidth: '280px',
    borderRadius: '10px',
  },
  infoBox: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #CBD5E0',
    borderRadius: '10px',
    padding: '20px',
    width: '100%',
    maxWidth: '600px',
  },
  doctorName: {
    fontSize: '24px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  verifiedIcon: {
    width: '20px',
  },
  docDetails: {
    display: 'flex',
    gap: '10px',
    marginTop: '5px',
  },
  experienceButton: {
    padding: '4px 8px',
    fontSize: '12px',
    borderRadius: '20px',
    border: '1px solid #CBD5E0',
  },
  aboutTitle: {
    fontWeight: '600',
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  aboutText: {
    color: '#718096',
    marginTop: '5px',
  },
  feesText: {
    marginTop: '10px',
  },
  feesAmount: {
    color: '#2D3748',
  },
  bookingContainer: {
    marginTop: '20px',
  },
  bookingTitle: {
    fontSize: '18px',
    fontWeight: '600',
  },
  slotContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
    overflowX: 'auto',
  },
  slotItem: {
    padding: '12px',
    minWidth: '60px',
    borderRadius: '30px',
    textAlign: 'center',
    cursor: 'pointer',
  },
  timeSlotContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
    overflowX: 'auto',
  },
  timeSlot: {
    padding: '8px 16px',
    borderRadius: '20px',
    cursor: 'pointer',
  },
  bookButton: {
    marginTop: '20px',
    padding: '12px 24px',
    backgroundColor: '#2B6CB0',
    color: '#FFFFFF',
    borderRadius: '20px',
    fontSize: '14px',
    cursor: 'pointer',
  },
};

export default Appointment;
