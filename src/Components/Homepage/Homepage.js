import React from "react";


import "./Homepage.css";
import Cards from "./../Cards/Cards";


const Homepage = () => {
  return (
    <div className="homepage ">
      <div className="homepageText container">
        <h1>Where You Want To Go?</h1>
        <h3>Hire Any Vehicle</h3>
      </div>

      <Cards></Cards>
    </div>
  );
};

export default Homepage;
