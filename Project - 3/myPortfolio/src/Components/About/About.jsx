import React from 'react'
import './About.css'


const About = () => {

  return (
    <>
      <div className="about-container">
        {/* <h3>About</h3> */}
        <div className="about2-container">
          <div className="left-side">
            <img src="https://images.pexels.com/photos/7369/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1200" alt="" />
            <div>
              <h4 className='h4-about'>What i'm doing</h4>
              <div className="container-cs">

                <div className="cs">
                  <h6>Web design</h6>
                  <p>The most modern and high-quality design made at a professional level.</p>
                </div>

                
                <div className="cs">
                  <h6>Web Development</h6>
                  <p>High-quality development of sites at the professional level.</p>
                </div>

                {/* <div className="cs">
                  <h5>Web Development</h5>
                  <p>High-quality development of sites at the professional level.</p>
                </div>
                 */}
              </div>
            </div>
          </div>
          <div className="right-side">
            <label htmlFor=""><span className='span-about'>NAME:</span> SHUBHAM SONAVALE</label><br /><br />
            <label htmlFor=""><span className='span-about'>AGE: </span>22</label><br /><br />
            <label htmlFor=""><span className='span-about'>DESIGNATION: </span>MERN STACK WEB DEVELOPER</label><br /><br />
            {/* <label htmlFor="">NAME: <span>SHUBHAM SONAVALE</span></label> */}
           <p>🚀 I'm Creative Full Stack Developer 🚀 from Pune, India, working in web development. I enjoy turning complex problems into simple, beautiful and intuitive designs.<br /><br />

Hello! I am currently pursuing a Bachelor's degree in Information Technology, with a passion for coding and a commitment to enhancing my competitive programming skills. I have hands-on experience in development, particularly with the MERN stack. I am eager to further my expertise through an internship in a product-based company. As a self-taught individual, I thrive on challenges and am dedicated to achieving outstanding results in every project I take on. Always motivated to learn and grow, I am excited about the opportunities that lie ahead.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About