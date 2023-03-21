import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { VisionCorrection } from '../components/PaymentProcessing/VisionCorrection';
import '@testing-library/jest-dom';

const visionData = {
  items: [
    {name: 'Front and rear brake cables', price: 100},
    {name: 'New set of pedal arms', price: 30},
    {name: 'Labor 3hrs', price: 15} 
  ],
  total: 154.06,
  subTotal: 145,
  tax: 9.06
}


test('test that vision correction is not displayed if no items', () => {
  let sampleData = {
    visionData: {
      fin: {},
      items: [],
      subTotal: -1,
      tax: -1,
      total: -1
    }
  }
  render(<VisionCorrection visionData={sampleData}/>);
  expect(screen.queryByText('Make any corrections to the parsed reciept if nessecary')).not.toBeInTheDocument();
});

test('Test items are displayed correctly', () => {

  render(<VisionCorrection visionData={visionData}/>);

  visionData.items.forEach((item) => {
    expect(screen.getByDisplayValue(item.name)).toBeInTheDocument();
    expect(screen.getByDisplayValue(item.price)).toBeInTheDocument();
  });

  expect(screen.getByDisplayValue(visionData.subTotal)).toBeInTheDocument();
  expect(screen.getByDisplayValue(visionData.tax)).toBeInTheDocument();
});

test('Test that advance function works', () => {
  let retF = jest.fn();

  render(<VisionCorrection visionData={visionData} finishFunc={retF}/>);

  userEvent.click(screen.getByText('Next Step'));
  expect(retF).toHaveBeenCalled();
});

test('Test changing values', () => {
  let sampleData = {
    items: [
      {name: 'Front and rear brake cables', price: 100},
      {name: 'New set of pedal arms', price: 30},
      {name: 'Labor 3hrs', price: 15} 
    ],
    total: 154.06,
    subTotal: 145,
    tax: 9.06
  }

  let retF = jest.fn();

  render(<VisionCorrection visionData={sampleData} finishFunc={retF}/>);

  let box1 = screen.getByDisplayValue(sampleData.items[0].price);
  let box2 = screen.getByDisplayValue(sampleData.items[1].price);

  userEvent.clear(box1);
  userEvent.type(box1, '200');

  userEvent.clear(box2);
  userEvent.type(box2, '300');

  expect(sampleData.items[0].price == 200).toBe(true);
  expect(sampleData.items[1].price == 300).toBe(true);
});