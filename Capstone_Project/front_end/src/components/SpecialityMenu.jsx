// // eslint-disable-next-line no-unused-vars
// import React from 'react'
// import { specialityData } from '../assets/assets'
// import { Link } from 'react-router-dom'

// const SpecialityMenu = () => {
//   return (
//     <div  className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality1'>
// <h1 className='text-3xl font-medium'>Find by Speciality</h1>
// <p className='w-1/ text-center text-sm '>Simply browse through our extensive lisst of trusted doctors, schedule your appointment hassle-free.</p>
// <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll '>
//     {specialityData.map((item, index)=>(
//         <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer  flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
//             <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
//             <p>{item.speciality}</p>
//         </Link>
//     ))}
// </div>
//     </div>
//   )
// }

// export default SpecialityMenu;

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
