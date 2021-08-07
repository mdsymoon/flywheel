import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import img from "../../images/steering-wheel.png";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "gray" }} expand="lg">
        <img
          style={{ width: "40px", margin: "0px 10px 0px 10px" }}
          src={img}
          alt=""
        />
        <Navbar.Brand style={{ color: "white" }}>
          <h3>FlyWheel</h3>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{ color: "white" }}
        />
        <Navbar.Collapse id="navbarScroll" style={{ color: "white" }}>
          <Nav
            className="ms-auto my-2 my-lg-0 navbar-expand-lg"
            style={{ maxHeight: "100px", color: "white", margin: "right" }}
          >
            <Nav className="navStyle" >Home</Nav>
            <Nav className="navStyle" >
              destination
            </Nav>
            <Nav className="navStyle">Login</Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="homepage">
        <div className ="homepageText">
          <h1>Where You Want To Go?</h1>
          <h3>Select Any Vehicle</h3>
        </div>
        

      </div>
    </div>
  );
};

export default Homepage;
