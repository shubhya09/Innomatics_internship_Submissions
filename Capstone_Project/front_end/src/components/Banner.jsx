// // eslint-disable-next-line no-unused-vars
// import React from 'react'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'

// const Banner = () => {
//     const navigate = useNavigate()
//   return (
//     <div className='flex bg-green-500 rounded-lg px-6 sm:px-14 lg:px-12 my-20 md:mx-10 '>
//         {/* ---------Left Side-------------- */}

//         <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
//             <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white '>
//                 <p>Book Appointment</p>
//                 <p className='mt-4'>With 100+ Trusted Doctors</p>
//             </div>
//             <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className=' bg-white  text-gray-600 text-sm px-7 py-3 rounded-full mt-10 hover:scale-105 transition-all'>Create Account</button>
//         </div>

//         {/* ---------Right Side-------------- */}

//         <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
//             <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
//         </div>
//     </div>
//   )
// }

// export default Banner


// eslint-disable-next-line no-unused-vars
import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                display: 'flex',
                backgroundColor: '#22c55e', // Green color
                borderRadius: '8px',
                padding: '24px',
                margin: '80px auto',
                alignItems: 'center',
            }}
        >
            {/* ---------Left Side-------------- */}
            <div
                style={{
                    flex: 1,
                    padding: '32px 0',
                }}
            >
                <div
                    style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: 'white',
                    }}
                >
                    <p>Book Appointment</p>
                    <p style={{ marginTop: '16px', fontSize: '24px' }}>With 100+ Trusted Doctors</p>
                </div>
                <button
                    onClick={() => {
                        navigate('/login');
                        scrollTo(0, 0);
                    }}
                    style={{
                        backgroundColor: 'white',
                        color: '#4b5563', // Gray color
                        fontSize: '14px',
                        padding: '12px 28px',
                        borderRadius: '9999px',
                        marginTop: '40px',
                        cursor: 'pointer',
                        border: 'none',
                        transition: 'transform 0.3s ease-in-out',
                    }}
                    onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
                    onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                >
                    Create Account
                </button>
            </div>

            {/* ---------Right Side-------------- */}
            <div
                style={{
                    display: 'none',
                    position: 'relative',
                    width: '50%',
                }}
                className="banner-right"
            >
                <img
                    src={assets.appointment_img}
                    alt=""
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                        width: '100%',
                        maxWidth: '370px',
                    }}
                />
            </div>

            {/* Responsive Design */}
            <style>
                {`
                @media (min-width: 640px) {
                    .banner-text {
                        font-size: 24px;
                    }
                }

                @media (min-width: 768px) {
                    .banner-right {
                        display: block !important;
                    }
                }

                @media (min-width: 1024px) {
                    .banner-left {
                        padding: 64px 20px;
                    }

                    .banner-text {
                        font-size: 40px;
                    }
                }
                `}
            </style>
        </div>
    );
};

export default Banner;
