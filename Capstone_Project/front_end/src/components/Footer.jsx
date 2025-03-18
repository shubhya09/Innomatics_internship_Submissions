
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
                    <h3
                        onClick={() => navigate('/')}
                        style={{
                            color: '#22c55e', // Green color
                            fontWeight: 'bold',
                            textAlign: 'center',
                            cursor: 'pointer',
                            backgroundColor: '#f9fafb',
                            padding: '5px',
                            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                            textTransform: 'uppercase',
                            maxWidth: '100px',
                            margin: '0 auto',
                        }}
                    >
                        Medicare
                    </h3>
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
                    Copyright 2025@ <span style={{ color: '#22c55e' }}>MEDICARE</span> - All Rights Reserved
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
