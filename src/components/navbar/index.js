import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const navbar = () => {
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
              <AnchorLink className="nav-link" href="#home" data-scroll-nav="0">
                Home <span className="sr-only">(current)</span>
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink
                className="nav-link"
                href="#about"
                data-scroll-nav="1"
              >
                {" "}
                About
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink
                className="nav-link"
                href="#workCategories"
                data-scroll-nav="2"
              >
                {" "}
                Fields
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink
                className="nav-link"
                href="#portfolio"
                data-scroll-nav="3"
              >
                {" "}
                Portfolio
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
