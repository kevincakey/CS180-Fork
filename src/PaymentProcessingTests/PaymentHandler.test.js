import React from 'react';
import { render, screen } from '@testing-library/react';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
import '@testing-library/jest-dom';
import PaymentHandler from '../components/PaymentProcessing/PaymentHandler';

const dom = new JSDOM();
const document = dom.window.document;


test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
});

const userInfoWithItems= [
  {name: 'name1', email: 'sb-uhvss25066906@personal.example.com', itemIndexList: [0, 2]},
  {name: 'name2', email: 'sb-847aoz24933044@personal.example.com', itemIndexList: [1]},
] 
const payeeName="name1"
const visionData={ items: [
  {name: 'Front and rear brake cables', price: 100},
  {name: 'New set of pedal arms', price: 30},
  {name: 'Labor 3hrs', price: 15} 
],
total: 154.06,
subTotal: 145,
tax: 9.06
}


test('Test that all input parameters display correctly', () => {
  const paymentCompleted = jest.fn();

  render(<PaymentHandler 
    userInfoWithItems={userInfoWithItems}
    payeeName={payeeName}
    visionData={visionData} 
    finishFunc={paymentCompleted}/>
  );

  let sendInvoiceButton = screen.getByRole('button', {name: "Send Invoices"});
  let name1Entry = screen.getByText(userInfoWithItems[0].name);
  let name2Entry = screen.getByText(userInfoWithItems[1].name);
  let item1Entry = screen.getByText(visionData.items[0].name);
  let item2Entry = screen.getByText(visionData.items[1].name);
  let item3Entry = screen.getByText(visionData.items[2].name);
  
  expect(name1Entry).toBeInTheDocument();
  expect(name2Entry).toBeInTheDocument();
  expect(item1Entry).toBeInTheDocument();
  expect(item2Entry).toBeInTheDocument();
  expect(item3Entry).toBeInTheDocument();
  expect(sendInvoiceButton).toBeInTheDocument();
});

test('Test that tax is calculated and displayed correctly', () => {
  const paymentCompleted = jest.fn();

  render(<PaymentHandler 
    userInfoWithItems={userInfoWithItems}
    payeeName={payeeName}
    visionData={visionData} 
    finishFunc={paymentCompleted}/>
  );

  let taxAndTotal = userInfoWithItems.map((user) => {
    let total = 0;
    user.itemIndexList.forEach((index) => { 
      total += visionData.items[index].price;
    });

    //normalize to total with tax and tip included
    let totalWithTax = Math.ceil((total/visionData.subTotal) * visionData.total * 100) / 100;

    return (
      totalWithTax
    );
  })

  taxAndTotal.forEach((entry) => {
    let tax = screen.getByText("$" + entry);
    expect(tax).toBeInTheDocument();
  })
  
  
});