import React, { Component } from 'react';
import VisionHandler from './components/VisionHandler.js'
import PaymentHandler from './components/PaymentHandler.js'

//homepage display class
export default class Page extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <VisionHandler/>
        <PaymentHandler/>
      </div>
    );
  }
}
