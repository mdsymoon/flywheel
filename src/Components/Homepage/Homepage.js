import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import "./Homepage.css";
import Cards from "./../Cards/Cards";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage ">
      <div className="homepageText">
        <h1>Where You Want To Go?</h1>
        <h3>Select Any Vehicle</h3>
      </div>

      <Cards></Cards>
    </div>
  );
};

export default Homepage;
