
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
                    className="header-button "
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
