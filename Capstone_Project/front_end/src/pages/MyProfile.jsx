// import React, { useContext, useState } from 'react'
// import { AppContext } from '../context/AppContext'


// const MyProfile = () => {

//   const {userData, setUserData} = useContext(AppContext)

//   const [isEdit, setIsEdit] = useState(false)

//   return (
//     <div className='max-w-lg flex flex-col gap-2 text-sm'>

//       <img className='w-36 rounded ' src={userData.image} alt="" />

//       {
//         isEdit ?
//           <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={(e => setUserData(prev => ({ ...prev, phone: e.target.value })))} />
//           : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
//       }
//       <hr className='bg-zinc-400 h-[1px] border-none' />

//       <div>
//         <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
//         <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
//           <p className='font-medium'>Email id: </p>
//           <p className='text-blue-500'>{userData.email}</p>
//           <p className='font-medium'>Phone:</p>

//           {
//             isEdit ?
//               <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={(e => setUserData(prev => ({ ...prev, name: e.target.value })))} />
//               : <p className='text-blue-400'>{userData.phone}</p>
//           }

//           <p className='font-medium'>Address:</p>
//           {
//             isEdit
//               ? <p>
//                 <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
//                 <br />
//                 <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
//               </p>
//               : <p className='text-gray-500'>
//                 {userData.address.line1}
//                 <br />
//                 {userData.address.line2}
//               </p>
//           }

//         </div>

//         <div>
//           <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
//           <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
//             <p className='font-medium'>Gender:</p>
//             {
//               isEdit
//                 ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                 </select>
//                 : <p className='text-gray-400'>{userData.gender}</p>
//             }
//             <p className='font-medium'>Birthday:</p>
//             {
//               isEdit 
//               ? <input className='max-w-28 bg-gray-100' type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob}/>
//               : <p className='text-gray-400'>{userData.dob}</p>
//             }
//           </div>
//         </div>

//         <div className='mt-10'>
//           {
//             isEdit
//             ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(false)}>Save Information</button>
//             : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(true)}>Edit</button>
//           }
//         </div>

//       </div>

//     </div>
//   )
// }

// export default MyProfile


import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const MyProfile = () => {
  const { userData, setUserData } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div style={styles.container}>
      <img src={userData.image} alt="" style={styles.profileImage} />

      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
          style={styles.inputLarge}
        />
      ) : (
        <p style={styles.name}>{userData.name}</p>
      )}

      <hr style={styles.divider} />

      <div>
        <p style={styles.sectionTitle}>CONTACT INFORMATION</p>
        <div style={styles.gridContainer}>
          <p style={styles.label}>Email ID:</p>
          <p style={styles.email}>{userData.email}</p>

          <p style={styles.label}>Phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
              style={styles.input}
            />
          ) : (
            <p style={styles.linkText}>{userData.phone}</p>
          )}

          <p style={styles.label}>Address:</p>
          {isEdit ? (
            <div>
              <input
                type="text"
                value={userData.address.line1}
                onChange={(e) => setUserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line1: e.target.value },
                }))}
                style={styles.input}
              />
              <br />
              <input
                type="text"
                value={userData.address.line2}
                onChange={(e) => setUserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line2: e.target.value },
                }))}
                style={styles.input}
              />
            </div>
          ) : (
            <p style={styles.textGray}>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>

        <div>
          <p style={styles.sectionTitle}>BASIC INFORMATION</p>
          <div style={styles.gridContainer}>
            <p style={styles.label}>Gender:</p>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
                style={styles.select}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p style={styles.textGray}>{userData.gender}</p>
            )}

            <p style={styles.label}>Birthday:</p>
            {isEdit ? (
              <input
                type="date"
                value={userData.dob}
                onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
                style={styles.inputSmall}
              />
            ) : (
              <p style={styles.textGray}>{userData.dob}</p>
            )}
          </div>
        </div>

        <div style={styles.buttonContainer}>
          {isEdit ? (
            <button style={styles.button} onClick={() => setIsEdit(false)}>
              Save Information
            </button>
          ) : (
            <button style={styles.button} onClick={() => setIsEdit(true)}>
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


const styles = {
  container: {
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    fontSize: '14px',
  },
  profileImage: {
    width: '144px',
    borderRadius: '6px',
  },
  name: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#222',
    marginTop: '16px',
  },
  inputLarge: {
    fontSize: '24px',
    fontWeight: '600',
    backgroundColor: '#f9f9f9',
    padding: '5px',
    border: '1px solid #ccc',
    maxWidth: '240px',
    marginTop: '16px',
  },
  divider: {
    backgroundColor: '#bbb',
    height: '1px',
    border: 'none',
    marginTop: '10px',
  },
  sectionTitle: {
    color: '#666',
    textDecoration: 'underline',
    marginTop: '16px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gap: '10px',
    marginTop: '10px',
    color: '#444',
  },
  label: {
    fontWeight: '600',
  },
  email: {
    color: '#007bff',
  },
  linkText: {
    color: '#007bff',
    cursor: 'pointer',
  },
  textGray: {
    color: '#555',
  },
  input: {
    backgroundColor: '#f9f9f9',
    padding: '5px',
    border: '1px solid #ccc',
    maxWidth: '200px',
  },
  select: {
    backgroundColor: '#f9f9f9',
    padding: '5px',
    border: '1px solid #ccc',
    maxWidth: '80px',
  },
  inputSmall: {
    backgroundColor: '#f9f9f9',
    padding: '5px',
    border: '1px solid #ccc',
    maxWidth: '120px',
  },
  buttonContainer: {
    marginTop: '24px',
  },
  button: {
    padding: '10px 24px',
    border: '1px solid #007bff',
    borderRadius: '20px',
    backgroundColor: 'white',
    color: '#007bff',
    cursor: 'pointer',
    transition: '0.3s',
  },
};


styles.button[':hover'] = {
  backgroundColor: '#007bff',
  color: 'white',
};

export default MyProfile;
