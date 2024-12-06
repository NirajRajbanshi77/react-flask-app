import React from "react";
import "../Css/NavbarStyle.css";
// import logo from "./Images/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logoSection">
          {/* <img src={logo} alt="logo" className="logoMain" /> */}
          <div className="appName">
            <h2>CricketAnalytics</h2>
          </div>
        </div>
        <nav className="list">
          <NavLink className="listItem" activeClassName="activeItem" to="/Landing">
            Home
          </NavLink>
          <NavLink
            className="listItem"
            activeClassName="activeItem"
            to="/Analysis"
          >
            Analyze
          </NavLink>

          <NavLink
            className="listItem"
            activeClassName="activeItem"
            to="/About"
          >
            About
          </NavLink>

          <NavLink 
          className="listItem"
          activeClassName="activeItem"
          to="/Guide">
            CricKnowledge
          </NavLink>
      
        </nav>
      </div>
    </>
  );
}

export default Navbar;
