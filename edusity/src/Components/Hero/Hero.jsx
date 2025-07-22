import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>wE eNSURE bETTER eDUCATION FOR BETTER WORLD</h1>
        <p>
          Edusity isn’t a traditional college or university—it’s a dynamic
          online learning platform designed to empower educators and learners
          across the globe. It offers tools for hosting live or self-paced
          courses, conducting webinars, and managing professional training
          sessions. With features like real-time translation, breakout rooms,
          and interactive whiteboards, Edusity creates a flexible and engaging
          virtual classroom experience. Whether you're an individual instructor
          or part of a large organization, Edusity provides the infrastructure
          to teach, learn, and grow without geographical limits.
        </p>
        <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Hero;
