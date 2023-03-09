import React, { Component } from 'react';
import tesseract from 'tesseract.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Dropdown, Collapse, Col, Row} from 'react-bootstrap';
import Vision from "./vision.js";


//TODO: DEFINE DATABASE ELEMENTS GLOBALLY

//homepage display class
export default class Page extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <VisionHandler/>
      </div>
    );
  }


}


class VisionHandler extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fin: {},
      items: [],
      subTotal: -1,
      tax: -1,
      total: -1
    }
    this.retFunc = (data) => {
      this.setState({ ...data});
      console.log(data);
    };

  }


  render(){
    return( <Vision returnFunc={this.retFunc}/> );
  }


}
