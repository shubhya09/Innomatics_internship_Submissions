// import React, { useContext, useEffect , useState} from 'react'
// import { AppContext } from '../context/AppContext'
// import { useNavigate } from 'react-router-dom'

// const RelatedDoctors = ({speciality, docId}) => {

//     const {tdoctors} = useContext(AppContext);
//     const navigate = useNavigate();

//     const [relDoc, setRelDocs] = useState([]);

//     useEffect(() => {
//         if (tdoctors.length > 0 && speciality) {
//             const doctorsData = tdoctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
//             setRelDocs(doctorsData)
//             }
//     },[tdoctors, speciality, docId] )

//   return (
//     <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>

//         <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
//         <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive lisst of trusted doctors.</p>
//         <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>

//             {
//               relDoc.slice(0,5).map((item, index)=>(
//                 <div onClick={() => {
//                     console.log("Navigating to:", `/appointment/${item._id}`);
//                     {navigate(`/appointment/${item._id}`);
//                     console.log("Scrolling to top...");
//                         scrollTo(0, 0) }}}
                  
//                    className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
//                    <img className='bg-blue-50' src={item.image} alt="" /> 
//                    <div className='p-4'>
//                         <div className='flex items-center gap-2 text-sm text-center text-green-500'>
//                             <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
//                         </div>
//                         <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
//                         <p className='text-gray-600 text-sm'>{item.speciality}</p>
//                    </div>
//                 </div>
//             ))
            
//             }

//         </div>
//         <button onClick={()=> { navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-900 text-white px-12 py-3 rounded-full mt-10'>See All Doctors</button>
//     </div>
//   )
// }

// export default RelatedDoctors

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
