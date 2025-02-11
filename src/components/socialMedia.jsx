import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SocialMediaLinks = () => {
  return (
    <div className="d-flex justify-content-center gap-3 mt-4 ">
      <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon text-light">
        <i className="fab fa-instagram fs-3"></i>
      </a>
      <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon text-light">
        <i className="fab fa-linkedin fs-3"></i>
      </a>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon text-light">
        <i className="fab fa-github fs-3"></i>
      </a>
      <a href="https://x.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon text-light">
        <i className="fab fa-x fs-3"></i>
      </a>
    </div>
  );
};

export default SocialMediaLinks;
