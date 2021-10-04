import React from "react";
import "./Header.css";
import logo from "../../images/logo.jpg";

import Navbar from "../Navbar/Navbar";


const Header = () => {
  return (
    <div className="header-container ">
      <div className="header d-flex">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div>
          <Navbar></Navbar>

          <h1 className="title">New Level Of Your Success</h1>
        </div>
      </div>

    
    </div>
  );
};

export default Header;
