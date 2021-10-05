import React from "react";
import "./Header.css";
import logo from "../../images/logo.jpg";

import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Navbar></Navbar>
      </div>

      <div>
        <div className="d-flex justify-content-evenly align-items-center">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <h1 className="header-title">New Level Of Your Success <i class="fas fa-check-circle"></i></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
