import {Row, Col, Form, ListGroup, Button} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

export const VisionCorrection = (props) => {

  const [items, setItems] = useState(props.visionData.items);
  const [tax , setTax] = useState(props.visionData.tax);
  const [subTotal, setSubTotal] = useState(props.visionData.subTotal);
  useEffect( () => {
    if (props.visionData.items !== items) {
      setItems(props.visionData.items);
      setTax(props.visionData.tax);
      setSubTotal(props.visionData.subTotal);
    }
  }, [props.visionData.items])


  if (!props.visionData || !props.visionData.items || props.visionData.items.length === 0 || !items){
    return (<></>);
  }

  return (<>
    <h4> Make any corrections to the parsed reciept if nessecary</h4>
    <ListGroup variant="flush" className="border rounded-3">
      {items.map((item, i) => {
        return(
          <ListGroup.Item>
            <Row>
              <Col className="d-flex align-items-center bg-white" xs={6}>
              <Form.Control value={item.name} onChange={ (e) => { 
                  var newItems = [...items];
                  newItems[i].name = Number(e.target.value);
                  setItems(newItems);
                }}/>
              </Col>
              <Col className="d-flex align-items-center bg-white" xs={6}>
                <Form.Control value={item.price} onChange={ (e) => { 
                  var newItems = [...items];
                  if (isNaN(e.target.value)){
                    return;
                  }
                  newItems[i].price = Number(e.target.value);
                  setItems(newItems);
                }}/>
              </Col>
            </Row>
          </ListGroup.Item>
          );
      })}
      <ListGroup.Item>
        <Row>
          <Col className="d-flex align-items-center bg-white" xs={6}>
            Subtotal
          </Col>
          <Col className="d-flex align-items-center bg-white" xs={6}>
            <Form.Control value={subTotal} onChange={ (e) => {
              if (isNaN(e.target.value)){
                return;
              }
              setSubTotal(Number(e.target.value));
            }}/>
          </Col>
        </Row>
      </ListGroup.Item>
      <ListGroup.Item>
        <Row>
          <Col className="d-flex align-items-center bg-white" xs={6}>
            Tax
          </Col>
          <Col className="d-flex align-items-center bg-white" xs={6}>
            <Form.Control value={tax} onChange={ (e) => {
              if (isNaN(e.target.value)){
                return;
              }
              setTax(Number(e.target.value));
            }}/>
          </Col>
        </Row>
      </ListGroup.Item>
    </ListGroup>
    <Row className="mb-5 mt-2">
      <Col/>
      <Col align="center">
        <Button onClick={() => props.finishFunc()}>Next Step</Button>
      </Col>
    </Row>
  </>);
}
