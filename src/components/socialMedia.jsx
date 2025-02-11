import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const SocialMediaLinks = () => {
  return (
    <div className="container text-center mt-4">
      <h5>Follow Me</h5>
      <div className="d-flex justify-content-center gap-3">
        <a href="https://www.instagram.com/anurag_prajapati__" target="_blank" rel="noopener noreferrer" className=" text-danger">
          <i className="bi bi-instagram fs-3"></i>
        </a>
        <a href="https://www.linkedin.com/in/anurag-prajapati-25ab8a20b" target="_blank" rel="noopener noreferrer" className=" text-primary">
          <i className="bi bi-linkedin fs-3"></i>
        </a>
        <a href="https://github.com/AnuragPrajapati15" target="_blank" rel="noopener noreferrer" className="text-dark">
          <i className="bi bi-github fs-3"></i>
        </a>
        <a href="https://x.com/anuragpraj68033" target="_blank" rel="noopener noreferrer" className=" text-info">
          <i className="bi bi-twitter-x fs-3"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
