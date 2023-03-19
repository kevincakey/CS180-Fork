import React from 'react';
import { render, screen } from '@testing-library/react';
import PaymentHandler from './PaymentHandler';
import PaymentProcessor from './PaymentProcessor';
import {UIWT} from './PaymentHandler'
import InputInfo from './InputInfo';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new JSDOM();
const document = dom.window.document;


test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });



test('renders PaymentHandler component without errors', () => {
  render(<PaymentHandler />);
});


test('renders PaymentProcessor component without errors', () => {
  render(<PaymentProcessor />);
});

test('renders InputInfo component without errors', () => {
render(<InputInfo />);
});

// test('subtotal calculates correctly', () => {
//   if(props.total > 0 && props.totalWithTax > 0){
//     expect(this.add(props.total, props.totalWithTax-props.total)).toBe(props.totalWithTax);
//   }
// });
test('user info with items input recieved', () => {
  if(UIWT){
    return true;
  } else{
    return undefined;
  }
})
  
    
  
    
  
 
  
  
  
  
  