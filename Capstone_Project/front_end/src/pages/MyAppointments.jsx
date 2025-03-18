// // eslint-disable-next-line no-unused-vars
// import React, { useContext } from 'react'
// import {AppContext} from '../context/AppContext'

// const MyAppointments = () => {

//   const { tdoctors } = useContext(AppContext)

//   return (
//     <div>
//         <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>
//         <div>
//           {
//             tdoctors.slice(0,3).map((itme,index) => (
//               <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
//                 <div>
//                   <img className='w-32 bg-indigo-50' src={itme.image} alt="" />
//                 </div>
//                 <div className='flex-1 text-sm text-zinc-600'>
//                   <p className='text-neutral-800 font-semibolds'>{itme.name}</p>
//                   <p>{itme.speciality}</p>
//                   <p className='text-zinc-700 font-medium mt-1'>Address:</p>
//                   <p className='text-xs'>{itme.address.line1}</p>
//                   <p className='text-xs'>{itme.address.line2}</p>
//                   <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span>25, July, 2025 | 8:30 PM</p>
//                 </div>
//                 <div></div>
//                 <div className='flex flex-col gap-2 justify-end'>
//                   <button className='text-sm text-stone-500 text-center sm:min w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
//                   <button className='text-sm text-stone-500 text-center sm:min w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel Appointment</button>
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//     </div>
//   )
// }

// export default MyAppointments

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { tdoctors } = useContext(AppContext);

  return (
    <div style={styles.container}>
      <p style={styles.header}>My Appointments</p>
      <div>
        {tdoctors.slice(0, 3).map((item, index) => (
          <div key={index} style={styles.appointmentCard}>
            <div>
              <img src={item.image} alt="" style={styles.image} />
            </div>
            <div style={styles.details}>
              <p style={styles.doctorName}>{item.name}</p>
              <p>{item.speciality}</p>
              <p style={styles.sectionTitle}>Address:</p>
              <p style={styles.textSmall}>{item.address.line1}</p>
              <p style={styles.textSmall}>{item.address.line2}</p>
              <p style={styles.dateTime}>
                <span style={styles.textMedium}>Date & Time:</span> 25, July, 2025 | 8:30 PM
              </p>
            </div>
            <div style={styles.buttonContainer}>
              <button style={styles.payButton}>Pay Online</button>
              <button style={styles.cancelButton}>Cancel Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Embedded CSS Styles
const styles = {
  container: {
    paddingTop: '48px',
  },
  header: {
    paddingBottom: '12px',
    fontWeight: '600',
    color: '#444',
    borderBottom: '1px solid #ccc',
    marginBottom: '16px',
  },
  appointmentCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px 0',
    borderBottom: '1px solid #ddd',
  },
  image: {
    width: '128px',
    backgroundColor: '#eef2ff',
  },
  details: {
    flex: 1,
    fontSize: '14px',
    color: '#555',
  },
  doctorName: {
    fontWeight: '600',
    color: '#222',
  },
  sectionTitle: {
    fontWeight: '500',
    marginTop: '8px',
    color: '#333',
  },
  textSmall: {
    fontSize: '12px',
  },
  dateTime: {
    fontSize: '12px',
    marginTop: '8px',
  },
  textMedium: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#222',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  payButton: {
    padding: '10px',
    width: '160px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    backgroundColor: 'white',
    color: '#555',
    cursor: 'pointer',
    transition: '0.3s',
  },
  cancelButton: {
    padding: '10px',
    width: '160px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    backgroundColor: 'white',
    color: '#555',
    cursor: 'pointer',
    transition: '0.3s',
  },
};

// Hover Effects
styles.payButton[':hover'] = {
  backgroundColor: '#007bff',
  color: 'white',
};

styles.cancelButton[':hover'] = {
  backgroundColor: '#dc3545',
  color: 'white',
};

export default MyAppointments;
