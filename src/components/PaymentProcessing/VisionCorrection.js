import {Row, Col, Form, ListGroup} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

export const VisionCorrection = (props) => {

  const [items, setItems] = useState(props.visionData.items);
  const [test, setTest] = useState([]);

  useEffect( () => {
    if (props.visionData.items !== items) {
      console.log("items changed off props")
      setItems(props.visionData.items);
    }
  }, [props.visionData.items])

  useEffect( () => {
    console.log(items)
  }, [items])

  if (!props.visionData || !props.visionData.items || props.visionData.items.length == 0 || !items){
    return (<></>);
  }


  console.log("rerender", items);
  console.log(items[0].price);
  let el = items[0].price;
  return (
    <ListGroup variant="flush" className="border rounded-3">
      {/* {items.map((item, i) => {
        
          return( */}
            <ListGroup.Item className="my-2">
              <Row>
                <Col className="d-flex align-items-center bg-white" xs={6}>
                  {items[0].name}
                </Col>
                <Col className="d-flex align-items-center bg-white" xs={6}>
                  <Form.Control onChange={ (e) => { 
                    var newItems = items; 
                    newItems[0].price = Number(e.target.value); 
                    setItems(newItems); 
                  } 
                  }/>
                </Col>
              </Row>
            </ListGroup.Item>
          {/* );
     
      })} */}
    </ListGroup>
  )
}
