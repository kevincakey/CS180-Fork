/**import React, { Component }, { useState }from 'react';
import tesseract from tesseract.js
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

      </div>
    );
  }


} */

import Vision from "./vision.js";
export default function App() {
  return (
    <Vision />
  );
}