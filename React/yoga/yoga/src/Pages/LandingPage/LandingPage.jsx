import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate();

  function handlebutton(){
    navigate('/yoga-poses'); 
  }
  return (
   <>
   
   <div className="landing-page">
    {/* HeroSection */}
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome, to your yoga sectuary</h1>
        <p>Emrace balance, strength, and inner peace on your transformation yoga jurney.</p>
        <button className='cta-button1' onClick={()=> handlebutton()}>Explore Inner Peace</button>
      </div>
    </div>
   </div>
   
   </>
  )
}

export default LandingPage