import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Dropdown, Collapse, Col, Row} from 'react-bootstrap';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

//homepage display class
export default class Page extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <Payment/>
      </div>
    );
  }


}

class Payment extends React.Component {


  render(){
    return (
        <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons style={{ layout: "vertical" }} />
        </PayPalScriptProvider>
    );
  }
}
