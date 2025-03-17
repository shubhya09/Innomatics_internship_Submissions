// // eslint-disable-next-line no-unused-vars
// import React, { useContext } from 'react'
// import { useNavigate} from 'react-router-dom'
// import { AppContext } from '../context/AppContext'

// const TopDoctors = () => {

//   const navigate= useNavigate()
//   const {tdoctors} = useContext(AppContext);
  
//   return (
//     <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>

//         <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
//         <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive lisst of trusted doctors.</p>
//         <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>

//             {
//               tdoctors.slice(0,10).map((item, index)=>(
//                 <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
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

// export default TopDoctors;

// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { tdoctors } = useContext(AppContext);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Top Doctors to Book</h1>
      <p style={styles.subText}>
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div style={styles.gridContainer}>
        {tdoctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/appointment/${item._id}`)}
            style={styles.card}
          >
            <img src={item.image} alt={item.name} style={styles.image} />
            <div style={styles.cardBody}>
              <div style={styles.availability}>
                <p style={styles.availabilityDot}></p>
                <p>Available</p>
              </div>
              <p style={styles.name}>{item.name}</p>
              <p style={styles.speciality}>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/doctors');
          scrollTo({ top: 0, behavior: 'smooth' });
        }}
        style={styles.button}
      >
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
    margin: '64px 0',
    color: '#1A202C',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  heading: {
    fontSize: '28px',
    fontWeight: '600',
  },
  subText: {
    width: '40%',
    textAlign: 'center',
    fontSize: '14px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '16px',
    paddingTop: '20px',
    width: '100%',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  card: {
    border: '1px solid #90CDF4',
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
    backgroundColor: '#EBF8FF',
  },
  cardBody: {
    padding: '16px',
  },
  availability: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#38A169',
  },
  availabilityDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#38A169',
    borderRadius: '50%',
  },
  name: {
    color: '#1A202C',
    fontSize: '18px',
    fontWeight: '500',
    marginTop: '8px',
  },
  speciality: {
    color: '#4A5568',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#2C5282',
    color: 'white',
    padding: '12px 48px',
    borderRadius: '999px',
    marginTop: '40px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background 0.3s',
  },
  buttonHover: {
    backgroundColor: '#1A365D',
  },
};

export default TopDoctors;
