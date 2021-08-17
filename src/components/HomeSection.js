import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./HomeSection.css";

const HomeSection = () => {
  return (
    <div className="home-container">
      <h1>
        Tech Support
        <br />& <br />
        Front-End Developer
      </h1>
      <p>What are you waiting for?</p>

      <Link to="/Contact" className="home_btns">
        Contact Me
      </Link>
    </div>
  );
};

export default HomeSection;
