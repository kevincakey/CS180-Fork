import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {Button, Row, Col, Form, ListGroup} from 'react-bootstrap';
import React, { useState } from 'react';

// const temp = () => {
//     const [currentStage, setCurrentStage] = useState(1)
//     const [visionData, setVisionData] = useState({
//       visionData: {
//         fin: {},
//         items: [],
//         subTotal: -1,
//         tax: -1,
//         total: -1
//       }
//     })
//     const [userInfo, setUserinfo] = useState([])
//     const [payeeName, setPayeeName] = useState("")

//     const advanceState = () => {
//         setCurrentStage(currentStage + 1)
//     }

//     const recievedItemsFromVision = (data) => {
//     setVisionData(data);
//     console.log(data);
//     advanceState()
//   };

//   return (
//    <div>
//     { currentStage === 0 && <Vision returnFunc={recievedItemsFromVision}/>}
//     { currentStage === 1 && <InputInfo finishFunc={recievedUserInfoFromInput}/>}
//     { currentStage === 2 && <AssignItems userInfo={userInfo} payeeName={ payeeName} visionData={visionData} finishFunc={recievedPaymentInfoFromAssignItems}/>}
//     { currentStage === 3 && <>hi</>}
//    </div>
//   )
// }

// export default temp

const InputInfo = (props) => {

  // const [nameRef, setNameRef] = useState(React.createRef())
  // const [emailRef, setEmailRef] = useState(React.createRef())
  const [curName, setCurName] = useState("")
  const [curEmail, setCurEmail] = useState("")
  const [payeeName, setPayeeName] = useState("")
  const [info, setInfo] = useState([])
  const [info2, setInfo2] = useState(new Map())

  const returnNameList = () => {
    if (info.length === 0){
      return( <></> );
    }

    return(
      <ListGroup variant="flush" className="border rounded-3">
        {info.map((entry, i) => {
          let name = entry.name;
          let email = entry.email;

          let deleteEntry = (name) => {
            info.forEach((entry, j) => { 
              if (entry.name === name) {
                if (name === payeeName){
                  payeeName = info.length > 0 ? info[0].name : "";
                }

                info.pop(j);
                setInfo(info);
                return;
              } 
            });
          }

          let selectPayee = (e, name) => {
            
            if (payeeName === name){
              e.target.checked = true;
              return;
            }
            setPayeeName(name);             
          }

          return(
            <ListGroup.Item key={i}>
              <Row>
                <Col className="d-flex align-items-center bg-white" xs={5}>
                  {name}
                </Col>
                <Col className="d-flex align-items-center bg-white" xs={5}>
                  {email}
                </Col>
                <Col className="d-flex bg-white" xs={1}>
                  <Form.Check
                  className="my-auto bg-white"
                  type="switch"
                  onChange={(e) => selectPayee(e, name)}
                  checked={payeeName === name}
                  />
                </Col>
                <Col className="bg-white " xs={1}>
                  <Button onClick={() => deleteEntry(name)}><FontAwesomeIcon style={{backgroundColor: "#0d6efd"}} icon={faTrash}/></Button>
                </Col>
              </Row>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    )
  }

  const addInfo = () => {
    console.log("a");
    if (curName !== "" && curEmail !== ""){
      console.log("adding info");
      setCurName("");
      setCurEmail("");
      // nameRef.current.value = "";
      // emailRef.current.value = "";
      if (payeeName === ""){
        setPayeeName(curName);
      }
      // var newInfo = info.concat({name: curName, email: curEmail});
      // console.log(newInfo);
      setInfo([{name: curName, email: curEmail}]);
    }
  }


  return (
    <div className="mx-5 justify-content-md-center">
      {returnNameList()}
      <Row className="my-2">     
        <Col xs={5}>
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={ (e) => { setCurName(e.target.value); } }/>
        </Col>
        <Col xs={6}>
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={ (e) => { setCurEmail(e.target.value); } }/>
        </Col>
        <Col className="d-flex">
          <Button className="mt-auto" onClick={addInfo}>+</Button>
        </Col>
      </Row>
      <Row className="my-2">
        <Col/>
        <Col align="center">
          <Button onClick={ 
            info.length > 0 ? 
            props.finishFunc({payeeName: payeeName, info:info}) 
            : null
          }>
            Finish
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default InputInfo