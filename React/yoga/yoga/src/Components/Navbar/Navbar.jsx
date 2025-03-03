import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, [])

  const handleLogout = () =>{
     localStorage.removeItem('user');
     setUser(null);
     navigate('/login')
  }


  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/yoga-poses">Yoga Poses</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Linkbout">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">Contact</Link>
              </li>
              {user ? (
                <>
                  <li className='nav_item'>
                    <span className="nav_link">Welcome, <strong>{user.username}</strong></span>
                  </li>

                  {/* logout */}
                  <li className="nav-item">
                    <button className='nav-link btn btn-link' onClick={handleLogout}>Logout</button>
                  </li>
                </>
              ) :
                (
                  <>
                    <li class="nav-item">
                      <Link class="nav-link" to="/login">Login</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/signup">SignUp</Link>
                    </li>
                  </>
                )
              }
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar