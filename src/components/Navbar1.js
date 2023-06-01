import React, { useState } from 'react';
import logo from "../assets/new-logo.png";
import 'bootstrap/dist/css/bootstrap.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top border-bottom">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" width="283" height="34" />
        </a>

        {/* Hamburger Menu */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className={`collapse navbar-collapse justify-content-end ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            {/* Dropdown Button */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Option 1</a></li>
                <li><a className="dropdown-item" href="#">Option 2</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Option 3</a></li>
              </ul>
            </li>

            {/* Regular Navbar items */}
            <li className="nav-item">
              <a className="nav-link" href="/about">Our Candidates</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/search">Search</a>
            </li>
            {/* Add more navbar items as needed */}
          </ul>
        </div>

        {/* Additional Buttons */}
        <div className="d-none d-lg-flex">
          <button className="btn btn-light me-2">Log in</button>
          <button className="btn btn-light border border-danger me-2">Contribute</button>
          <button className="btn btn-danger">Become a donor</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
