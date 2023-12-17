import React from "react";
import logo from "../../assets/hospital.jpg";
import { Link } from 'react-router-dom'
import '../../App.css';


function Header() {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="container-fliud">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>
        <div className="sdn">
          <h4>Sri Durga Nurshing Home</h4>
        </div>
        <div className="sch">
        <Link to="/services" className="fs-4 ">
            NotFound 404
          </Link>
          <Link to="/services" className="fs-4 ">
            Service
          </Link>
          <Link to="/contactus" className="fs-4 ">
            Contact Us
          </Link>
          <Link to="/" className="fs-4 ">
            Home
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
}
export default Header;
