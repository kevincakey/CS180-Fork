import React from 'react';
import { render, screen } from '@testing-library/react';
import PaymentHandler from './PaymentHandler';
import PaymentProcessor from './PaymentProcessor';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new JSDOM();
const document = dom.window.document;


test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });



// test('renders PaymentHandler component without errors', () => {
// render(<PaymentHandler />);
// });


test('renders PaymentProcessor component without errors', () => {
  render(<PaymentProcessor />);
});

  
    
  
    
  
 
  
  
  
  
  