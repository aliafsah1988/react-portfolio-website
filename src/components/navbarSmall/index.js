import React from "react";
import { Link } from "react-router-dom";

const NavbarSmall = () => {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="menu-icon">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link to={`/`}>Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSmall;
