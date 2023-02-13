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
      <div>
       
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
