import React, { useState, useEffect } from 'react';
import {Button, Row, Col, Form, Card} from 'react-bootstrap';

const AssignItems = (props) => {
  let itemList = props.visionData.items;// [{name: "item1", price: 1}, {name: "item2", price: 2}, {name: "item3", price: 3}, {name: "item4", price: 1}];
  //itemList = itemList.concat(itemList);
  let nameList = props.userInfo;//[{name: "name1", email: "email1"}, {name: "name2", email: "email2"}, {name: "name3", email: "email3"}];

  //add itemIndexList to each name
  nameList = nameList.map((name) => { return {...name, itemIndexList: []}});
  //assign all items to the first name by default
  nameList[0].itemIndexList.push(...itemList.keys());

  //use this for output
  const [infoWithItems, setInfoWithItems] = useState(nameList);
  const rowWidth = 5;

  //split itemList into rows for display
  const rowList = [];
  itemList.forEach((item, i) => {
    if (i % rowWidth === 0){
      rowList.push([]);
    }
    rowList[rowList.length - 1].push(item);
  });


  const assignItem = (name, itemIndex) => {
    let newInfo = [...infoWithItems];

    //remove it if its been assigned
    newInfo.forEach((entry) => {
      entry.itemIndexList.forEach((index) => {
        if (index === itemIndex){
          entry.itemIndexList.splice(entry.itemIndexList.indexOf(index), 1);
        }
      });
    });

    // console.log(newInfo.find((entry) => entry.name === name));
    //assign it to the new user
    newInfo.find((entry) => entry.name === name).itemIndexList.push(itemIndex);
    setInfoWithItems(newInfo);
  }

  return (
    <>
    {rowList.map((row, i) => {
      return(
        <Row className="justify-content-center my-2" key={i}>
          {row.map((item, j) => {
            return(
              <Col className="align-items-center" style={{maxWidth: "20vw", minWidth: "10vw"}} key={j}>
                <Card className="border rounded-3">
                  <Card.Body className="border rounded-3 bg-white">
                    <Card.Title className="bg-white">{item.name}</Card.Title>
                    <Card.Text className="bg-white">
                      ${item.price}
                    </Card.Text>
                    <Form.Select className="bg-white" onChange={(e) => assignItem(e.target.value, i * rowWidth + j)}>
                          {nameList.map((name, nameIndex) => {
                            return(
                              <option 
                                key={nameIndex}>
                                {name.name}
                              </option>
                            );
                          })}
                    </Form.Select>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>       
      );    
    })}
    <Row className="my-2">
      <Col/>
      <Col align="center">
        <Button onClick={() => props.finishFunc(infoWithItems)}>Next Step</Button>
      </Col>
    </Row>
  </>);
}

  
export default AssignItems;