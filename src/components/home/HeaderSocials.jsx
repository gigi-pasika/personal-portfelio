import React from "react";
import "./home.css";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/gigipasikashvili/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=100009328150175"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-facebook"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/giorgi-pasikashvili-b50631290/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/dashboard"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
