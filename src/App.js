import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Components/Homepage/Homepage";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Destination from "./Components/Destination/Destination";
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import img from "./images/steering-wheel.png";

function App() {
  return (
    <div className="App">
    <Router>
      
    <Navbar  fixed="top" bg="light" expand="lg">
  <Container>
    <img style={{width:"30px",marginRight:"10px"}} src={img} alt=""></img>
    <Navbar.Brand href="/home" style={{fontWeight:"bold",fontSize:"25px"}}>FlyWheel</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/home" style={{fontSize:"20px",color:"black"}}>Home</Nav.Link>
        <Nav.Link href="/destination" style={{fontSize:"20px",color:"black"}}>Destination</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        <Switch>
          <Route exact path="/home">
            <Homepage></Homepage>
          </Route>
          <Route path="/about"></Route>
          <Route path="/destination">
            <Destination></Destination>
          </Route>
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
