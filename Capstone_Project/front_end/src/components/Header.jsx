// // eslint-disable-next-line no-unused-vars
// import React from 'react'
// import { assets } from '../assets/assets'

// const Header = () => {
//   return (
//     <div className=' flex flex-col md:flex-row flex-wrap bg-green-500 rounded-lg px-10 md:px-6 lg:px-10 '>
      
//         {/*------------Left Side----------------*/}
//         <div className='md:w-1/2 flex flex-col items-start justify-center gap-10 py-10 m-auto md:py-[-30px]'>
//             <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
//                 Book Appointment <br/> with Trusted Doctors
//                 </p>           
//          <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
//             <img className='w-28' src={assets.group_profiles} alt="" />
//             <p>Simply browse through our extensive lisst of trusted doctors, <br className='hidden sm:block'/> schedule your appointment hassle-free.</p>
//          </div>
//          <a href="#speciality1" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duratio-300'>
//             Book apointment <img className='w-4' src={assets.arrow_icon} alt="" />
//          </a>
//     </div> 
//     {/* ---------Right Side------------------ */}
//     <div className='md:w-1/3 relative'>

//         <img className='w-full md:absolute bottom-0 h-auto rounded-lg top-25' src={assets.header_img} alt="" />
//     </div>


//     </div>
//   )
// }

// export default Header;

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                backgroundColor: '#22c55e', // Green color
                borderRadius: '8px',
                padding: '40px 20px',
            }}
            className="header-container"
        >
            {/*------------Left Side----------------*/}
            <div
                style={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    gap: '40px',
                    padding: '40px 0',
                    margin: 'auto',
                }}
                className="header-left"
            >
                <p
                    style={{
                        fontSize: '28px',
                        color: 'white',
                        fontWeight: '600',
                        lineHeight: '1.4',
                    }}
                    className="header-text"
                >
                    Book Appointment <br /> with Trusted Doctors
                </p>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '12px',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: '300',
                    }}
                    className="header-info"
                >
                    <img style={{ width: '112px' }} src={assets.group_profiles} alt="" />
                    <p>
                        Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block" />
                        schedule your appointment hassle-free.
                    </p>
                </div>

                <a
                    href="#speciality1"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        backgroundColor: 'white',
                        padding: '12px 32px',
                        borderRadius: '9999px',
                        color: '#4b5563',
                        fontSize: '14px',
                        textDecoration: 'none',
                        margin: 'auto',
                        transition: 'transform 0.3s ease-in-out',
                    }}
                    className="header-button"
                    onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
                    onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                >
                    Book Appointment <img style={{ width: '16px' }} src={assets.arrow_icon} alt="" />
                </a>
            </div>

            {/* ---------Right Side------------------ */}
            <div
                style={{
                    flex: '1',
                    position: 'relative',
                    textAlign: 'center',
                }}
                className="header-right"
            >
                <img
                    style={{
                        width: '100%',
                        maxWidth: '450px',
                        borderRadius: '8px',
                        height: 'auto',
                        marginTop: '20px',
                    }}
                    src={assets.header_img}
                    alt=""
                />
            </div>

            {/* Responsive Styles */}
            <style>
                {`
                @media (min-width: 768px) {
                    .header-container {
                        flex-direction: row !important;
                        padding: 60px 30px;
                    }

                    .header-left {
                        width: 50%;
                        margin: 0;
                    }

                    .header-right {
                        width: 30%;
                        text-align: right;
                    }

                    .header-text {
                        font-size: 36px !important;
                    }

                    .header-button {
                        margin: 0 !important;
                    }
                }

                @media (min-width: 1024px) {
                    .header-text {
                        font-size: 40px !important;
                    }
                }
                `}
            </style>
        </div>
    );
};

export default Header;
