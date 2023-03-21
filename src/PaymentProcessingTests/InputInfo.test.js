import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import InputInfo from '../components/PaymentProcessing/InputInfo';

test('Test that names are displayed when added', () => {
  let retF = jest.fn();
  render(<InputInfo finishFunc={retF}/>);

  let emailBox = screen.getByPlaceholderText("name@example.com");
  let nameBox = screen.getByPlaceholderText("name");
  let addButton = screen.getByRole('button', {name: "+"});
  let nextButton = screen.getByRole('button', {name: "Next Step"});
  
  userEvent.type(emailBox, "e@google.com");
  userEvent.type(nameBox, "Evan");
  userEvent.click(addButton);

  userEvent.type(emailBox, "j@google.com");
  userEvent.type(nameBox, "John");
  userEvent.click(addButton);

  userEvent.click(nextButton);

  expect(screen.getByText("Evan")).toBeInTheDocument();
  expect(screen.getByText("John")).toBeInTheDocument();
  expect(screen.getByText("e@google.com")).toBeInTheDocument();
  expect(screen.getByText("j@google.com")).toBeInTheDocument();
  expect(retF).toHaveBeenCalled();
});

test('Test that adding two names and submitting advances to the next step', () => {
  let retF = jest.fn();
  render(<InputInfo finishFunc={retF}/>);

  let emailBox = screen.getByPlaceholderText("name@example.com");
  let nameBox = screen.getByPlaceholderText("name");
  let addButton = screen.getByRole('button', {name: "+"});
  let nextButton = screen.getByRole('button', {name: "Next Step"});
  
  userEvent.type(emailBox, "e@google.com");
  userEvent.type(nameBox, "Evan");
  userEvent.click(addButton);

  userEvent.type(emailBox, "j@google.com");
  userEvent.type(nameBox, "John");
  userEvent.click(addButton);

  userEvent.click(nextButton);

  expect(retF).toHaveBeenCalled();
});

test('Test that adding zero or one names and submitting does not advance to the next step', () => {
  let retF = jest.fn();
  render(<InputInfo finishFunc={retF}/>);

  let emailBox = screen.getByPlaceholderText("name@example.com");
  let nameBox = screen.getByPlaceholderText("name");
  let addButton = screen.getByRole('button', {name: "+"});
  let nextButton = screen.getByRole('button', {name: "Next Step"});
  
  userEvent.click(nextButton);
  expect(retF).not.toHaveBeenCalled();

  userEvent.type(emailBox, "e@google.com");
  userEvent.type(nameBox, "Evan");
  userEvent.click(addButton);

  userEvent.click(nextButton);
  expect(retF).not.toHaveBeenCalled();
});

test('Test that the component outputs correctly', () => {
  var outputData = {};
  let retF = jest.fn((arg) => {
    outputData = arg;
  });
  render(<InputInfo finishFunc={retF}/>);

  let emailBox = screen.getByPlaceholderText("name@example.com");
  let nameBox = screen.getByPlaceholderText("name");
  let addButton = screen.getByRole('button', {name: "+"});
  let nextButton = screen.getByRole('button', {name: "Next Step"});
  
  userEvent.type(emailBox, "e@google.com");
  userEvent.type(nameBox, "Evan");
  userEvent.click(addButton);

  userEvent.type(emailBox, "j@google.com");
  userEvent.type(nameBox, "John");
  userEvent.click(addButton);

  userEvent.click(nextButton);

  expect(retF).toHaveBeenCalled();
  expect(outputData.info.length).toEqual(2);
  expect(outputData.payeeName).toEqual("Evan");
  expect(outputData.info[0].name).toEqual("Evan");
  expect(outputData.info[0].email).toEqual("e@google.com");
  expect(outputData.info[1].name).toEqual("John");
  expect(outputData.info[1].email).toEqual("j@google.com");
});

test('Validate that Payee switch button works', () => {
  var outputData = {};
  let retF = jest.fn((arg) => {
    outputData = arg;
  });
  render(<InputInfo finishFunc={retF}/>);

  let emailBox = screen.getByPlaceholderText("name@example.com");
  let nameBox = screen.getByPlaceholderText("name");
  let addButton = screen.getByRole('button', {name: "+"});
  let nextButton = screen.getByRole('button', {name: "Next Step"});
  
  userEvent.type(emailBox, "e@google.com");
  userEvent.type(nameBox, "Evan");
  userEvent.click(addButton);

  userEvent.type(emailBox, "j@google.com");
  userEvent.type(nameBox, "John");
  userEvent.click(addButton);

  let payeeButton = screen.getByTestId("payeeSwitch1");
  userEvent.click(payeeButton);

  userEvent.click(nextButton);

  expect(retF).toHaveBeenCalled();
  expect(outputData.info.length).toEqual(2);
  expect(outputData.payeeName).toEqual("John");
  expect(outputData.info[0].name).toEqual("Evan");
  expect(outputData.info[0].email).toEqual("e@google.com");
  expect(outputData.info[1].name).toEqual("John");
  expect(outputData.info[1].email).toEqual("j@google.com");
});

test('Test output with 10 people', () => {
  var outputData = {};
  let retF = jest.fn((arg) => {
    outputData = arg;
  });
  render(<InputInfo finishFunc={retF}/>);

  let emailBox = screen.getByPlaceholderText("name@example.com");
  let nameBox = screen.getByPlaceholderText("name");
  let addButton = screen.getByRole('button', {name: "+"});
  let nextButton = screen.getByRole('button', {name: "Next Step"});
  
  for (let i = 0; i < 10; i++) {
    userEvent.type(emailBox, "e" + i + "@google.com");
    userEvent.type(nameBox, "User" + i);
    userEvent.click(addButton);
  }

  userEvent.click(nextButton);
  expect(retF).toHaveBeenCalled();
  expect(outputData.info.length).toEqual(10);
  expect(outputData.payeeName).toEqual("User0");
  
  outputData.info.forEach((person, index) => {
    expect(person.name).toEqual("User" + index);
    expect(person.email).toEqual("e" + index + "@google.com");
  });

});

test('Test oiutput with 10 people and multiple payeeSwitches', () => {
  var outputData = {};
  let retF = jest.fn((arg) => {
    outputData = arg;
  });
  render(<InputInfo finishFunc={retF}/>);

  let emailBox = screen.getByPlaceholderText("name@example.com");
  let nameBox = screen.getByPlaceholderText("name");
  let addButton = screen.getByRole('button', {name: "+"});
  let nextButton = screen.getByRole('button', {name: "Next Step"});
  
  for (let i = 0; i < 10; i++) {
    userEvent.type(emailBox, "e" + i + "@google.com");
    userEvent.type(nameBox, "User" + i);
    userEvent.click(addButton);
  }

  let payeeButtons = [];
  for (let i = 0; i < 10; i++) {
    payeeButtons.push(screen.getByTestId("payeeSwitch" + i));
  }

  for(let i = 9; i > 0; i--) {
    userEvent.click(payeeButtons[i]);
  }

  userEvent.click(nextButton);
  expect(retF).toHaveBeenCalled();
  expect(outputData.info.length).toEqual(10);
  expect(outputData.payeeName).toEqual("User1");
  
  outputData.info.forEach((person, index) => {
    expect(person.name).toEqual("User" + index);
    expect(person.email).toEqual("e" + index + "@google.com");
  });

});

