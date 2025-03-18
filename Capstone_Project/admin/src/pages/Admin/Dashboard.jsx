

import { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';

const Dashboard = () => {
  const { doctors, aToken, getAllDoctors, changeAvailability } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);


  return (
    // <div 
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '80vh',
    //     backgroundColor: '#f4f4f9'
    //   }}
    // >
    //   <h2 
    //     style={{
    //       fontSize: '24px',
    //       fontWeight: '600',
    //       color: '#4a4a4a',
    //       backgroundColor: '#ffffff',
    //       padding: '20px',
    //       borderRadius: '10px',
    //       boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
    //     }}
    //   >
    //     Make Changes As Per Your Need
    //   </h2>
    // </div>
    <div className="doctor-list">
    <h1>All Doctors</h1>
    <div className="doctor-container">
      {doctors.map((item, index) => (
        <div className="doctor-card" key={index}>
          <img className="doctor-image" src={item.image} alt="" />
          <div className="doctor-details">
            <p className="doctor-name">{item.name}</p>
            <p className="doctor-speciality">{item.speciality}</p>
            <div className="availability">
              <input
                type="checkbox"
                checked={item.available}
                onChange={() => changeAvailability(item._id)}
              />
              <p>Available</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* CSS Styles */}
    <style jsx="true">{`
      .doctor-list {
        margin: 20px;
        max-height: 90vh;
        max-width: 9 00px ;
        margin-left: 500px;
        margin-top: -750px;
        overflow-y: scroll;
      }

      .doctor-list h1 {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 20px;
      }

      .doctor-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding-top: 20px;
      }

      .doctor-card {
        border: 1px solid #c3c3f5;
        border-radius: 10px;
        max-width: 200px;
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.3s;
      }

      .doctor-card:hover {
        transform: scale(1.05);
      }

      .doctor-image {
        width: 100%;
        height: 150px;
        object-fit: cover;
        background-color: #f0f0ff;
        margin-bottom: 10px;
        transition: background-color 0.3s;
      }

      .doctor-details {
        padding: 10px;
      }

      .doctor-name {
        font-size: 16px;
        font-weight: 500;
        color: #333;
      }

      .doctor-speciality {
        font-size: 14px;
        color: #666;
        margin-top: 5px;
      }

      .availability {
        display: flex;
        align-items: center;
        margin-top: 10px;
        gap: 5px;
      }

      .availability input {
        cursor: pointer;
      }
    `}</style>
  </div>
  );
};

export default Dashboard;
