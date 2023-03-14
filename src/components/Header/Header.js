import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'App.css'
import {Button, Nav, NavDropdown, Form, Dropdown, Collapse, Col, Row, Container} from 'react-bootstrap';

const Header = () => {
return (
    <div style={{backgroundColor: "#e7f8ff"}}>
        
    <div class="me-5 main-div body">
      <h1> Fork Landing Page</h1>
      <ul>
        <li> How It Works </li>
        <li> Login </li>
      </ul>

      <img src="phone.jpg" class="resize img-fluid" alt="Responsive image"></img>

      <div ms-auto>
        <Button> Login with Venmo </Button>
      </div>
    </div>


      <footer class="text-center fixed-bottom" style={{backgroundColor: "#e7f8ff"}}>
        Made with ❤️ by Team Blu
      </footer>

  </div>
);
};

export default Header;