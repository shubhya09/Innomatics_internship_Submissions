import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
    {/* <h1>Projects <span className='h11'>Created</span> By Me</h1> */}
    <div className="card-containerr">
        <div className="card mb-3 card2">
          <img
            src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body card-body">
            <h5 className="card-title">Hospital Application</h5>
            {/* <p className="card-text">This is a wider card with supporting text content.</p> */}
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>

        <div className="card mb-3 card2">
          <img
            src="https://images.pexels.com/photos/3277806/pexels-photo-3277806.jpeg?auto=compress&cs=tinysrgb&w=1200"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body card-body">
            <h5 className="card-title">CRUD Application</h5>
            {/* <p className="card-text">This is a wider card with supporting text content.</p> */}
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>

        <div className="card mb-3 card2">
          <img
            src="https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1200"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body card-body">
            <h5 className="card-title">Machine Learning Model</h5>
            {/* <p className="card-text">This is a wider card with supporting text content.</p> */}
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home