import React, { Component } from 'react';
// import VisionHandler from './VisionHandler.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Vision from "./vision.js";
import PaymentHandler from './PaymentHandler.js'
import {Button, Row, Col, Form, ListGroup} from 'react-bootstrap';
import InputInfo from './InputInfo'

export default class PaymentProcessor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentStage: 1,
      visionData: {
        fin: {},
        items: [],
        subTotal: -1,
        tax: -1,
        total: -1
      },
      userInfo: [],
      payeeName: ""
    };
  }

  render(){
    return( <>{this.renderBasedOnState()}</> );
  }

  renderBasedOnState(){

    if (this.state.currentStage === 0){
      return ( <Vision returnFunc={this.recievedItemsFromVision}/> );
    }
    else if (this.state.currentStage === 1){
      return( <InputInfo finishFunc={this.recievedUserInfoFromInput}/> );
    }
    else if (this.state.currentStage === 2){
     return (<AssignItems 
      userInfo={this.state.userInfo}
      payeeName={ this.state.payeeName} 
      visionData={this.state.visionData}
      finishFunc={this.recievedPaymentInfoFromAssignItems}
      />);
   }
   else if  (this.state.currentStage === 3){
    return (<>hi</>);
   }


    return(<>AHHHHHHHHHHHHHHH</>);
  }

  advanceState = () =>{
    this.setState({ currentStage: this.state.currentStage+1 });
  }

  recievedItemsFromVision = (data) => {
    this.setState({ visionData: data});
    console.log(data);
    this.advanceState();
  };

  recievedUserInfoFromInput = (infoArg) => {
    this.setState({ userInfo: infoArg.info, payeeName: infoArg.payeeName});
    this.advanceState();
  }

  recievedPaymentInfoFromAssignItems = (infoArg) => {

    this.advanceState();
  }

}

// class InputInfo extends React.Component {
//   constructor(props){
//     super(props);
//     this.nameRef = React.createRef();
//     this.emailRef = React.createRef();
//     this.curName = "";
//     this.curEmail = "";
//     this.state = {   
//       payeeName: "",
//       info: []  
//     };
//   }

//   render(){
//     return (
//       <div className="mx-5 justify-content-md-center">
//         {this.returnNameList()}
//         <Row className="my-2">     
//           <Col xs={5}>
//             <Form.Label>Name</Form.Label>
//             <Form.Control ref={this.nameRef} onChange={ (e) => { this.curName = e.target.value; } }/>
//           </Col>
//           <Col xs={6}>
//             <Form.Label>Email</Form.Label>
//             <Form.Control ref={this.emailRef} onChange={ (e) => { this.curEmail = e.target.value; } }/>
//           </Col>
//           <Col className="d-flex">
//             <Button className="mt-auto" onClick={this.addInfo}>+</Button>
//           </Col>
//         </Row>
//         <Row className="my-2">
//           <Col/>
//           <Col align="center">
//             <Button onClick={ 
//               this.state.info.length > 0 ? 
//               this.props.finishFunc({payeeName: this.state.payeeName, info:this.state.info}) 
//               : null
//             }>
//               Finish
//             </Button>
//           </Col>
//         </Row>
//       </div>
//     );
//   }

//   addInfo = () => {
//     console.log("ayo");
//     // this.setState({ count: 1 });
//     // var newInfo = this.state.info.concat({name: this.curName, email: this.curEmail});
//     console.log({name: this.curName, email: this.curEmail});
//     this.setState({ info: [...this.state.info , 's'] });
//     // if (this.curName !== "" && this.curEmail !== ""){
//     //   console.log("adding info");
//     //   this.curName = "";
//     //   this.curEmail = "";
//     //   this.nameRef.current.value = "";
//     //   this.emailRef.current.value = "";
//     //   // if (this.state.payeeName === ""){
//     //   //   this.state.payeeName = this.curName;
//     //   // }
//     //   var newInfo = this.state.info.concat({name: this.curName, email: this.curEmail});
//     //   console.log(newInfo);
//     //   this.setState({info: newInfo});
//     // }
//   }

//   returnNameList(){
//     if (this.state.info.length === 0){
//       return( <></> );
//     }

//     return(
//       <ListGroup variant="flush" className="border rounded-3">
//         {this.state.info.map((entry, i) => {
//           let name = entry.name;
//           let email = entry.email;

//           let deleteEntry = (name) => {
//             this.state.info.forEach((entry, j) => { 
//               if (entry.name === name) {
//                 if (name === this.state.payeeName){
//                   this.state.payeeName = this.state.info.length > 0 ? this.state.info[0].name : "";
//                 }

//                 this.state.info.pop(j);
//                 this.setState({info: this.state.info});
//                 return;
//               } 
//             });
//           }

//           let selectPayee = (e, name) => {
            
//             if (this.state.payeeName === name){
//               e.target.checked = true;
//               return;
//             }
//             this.setState({payeeName: name});               
//           }

//           return(
//             <ListGroup.Item key={i}>
//               <Row>
//                 <Col className="d-flex align-items-center bg-white" xs={5}>
//                   {name}
//                 </Col>
//                 <Col className="d-flex align-items-center bg-white" xs={5}>
//                   {email}
//                 </Col>
//                 <Col className="d-flex bg-white" xs={1}>
//                   <Form.Check
//                   className="my-auto bg-white"
//                   type="switch"
//                   onChange={(e) => selectPayee(e, name)}
//                   checked={this.state.payeeName === name}
//                   />
//                 </Col>
//                 <Col className="bg-white " xs={1}>
//                   <Button onClick={() => deleteEntry(name)}><FontAwesomeIcon style={{backgroundColor: "#0d6efd"}} icon={faTrash}/></Button>
//                 </Col>
//               </Row>
//             </ListGroup.Item>
//           );
//         })}
//       </ListGroup>
//     )
//   }

// }

class AssignItems extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      itemIndex: 0
    };
  }

  increaseItemIndex = () => {
    this.setState({itemIndex: this.state.itemIndex+1});
  }

  render(){
    //this.props.visionData.items[this.state.itemIndex];
    return (
      <>
      </>
    );
  }
}