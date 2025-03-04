import React, { useState } from "react";
import "./Sidebar.css";


const Sidebar = () => {
  const [showContacts, setShowContacts] = useState(true);

  return (
    <aside className={`sidebar ${showContacts ? "expanded" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?ga=GA1.1.1685225350.1734760378&semt=ais_hybrid" alt="Shubham" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Shubham Sonavale">Shubham Sonavale</h1>
          <p className="title">Full Stack Developer</p>
        </div>

        <button className="info_more-btn" onClick={() => setShowContacts(!showContacts)}>
          {/* <span>{showContacts ? "Hide Contacts" : "Show Contacts"}</span> */}
          <ion-icon name={showContacts ? "chevron-up" : "chevron-down"}></ion-icon>
        </button>
      </div>

      {showContacts && (
        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box"><ion-icon name="mail-outline"></ion-icon></div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mailto:shubhamsonawale111@gmail.com" className="contact-link">shubham@gmail.com</a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box"><ion-icon name="phone-portrait-outline"></ion-icon></div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="tel:+919834108946" className="contact-link">+91 9834108946</a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box"><ion-icon name="calendar-outline"></ion-icon></div>
              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <time dateTime="2003-03-22">22 March, 2003</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box"><ion-icon name="location-outline"></ion-icon></div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>Pune, India</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            {/* <li className="social-item"><a href="#" className="social-link"><ion-icon name="logo-facebook"></ion-icon></a></li> */}
            {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
            <li className="social-item"><a href="#" className="social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
            <li className="social-item"><a href="#" className="social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
          </ul>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
