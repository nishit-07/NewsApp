import React, { Component } from 'react'
import { Link } from 'react-router-dom';
const Navbar=()=>{

    return (
      <div>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
    <div className="container-fluid">
    <Link className="navbar-brand" to="#">NewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">

      <ul className="navbar-nav">
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="">Home</Link></li>
        {/* <li className="nav-item"><Link className="nav-link" to="About">About</Link></li> */}
        <li className="nav-item"><Link className="nav-link" to="bussiness">bussiness</Link></li>
        <li className="nav-item"><Link className="nav-link" to="entertainment">entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="general">general</Link></li>
        <li className="nav-item"><Link className="nav-link"to="health">health</Link></li>
        <li className="nav-item"><Link className="nav-link"to="science">science</Link></li>
        <li className="nav-item"><Link className="nav-link" to="sports">sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="technology">technology</Link> </li>
     </ul>

    </div>

  </div>
</nav>
      </div>
    )

}
export default Navbar
