import React, { useState, useEffect } from "react";
import { useLocation, Link } from 'react-router-dom'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [style, setStyle] = useState({ display:'none' });
  const [fullMenu, setFullMenu] = useState(true);

  let location = useLocation();
  
  useEffect( () => {
      if(location.pathname.includes('/projects')) {
        setFullMenu(false);
      } else {
        setFullMenu(true);
      }
    }, [location.pathname]
  ) 

  const toggleNavbarInMobile = () => {
    if(isMenuOpen){
      //close menu
      setStyle({ display:'none' });
    } else {
      setStyle({ display:'block' });
    }
    setMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setStyle({ display:'none' });
    setMenuOpen(false);
  }


  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
        >
          <span className="menu-icon" onClick={toggleNavbarInMobile} style={ fullMenu? null : {color: '#212121'} }>
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" style={style}>
         
          {fullMenu ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <AnchorLink className="nav-link" href="#home" data-scroll-nav="0" onClick={ closeMenu }>
                  Home <span className="sr-only">(current)</span>
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink
                  className="nav-link"
                  href="#about"
                  data-scroll-nav="1"
                  onClick={ closeMenu }
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
                  onClick={ closeMenu }
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
                  onClick={ closeMenu }
                >
                  {" "}
                  Portfolio
                </AnchorLink>
              </li>
            </ul>

          ) : 
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
              <li className="nav-item active">
                <Link to={`/`}>Home</Link>
              </li>
              </li>
            </ul>
    }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
