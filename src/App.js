import React, { Component } from 'react';
import PaymentHandler from './components/PaymentHandler.js'

//homepage display class
export default class Page extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return(<PaymentHandler/>);
  }
}
