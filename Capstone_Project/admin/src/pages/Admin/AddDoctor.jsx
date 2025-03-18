import { useState, useContext } from 'react';
import React from 'react';
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';
import { AdminContext } from '../../context/AdminContext';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const AddDoctor = () => {
  const [docImg, setDocImg] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('1 Year');
  const [fees, setFees] = useState('');
  const [about, setAbout] = useState('');
  const [speciality, setSpeciality] = useState('General physician');
  const [degree, setDegree] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (!docImg) {
        return toast.error('Please select a doctor image.');
      }

      const formData = new FormData();
      formData.append('image', docImg);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('experience', experience);
      formData.append('fees', Number(fees));
      formData.append('about', about);
      formData.append('speciality', speciality);
      formData.append('degree', degree);
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));

      const { data } = await axios.post(`${backendUrl}/api/admin/add-doctor`, formData, {
        headers: { aToken },
      });

      if (data.success) {
        toast.success(data.message);
        setDocImg('');
        setName('');
        setEmail('');
        setPassword('');
        setExperience('1 Year');
        setFees('');
        setAbout('');
        setSpeciality('General physician');
        setDegree('');
        setAddress1('');
        setAddress2('');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('An error occurred while adding the doctor.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} style={{ margin: '20px', maxWidth: '1200px' }}>
      {/* <p style={{ marginBottom: '15px', fontSize: '18px', fontWeight: '500',marginLeft: '300px' }}>Add Doctor</p> */}

      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          overflowY: 'auto',
          maxHeight: '90vh',
          marginLeft: '300px',
          marginTop: '-750px'

        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
          <label htmlFor="doc-img" style={{ cursor: 'pointer' }}>
            <img
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt="Doctor"
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#f0f0f0',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
            />
          </label>
          <input
            type="file"
            id="doc-img"
            hidden
            onChange={(e) => setDocImg(e.target.files[0])}
          />
          <p>Upload Doctor <b>Picture</b></p>
        </div>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {/* Left Section */}
          <div style={{ flex: '1', minWidth: '250px' }}>
            <p>Doctor Name</p>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
            />

            <p style={{ marginTop: '10px' }}>Doctor Email</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
            />

            <p style={{ marginTop: '10px' }}>Doctor Password</p>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
            />

            <p style={{ marginTop: '10px' }}>Experience</p>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={`${i + 1} Year`}>{i + 1} Year</option>
              ))}
            </select>
          </div>

          {/* Right Section */}
          <div style={{ flex: '1', minWidth: '250px' }}>
            <p>Speciality</p>
            <input
              type="text"
              placeholder="Speciality"
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
              required
              style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
            />

            <p style={{ marginTop: '10px' }}>Education</p>
            <input
              type="text"
              placeholder="Degree"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              required
              style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
            />

            <p style={{ marginTop: '10px' }}>Fees</p>
            <input
              type="number"
              placeholder="Fees"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
              required
              style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
            />
          </div>
        </div>

        <p style={{ marginTop: '15px' }}>About Doctor</p>
        <textarea
          placeholder="Write about doctor"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          rows={4}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
          required
        />

        <button type="submit" style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
