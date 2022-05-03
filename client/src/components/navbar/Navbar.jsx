import React from "react";
import "./navbar.css";
import logo from "../../../assets/images/logo.png";
const Navbar = () => {
  return (
    <nav className="container navbar__container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="actions">
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </nav>
  );
};

export default Navbar;
