import React, { useState } from 'react';
// import VisionHandler from './VisionHandler.js'
import { Vision } from "./vision.js";
import PaymentHandler from './PaymentHandler.js'
import { VisionCorrection } from './VisionCorrection.js';
import InputInfo from './InputInfo'
import AssignItems from './AssignItems'

const PaymentProcessor = () => {
  const [currentStage, setCurrentStage] = useState(0)
  const [visionData, setVisionData] = useState({
    visionData: {
      fin: {},
      items: [],
      subTotal: -1,
      tax: -1,
      total: -1
    }
  })
  const [userInfo, setUserinfo] = useState([])
  const [payeeName, setPayeeName] = useState("")
  const [userInfoWithItems, setUserInfoWithItems] = useState([])

  const recievedUserInfoFromInput = (infoArg) => {
    setUserinfo(infoArg.info);
    setPayeeName(infoArg.payeeName);
    setCurrentStage(currentStage + 1);
  }

  const recievedPaymentInfoFromAssignItems = (infoArg) => {
    setUserInfoWithItems(infoArg);
    setCurrentStage(currentStage + 1);
  }

  const recievedItemsFromVision = (data) => {
    data.items = parseVisionItems(data.items);
    data.subTotal = fixParsedNum(data.subTotal);
    data.tax = fixParsedNum(data.tax);
    if (data.total === ""){
      data.total = data.subTotal + data.tax;
    } else {
      data.total = fixParsedNum(data.total);
    }
  
    setVisionData(data);
    console.log(data);
    // setCurrentStage(currentStage + 1);
  };

  const paymentCompleted = () => {
    setCurrentStage(currentStage + 1);
  };

  return (
    <div className="mx-5 justify-content-md-center">
    { currentStage === 0 && <>
      <Vision returnFunc={recievedItemsFromVision}/>
      <VisionCorrection visionData={visionData} finishFunc={() => setCurrentStage(currentStage + 1)}/>
    </>}
    { currentStage === 1 && <InputInfo finishFunc={recievedUserInfoFromInput}/>}
    { currentStage === 2 && <AssignItems 
      userInfo={userInfo} 
      visionData={visionData} 
      finishFunc={recievedPaymentInfoFromAssignItems}
    />}
    { currentStage === 3 && <PaymentHandler 
      userInfoWithItems={userInfoWithItems}
      payeeName={payeeName}
      visionData={visionData} 
      finishFunc={paymentCompleted}/>}
    { currentStage === 4 && <h4> Congrats! You're all paid back</h4>}
  </div>
  )
}

export default PaymentProcessor

const fixParsedNum = (num) => {
  let newNum = num.replace(' ', "");
  newNum = newNum.replace(',', "");
  newNum = newNum.replace('.', "");
  newNum = newNum.replace('\n', "");
  return Number(newNum);
}

const parseVisionItems = (items) => {
  // console.log(items);
  return (items.map((item) => {
    let splitArr = item.split(" ");
    let price = splitArr[splitArr.length - 1];
    price = price.replace('\n', "");

    let potentialDecimal = price.substring(price.length - 3, price.length - 2);
    // console.log(potentialDecimal);
    if (potentialDecimal === "," || potentialDecimal === "."){
      price = price.substring(0,price.length - 3);
      // console.log(price);
    }
    
    price = price.replace(',', "");
    price = price.replace('.', "");
    // console.log(price);
    price = Number(price);

    splitArr = splitArr.filter((entry) => {
      let localEntry = entry.replace('\n', "");
      localEntry = localEntry.replace(',', "");
      if (!isNaN(localEntry)){
       return false;
      }
      return true;
    });

    
    return ({name: splitArr.join(" "), price: price});
  }));
}

