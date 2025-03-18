
// eslint-disable-next-line no-unused-vars
import React from 'react';

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
            {/* <div
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
            </div> */}

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
