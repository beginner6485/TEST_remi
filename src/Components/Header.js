import "../Styles/HeaderIndex.css"
import Logo from "../Assets/logo/logo chez fanfan sans fond blanc.png"
import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    const scrollToMenuSection = () => {
      const menuSection = document.getElementById('MenuID');
      if (menuSection) {
        setTimeout(() => {
          menuSection.scrollIntoView({ behavior: 'smooth' });
        }, 100); 
      }
    };
  
    return (
      <div className="Body">
        <div className="HeaderBanner">
          <div className="Image" alt="Background_Food"></div>
          <div className="LogoBanner">
            <img src={Logo} className="Logo" alt="Logo" />
            <div className="SpaceBanner">
              <nav className="NavBanner">
                <Link to="/" className="Link">
                  Accueil
                </Link>
                <a
                  href="/#MenuID"
                  onClick={scrollToMenuSection}
                  className="Link"
                >
                  Menu
                </a>
                <Link to="/Traiteur" className="Link">
                  Traiteur
                </Link>
                <Link to="/Contact" className="Link">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  