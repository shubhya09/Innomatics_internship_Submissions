// import 'react'
// import { assets } from '../assets/assets'

// const Contact = () => {
//   return (
//     <div >
        
//       <div className='text-center text-2xl pt-10 text-gray-500 '>
//         <p>CONTACT <span>US</span></p>
//       </div>

//       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
//         <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

//         <div className='flex flex-col justify-center items-start gap-6'>
//           <p className='font-semibold text-lg text-gray-600'>Our Office</p>
//           <p className='text-gray-500'>5475Willms Station <br /> Suite 350, Washington, USA</p>
//           <p className='text-gray-500'>Tel: (415) 555-0132 <br /> Email: Medicare@gmail.com</p>
//           <p className='font-semibold text-lg text-gray-600'>Careers At Medicare</p>
//           <p className='text-gray-500'>Learn more aboout our teams and job openings.</p>
//           <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Contact

import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div style={styles.container}>
      {/* Contact Title */}
      <div style={styles.title}>
        <p>CONTACT <span>US</span></p>
      </div>

      {/* Contact Content */}
      <div style={styles.content}>
        <img style={styles.image} src={assets.contact_image} alt="Contact" />

        <div style={styles.infoContainer}>
          <p style={styles.heading}>Our Office</p>
          <p style={styles.text}>5475 Willms Station <br /> Suite 350, Washington, USA</p>
          <p style={styles.text}>Tel: (415) 555-0132 <br /> Email: Medicare@gmail.com</p>

          <p style={styles.heading}>Careers At Medicare</p>
          <p style={styles.text}>Learn more about our teams and job openings.</p>
          
          <button style={styles.button}>Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

// Embedded CSS Styles
const styles = {
  container: {
    padding: '40px 20px',
    textAlign: 'center',
    color: '#4A5568',
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    paddingTop: '20px',
    color: '#718096',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    marginTop: '30px',
  },
  image: {
    width: '100%',
    maxWidth: '360px',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '15px',
    textAlign: 'left',
  },
  heading: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#4A5568',
  },
  text: {
    fontSize: '14px',
    color: '#718096',
  },
  button: {
    padding: '12px 24px',
    fontSize: '14px',
    border: '1px solid black',
    cursor: 'pointer',
    transition: 'background 0.5s, color 0.5s',
    backgroundColor: 'transparent',
    color: 'black',
  },
};

export default Contact;
