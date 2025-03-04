import React from 'react'
import './About.css'


const About = () => {
    
  return (
    <>
    <div className="about-container">
        <h3>About</h3>
        <div className="about2-container">
          <div className="left-side">
            <img src="https://images.pexels.com/photos/7369/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1200" alt="" />
            </div>
            <div className="right-side">
              <label htmlFor="">NAME: <span>SHUBHAM SONAVALE</span></label><br /><br />
              <label htmlFor="">AGE: <span>22</span></label><br /><br />
              <label htmlFor="">DESIGNATION: <span>MERN STACK WEB DEVELOPER</span></label><br /><br />
              {/* <label htmlFor="">NAME: <span>SHUBHAM SONAVALE</span></label> */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi earum sit doloribus, consectetur vitae atque ad aperiam illum aspernatur, illo voluptatem reiciendis quia voluptatum, laudantium facere suscipit cupiditate adipisci consequuntur nesciunt distinctio quod veritatis? Vero voluptates officia quo eveniet porro soluta delectus earum ullam sit totam possimus ducimus, atque molestias. Maxime sed, quod odio earum velit aspernatur eum? Ipsam, qui.</p>
        
        </div>
        </div>
    </div>
    </>
  )
}

export default About