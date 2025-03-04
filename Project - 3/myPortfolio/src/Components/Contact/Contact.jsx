import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
    
    <div className="contact-container">
      <form action="" className='form'>
        <input type="text" placeholder='Full Name' /><br />
        <input type="email" placeholder='Email Address' /><br />
        <textarea name="" id="">Your Message</textarea><br />
        <button>Send Message</button>
      </form>
    </div>
    
    </>
  )
}

export default Contact