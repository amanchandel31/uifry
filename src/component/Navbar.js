import React from 'react'
import logo from "../images/Group 35944.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
          <a class="navbar-brand" to="/"><img src={logo} alt="" srcset="" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" to="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" to="#">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" to="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" to="#">Features</a>
              </li>
              
            </ul>
            <form class="d-flex" role="search">
              <button class="btn btn-outline-success" className='btn' type="submit">Download</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
