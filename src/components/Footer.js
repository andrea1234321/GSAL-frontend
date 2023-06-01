import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: 'white', marginTop: 'auto' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                {/* Left column content */}
              </div>
              <div className="col-md-6">
                {/* Right column content */}
              </div>
            </div>
          </div>
          <div className="col-md-6 text-md-right">
            <p className="text-muted">
              <span className="copyright">
                &copy; 2023 Your Company. All rights reserved.
              </span>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="instagram_logo.png" alt="Instagram" className="social-media-icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="twitter_logo.png" alt="Twitter" className="social-media-icon" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
