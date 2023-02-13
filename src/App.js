import React, { Component }  from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, Navbar, NavDropdown, Form, Dropdown, Collapse, Col, Row, Container} from 'react-bootstrap';

import './App.css'
//TODO: DEFINE DATABASE ELEMENTS GLOBALLY

//homepage display class
export default class Page extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div style={{backgroundColor: "#e7f8ff"}}>
       <nav class="navbar navbar-expand-lg navbar-light bg-light" >
          <a class="navbar-brand justify-content-end" href="#">Fork</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">How It Works</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Login</a>
              </li>
            </ul>
          </div>

          
        </nav>

        <h1> Fork Landing Page</h1>
        <ul>
          <li> How It Works </li>
          <li> Login </li>
        </ul>
        <Button> Login with Venmo </Button>

          <Navbar bg="light" expand="lg">
          <Nav.Link href="#action1">Made with ❤️ by Team Blu </Nav.Link>
          </Navbar>    

      </div>
    );
  }

}
