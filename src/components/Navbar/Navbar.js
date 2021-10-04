import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="container row">
       

        <div className="col-md-10">
          <div className="nav-container">
            <ul className="d-flex align-items-end justify-content-end navlink">
              <NavLink to="/home" className="item">
                <li>Home</li>
              </NavLink>
              <NavLink to="/about" className="item">
                <li>About </li>
              </NavLink>
              <NavLink to="/service" className="item">
                <li>Service</li>
              </NavLink>

              <NavLink to="/contact" className="item">
                <li>Contact </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
