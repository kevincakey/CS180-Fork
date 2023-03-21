import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AssignItems from '../components/PaymentProcessing/AssignItems';

const sampleInfo = [
  {
    name: "Evan",
    email: "e@google.com"
  },
  {
    name: "John",
    email: "j@google.com"
  }
];

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

test('Test items are displayed correctly', () => {
  let retF = jest.fn((returnData) => { 
    
  });

  render(<AssignItems 
    userInfo={sampleInfo} 
    visionData={visionData} 
    finishFunc={retF}
  />);

  visionData.items.forEach((item, index) => {
    let card = screen.getByText(item.name); //these line will fail if the object doesnt exist
    let price = screen.getByText("$" + item.price);
  });

});

test('Test items with one selection change', () => {
  let retF = jest.fn((returnData) => { 
    expect(returnData[0].name).toEqual("Evan");
    expect(returnData[0].itemIndexList).toEqual([0, 2]);
    expect(returnData[1].name).toEqual("John");
    expect(returnData[1].itemIndexList).toEqual([1]);
  });

  render(<AssignItems 
    userInfo={sampleInfo} 
    visionData={visionData} 
    finishFunc={retF}
  />);

  let selectionBox1 = screen.getByTestId('selectionBox1');
  let nextButton = screen.getByRole('button', {name: "Next Step"});

  userEvent.selectOptions(selectionBox1, "John");
  userEvent.click(nextButton);
});

test('Test items with all selections changed', () => {
  let retF = jest.fn((returnData) => { 
    expect(returnData[0].name).toEqual("Evan");
    expect(returnData[0].itemIndexList).toEqual([]);
    expect(returnData[1].name).toEqual("John");
    expect(returnData[1].itemIndexList).toEqual([ 0, 1, 2 ]);
  });

  render(<AssignItems 
    userInfo={sampleInfo} 
    visionData={visionData} 
    finishFunc={retF}
  />);

  let selectionBox0 = screen.getByTestId('selectionBox0');
  let selectionBox1 = screen.getByTestId('selectionBox1');
  let selectionBox2 = screen.getByTestId('selectionBox2');
  let nextButton = screen.getByRole('button', {name: "Next Step"});

  userEvent.selectOptions(selectionBox0, "John");
  userEvent.selectOptions(selectionBox1, "John");
  userEvent.selectOptions(selectionBox2, "John");
  
  userEvent.click(nextButton);
});

test('Test 10 items with 10 names all changed', () => {
  let retF = jest.fn((returnData) => { 
    returnData.forEach((item, index) => {
      expect(item.name).toEqual(sampleInfo[index].name);
      expect(item.itemIndexList).toEqual([index]);
    });
  });

  let visionData = {
    items: [
      { name: 'item0', price: 100 },
      { name: 'item1', price: 30 },
      { name: 'item2', price: 15 },
      { name: 'item3', price: 100 },
      { name: 'item4', price: 30 },
      { name: 'item5', price: 15 },
      { name: 'item6', price: 100 },
      { name: 'item7', price: 30 },
      { name: 'item8', price: 15 },
      { name: 'item9', price: 15 }
    ],
    total: 154.06,
    subTotal: 145,
    tax: 9.06
  }

  let sampleInfo = [
    { name: 'name0', email: '0@google.com' },
    { name: 'name1', email: '1@google.com' },
    { name: 'name2', email: '2@google.com' },
    { name: 'name3', email: '3@google.com' },
    { name: 'name4', email: '4@google.com' },
    { name: 'name5', email: '5@google.com' },
    { name: 'name6', email: '6@google.com' },
    { name: 'name7', email: '7@google.com' },
    { name: 'name8', email: '8@google.com' },
    { name: 'name9', email: '9@google.com' }
  ];

  render(<AssignItems 
    userInfo={sampleInfo} 
    visionData={visionData} 
    finishFunc={retF}
  />);

  visionData.items.forEach((item, index) => {
    let selectionBox = screen.getByTestId('selectionBox'+index);
    userEvent.selectOptions(selectionBox, sampleInfo[index].name);
  });

  let nextButton = screen.getByRole('button', {name: "Next Step"});
  userEvent.click(nextButton);
});

test('Test changing a name and then changing it back', () => {

  let retF = jest.fn((returnData) => { 
    expect(returnData[0].name).toEqual("Evan");
    expect(returnData[0].itemIndexList.sort()).toEqual([0, 1, 2]);
    expect(returnData[1].name).toEqual("John");
    expect(returnData[1].itemIndexList).toEqual([]);
  });

  render(<AssignItems 
    userInfo={sampleInfo} 
    visionData={visionData} 
    finishFunc={retF}
  />);

  let selectionBox1 = screen.getByTestId('selectionBox1');
  let nextButton = screen.getByRole('button', {name: "Next Step"});

  userEvent.selectOptions(selectionBox1, "John");
  userEvent.selectOptions(selectionBox1, "Evan");
  userEvent.click(nextButton);
  
});