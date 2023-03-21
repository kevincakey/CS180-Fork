import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {Button, Row, Col, Form, ListGroup} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

const InputInfo = (props) => {
  const [curName, setCurName] = useState("")
  const [curEmail, setCurEmail] = useState("")
  const [payeeName, setPayeeName] = useState("")
  const [info, setInfo] = useState([])

  const returnNameList = () => {
    if (info.length === 0){
      return( <></> );
    }
    return(<>
      <ListGroup variant="flush" className="border rounded-3">
        <ListGroup.Item>
          <Row>
            <Col className="d-flex align-items-center bg-white" xs={5}>
              Name
            </Col>
            <Col className="d-flex align-items-center bg-white" xs={5}>
              Email
            </Col>
            <Col className="d-flex align-items-center bg-white">
              Payee
            </Col>
            <Col className="d-flex align-items-center bg-white">
              Delete
            </Col>
          </Row>
        </ListGroup.Item>
        {info.map((entry, i) => {
          let name = entry.name;
          let email = entry.email;

          const deleteEntry = (name) => {
            info.forEach((entry, j) => { 
              if (entry.name === name) {           
                let newInfo = [...info];
                newInfo.splice(j, 1);
                setInfo(newInfo);

                if (name === payeeName){
                  setPayeeName(newInfo.length > 0 ? newInfo[0].name : "");
                }
                return;
              } 
            });
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
                  onChange={() => setPayeeName(name)}
                  checked={payeeName === name}
                  data-testid={"payeeSwitch" + i}
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
    </>);
  }

  const addInfo = () => {
    var testEmail =    /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    if (curName !== "" && curEmail !== "" && testEmail.test(curEmail)){
      setCurName("");
      setCurEmail("");
      if (payeeName === ""){
        setPayeeName(curName);
      }
      setInfo([...info, {name: curName, email: curEmail}]);
    }
  }

  const finishIfReady = () => {
    if (info.length > 1){
      props.finishFunc({payeeName: payeeName, info:info});
    }
  }

  return (
    <div>
      <h4> Enter the names and emails of everyone who paid for the items</h4>
      {returnNameList()}
      <Row className="my-2">     
        <Col xs={5}>
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="name" value={curName} onChange={ (e) => { setCurName(e.target.value); } }/>
        </Col>
        <Col xs={6}>
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="name@example.com" value={curEmail} onChange={ (e) => { setCurEmail(e.target.value); } }/>
        </Col>
        <Col className="d-flex">
          <Button className="mt-auto" onClick={addInfo}>+</Button>
        </Col>
      </Row>
      <Row className="my-2">
        <Col/>
        <Col align="center">
          <Button onClick={finishIfReady}>Next Step</Button>
          {/* DONT DO THIS
          <Button onClick={ 
            info.length > 0 ? 
            props.finishFunc({payeeName: payeeName, info:info}) 
            : null
          }></Button> */}
        </Col>
      </Row>
    </div>
  );
}

export default InputInfo