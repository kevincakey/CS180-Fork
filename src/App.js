import React, { Component }  from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Dropdown, Collapse, Col, Row} from 'react-bootstrap';


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
      </div>
    );
  }


}
