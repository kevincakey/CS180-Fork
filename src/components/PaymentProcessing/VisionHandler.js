import React, { Component } from 'react';
import {default as Vision} from "./vision.js";

export default class VisionHandler extends React.Component {
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
