// // eslint-disable-next-line no-unused-vars
// import React from 'react'
// // import {assets} from '../assets/assets'
// // import Navlink from 'navlin
// import { useNavigate } from 'react-router-dom'

// const Footer = () => {
//     const navigate = useNavigate();
//   return (
//     <div className='md:mx-10'>

//         <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
//             {/* ----------Left Section-----------*/}
       
//            <div>
//                 {/* <img className='mb-5 w-40' src={assets.logo} alt="" /> */}
//                 <h1 onClick={()=> navigate('/')} className='text-green-500 border-x-fuchsia-50 font-bold text-center cursor-pointer bg-gray-50 p-3 shadow-lg uppercase w-500'>Medicare</h1>
//                 <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat veniam natus debitis quis delectus alias repudiandae. Assumenda tempora debitis sapiente consectetur, enim laudantium ex, voluptatum iste minus, consequuntur optio quae?</p>

//            </div>

//             {/* ----------Center Section */}
//             <div>
//                 <p className='text-xl font-medium mb-5'>Company</p>
//                 <ul className='flex flex-col gap-2 text-gray-600'>
//                     <li>Home</li>
//                     <li>About Us</li>
//                     <li>Contact Us</li>
//                     <li>Privacy Policy</li>
//                 </ul>
//             </div>
//             {/* ------Right Section----------- */}

//             <div>
//                 <p className='text-xl font-medium mb-5'>Get In Touch</p>
//                 <ul className='flex flex-col gap-2 text-gray-600'>
//                 <li>+91-45-874-265654</li>
//                 <li>shubhamDev@gmail.com</li>
//                 </ul>
//             </div>
//         </div>

//          {/* ---------Copyright Text */}
       
//         <div>
//             <div>
//                 <hr />
//                 <p className='py-5 text-sm text-center'>Copyright 2024@ <span className='text-green-500'>MEDICARE</span>- All Rights Reserved</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 20px' }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '56px',
                    marginTop: '160px',
                    fontSize: '14px',
                }}
                className="footer-grid"
            >
                {/* ----------Left Section----------- */}
                <div>
                    <h1
                        onClick={() => navigate('/')}
                        style={{
                            color: '#22c55e', // Green color
                            fontWeight: 'bold',
                            textAlign: 'center',
                            cursor: 'pointer',
                            backgroundColor: '#f9fafb',
                            padding: '12px',
                            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                            textTransform: 'uppercase',
                            maxWidth: '500px',
                            margin: '0 auto',
                        }}
                    >
                        Medicare
                    </h1>
                    <p
                        style={{
                            color: '#4b5563', // Gray color
                            lineHeight: '1.6',
                            marginTop: '10px',
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat veniam natus debitis quis
                        delectus alias repudiandae. Assumenda tempora debitis sapiente consectetur, enim laudantium ex,
                        voluptatum iste minus, consequuntur optio quae?
                    </p>
                </div>

                {/* ----------Center Section */}  
                <div>
                    <p style={{ fontSize: '18px', fontWeight: '500', marginBottom: '20px' }}>Company</p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#4b5563' }}>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* ----------Right Section */}  
                <div>
                    <p style={{ fontSize: '18px', fontWeight: '500', marginBottom: '20px' }}>Get In Touch</p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#4b5563' }}>
                        <li>+91-45-874-265654</li>
                        <li>shubhamDev@gmail.com</li>
                    </ul>
                </div>
            </div>

            {/* ---------Copyright Text */}  
            <div>
                <hr />
                <p style={{ padding: '20px 0', fontSize: '14px', textAlign: 'center' }}>
                    Copyright 2024@ <span style={{ color: '#22c55e' }}>MEDICARE</span> - All Rights Reserved
                </p>
            </div>

            {/* Responsive Styles */}
            <style>
                {`
                @media (min-width: 640px) {
                    .footer-grid {
                        display: grid !important;
                        grid-template-columns: 3fr 1fr 1fr;
                    }
                }
                `}
            </style>
        </div>
    );
};

export default Footer;
