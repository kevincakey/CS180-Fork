import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, NavDropdown, Form, Dropdown, Collapse, Col, Row, Container} from 'react-bootstrap';
import './App.css'

const Home = () => {
return (
    <div style={{backgroundColor: "#e7f8ff"}}>
        
    <div class="me-5 main-div body">
      <h1> Fork Landing Page</h1>
      <p> Bill splitting, made easy. </p>

      <img src="phone.jpg" class="resize img-fluid" alt="Responsive image"></img>

      <div ms-auto>
        <Button> Login with Venmo </Button>
      </div>
    </div>

  </div>
);
};

export default Home;