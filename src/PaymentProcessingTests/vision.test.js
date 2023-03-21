import React from 'react';
import { render, screen } from '@testing-library/react';
import {binarize, binarizePath, parseResultToBill, Vision} from '../components/PaymentProcessing/vision';
const jsdom = require('jsdom');

class test_Image_Data{
    constructor(){
        this.data = new Uint8ClampedArray();
    }
}

test('test binarize function', () => {
    const imageData = new test_Image_Data();
    expect(binarize(imageData, 128)).toBeDefined();
})

test('test binarizePath function', () => {
    const imageData = new test_Image_Data();
    binarizePath(imageData, 128, 'callback')
    expect(binarizePath(imageData, 128, 'callback')).toBeFalsy();
})

test('test parseResultToBill function', () => {
    const result = {
        data: {
            lines: []
        } 
    }
    expect(parseResultToBill(result)).toBeDefined();
})

test('test vision function exists with no errors', () => {
  let retFunc = jest.fn();
  render(<Vision returnFunc={retFunc}/>);
})