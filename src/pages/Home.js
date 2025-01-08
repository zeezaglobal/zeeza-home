import React from "react";
import "./Home.css"; // Make sure to create a CSS file for styling
import logo from "../img/zeeza-icon.png";
const Home = () => {
  return (
    <div className="home-container">
      {/* Left Section */}
      <div className="left-section">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="heading">
          Custom Software <br /> Solution
        </h1>
        <p className="subtext">
          Ready to transform your vision into reality? Let’s create something
          extraordinary together!
        </p>
      <h2 className="textButton">Contact Us<i className="fas fa-arrow-right"></i></h2>
      </div>

      
      <div className="right-section">
        <div className="card">Card 1 Content</div>
        <div className="card">Card 2 Content</div>
        <div className="card">Card 3 Content</div>
      </div>
    </div>
  );
};

export default Home;
