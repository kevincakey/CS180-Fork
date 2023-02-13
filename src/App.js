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
       <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e7f8ff"}}>
          <a class="navbar-brand justify-content-end me-5" href="#" style={{backgroundColor: "#e7f8ff"}}>Fork</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse me-4" id="navbarSupportedContent">
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

        <div class="me-5">
          <h1> Fork Landing Page</h1>
          <ul>
            <li> How It Works </li>
            <li> Login </li>
          </ul>

          <div ms-auto>
            <Button> Login with Venmo </Button>
          </div>
        </div>
          

          <footer class="text-center fixed-bottom" style={{backgroundColor: "#e7f8ff"}}>
            Made with ❤️ by Team Blu
          </footer>

      </div>
    );
  }

}
