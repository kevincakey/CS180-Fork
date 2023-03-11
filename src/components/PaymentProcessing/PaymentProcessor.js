import React, { useState } from 'react';
// import VisionHandler from './VisionHandler.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Vision from "./vision.js";
import PaymentHandler from './PaymentHandler.js'
import {Button, Row, Col, Form, ListGroup} from 'react-bootstrap';
import InputInfo from './InputInfo'
import AssignItems from './AssignItems'

const PaymentProcessor = () => {
  const [currentStage, setCurrentStage] = useState(2)
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
    setVisionData(data);
    console.log(data);
    setCurrentStage(currentStage + 1);
  };

  const paymentCompleted = () => {
    setCurrentStage(currentStage + 1);
  };

  return (
    <div className="mx-5 justify-content-md-center">
    { currentStage === 0 && <Vision returnFunc={recievedItemsFromVision}/>}
    { currentStage === 1 && <InputInfo finishFunc={recievedUserInfoFromInput}/>}
    { currentStage === 2 && <AssignItems 
      userInfo={userInfo} 
      visionData={visionData} 
      finishFunc={recievedPaymentInfoFromAssignItems}
    />}
    { currentStage === 3 && <PaymentHandler userInfoWithItems={userInfoWithItems} finishFunc={paymentCompleted}/>}
    { currentStage === 4 && <div>Payment Completed</div>}
  </div>
  )
}

export default PaymentProcessor


// export default class PaymentProcessor extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       currentStage: 1,
//       visionData: {
//         fin: {},
//         items: [],
//         subTotal: -1,
//         tax: -1,
//         total: -1
//       },
//       userInfo: [],
//       payeeName: ""
//     };
//   }

//   render(){
//     return( <>{this.renderBasedOnState()}</> );
//   }

//   renderBasedOnState(){

//     if (this.state.currentStage === 0){
//       return ( <Vision returnFunc={this.recievedItemsFromVision}/> );
//     }
//     else if (this.state.currentStage === 1){
//       return( <InputInfo finishFunc={this.recievedUserInfoFromInput}/> );
//     }
//     else if (this.state.currentStage === 2){
//      return (<AssignItems 
//       userInfo={this.state.userInfo}
//       payeeName={ this.state.payeeName} 
//       visionData={this.state.visionData}
//       finishFunc={this.recievedPaymentInfoFromAssignItems}
//       />);
//    }
//    else if  (this.state.currentStage === 3){
//     return (<>hi</>);
//    }


//     return(<>AHHHHHHHHHHHHHHH</>);
//   }

//   advanceState = () =>{
//     this.setState({ currentStage: this.state.currentStage+1 });
//   }

//   recievedItemsFromVision = (data) => {
//     this.setState({ visionData: data});
//     console.log(data);
//     this.advanceState();
//   };

//   recievedUserInfoFromInput = (infoArg) => {
//     this.setState({ userInfo: infoArg.info, payeeName: infoArg.payeeName});
//     this.advanceState();
//   }

//   recievedPaymentInfoFromAssignItems = (infoArg) => {

//     this.advanceState();
//   }

// }

