import React, { useState, useEffect } from 'react';
import {Button, Row, Col, ListGroup, Tabs, Tab} from 'react-bootstrap';



// const PaymentHandler = (props) => {

//   const [currentState, setCurrentState] = useState(0);
//   const [userInfoWithTotals, setUserInfoWithTotals] = useState(() => {
//     let UIWT = props.userInfoWithItems.map((user) => {
//       let total = 0;
//       user.itemIndexList.forEach((index) => { total += props.visionData.items[index].price });

//       //normalize to total with tax and tip included
//       total = Math.ceil((total/props.visionData.subTotal) * props.visionData.total * 100) / 100;

//       return { name: user.name, email: user.email, total:total };
//     })

//     //remove payee from list
//     let i = UIWT.findIndex((user) => { return user.name === props.payeeName });
//     UIWT.splice(i, 1);
//     return UIWT;
//   });

//   const [currentInfo, setCurrentInfo] = useState(userInfoWithTotals[0]);

//   useEffect( () => {
//     setCurrentInfo(userInfoWithTotals[currentState]);
//   }, [currentState])

//   console.log(props.userInfoWithItems);
//   console.log("new", userInfoWithTotals);
//   console.log("current", currentInfo);
//   console.log("current state", currentState);

//   if (currentState >= props.userInfoWithItems.length - 1) {
//     props.finishFunc();
//     return (<></>);
//   }

//   let nextText = (currentState < userInfoWithTotals.length - 1) ? "Pay Next Person" : "Finish";
//   console.log(nextText)
//   return (
//     <div style={{ maxWidth: "750px", minHeight: "200px" }}>
//       <h4> Choose how to recieve ${currentInfo.total} from {currentInfo.name}</h4>
//       <PayPalScriptProvider
//         options={{
//           "client-id": "test",
//           components: "buttons",
//           currency: "USD"
//         }}
//       >
//      <ButtonWrapper
//         currency={currency}
//         showSpinner={false}
//         amount={currentInfo.total}
//         email={currentInfo.email}
//         finishFunc={() => console.log("fin") } 
//         // setCurrentState(currentState + 1)
//       />
//       </PayPalScriptProvider>
//       <Row className="my-2">
//         <Col/>
//         <Col align="center">
//           <Button onClick={() => setCurrentState(currentState + 1)}>{nextText}</Button>
//         </Col>
//        </Row> 
//     </div>
//   );      
// }

const PaymentHandler = (props) => {
  var payeeEmail = "";
  const [userInfoWithTotals, setUserInfoWithTotals] = useState(() => {
    let UIWT = props.userInfoWithItems?.map((user) => {
      let total = 0;
      let items = [];
      user.itemIndexList.forEach((index) => { 
        total += props.visionData.items[index].price; 
        items.push({
          name: props.visionData.items[index].name,
          price: props.visionData.items[index].price
        }); 
      });

      //normalize to total with tax and tip included
      let totalWithTax = Math.ceil((total/props.visionData.subTotal) * props.visionData.total * 100) / 100;
      let taxPercentage = ((totalWithTax - total) / total) * 100;
      console.log(user.name)
      return {
        name: user.name, 
        email: user.email, 
        total:totalWithTax, 
        items: items, 
        taxPercentage: taxPercentage
      };
    })

    //remove payee from list
    if(props.userInfoWithItems){
      let i = UIWT.findIndex((user) => { return user.name === props.payeeName });
      payeeEmail = UIWT[i].email;
    }
    //UIWT.splice(i, 1);
    return UIWT;
  });

  console.log(props.userInfoWithItems);
  console.log("new", userInfoWithTotals);

  return (<>
    <h4>Confirm the following items to be invoiced</h4>
    <ListGroup className="rounded-3">
    <Tabs
    defaultActiveKey={props.payeeName}
    id="uncontrolled-tab-example"
    className="rounded-top"
    >
    {userInfoWithTotals?.map((user, i) => {       
      return( 
        <Tab eventKey={user.name} title={user.name} key={i} className="rounded-bottom bg-white">

        {user.name === props.payeeName && <ListGroup.Item>
        <Row> <Col className="d-flex align-items-center bg-white">
          Note: you will not be invoicing yourself
        </Col></Row></ListGroup.Item>}

        <ListGroup.Item>
        <Row>
          <Col className="d-flex align-items-center bg-white">
            <b className="bg-white">Item</b>
          </Col>
          <Col className="d-flex align-items-center bg-white">
            <b className="bg-white">Price</b>
          </Col>
        </Row>
      </ListGroup.Item>
        {user.items.map((item, j) => {
          console.log(item);
          return(
            <ListGroup.Item key={j}>
              <Row>
                <Col className="d-flex align-items-center bg-white">
                  {item.name}
                </Col>
                <Col className="d-flex align-items-center bg-white" >
                  ${item.price}
                </Col>
              </Row>
            </ListGroup.Item>
          );
        })} 
        <ListGroup.Item>
          <Row>
            <Col className="d-flex align-items-center bg-white">
              <b className="bg-white">Tax: </b>
            </Col>
            <Col className="d-flex align-items-center bg-white" >
              ${Math.ceil(user.taxPercentage * user.total) / 100}
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col className="d-flex align-items-center bg-white">
              <b className="bg-white">Total: </b>
            </Col>
            <Col className="d-flex align-items-center bg-white" >
              ${user.total}
            </Col>
          </Row>
        </ListGroup.Item>
        </Tab>  
      );      
    })}
    </Tabs>
    </ListGroup>
    <Row className="my-2">
      <Col/>
      <Col align="center">
        <Button onClick={() => {
          createAndSendInvoices(userInfoWithTotals, props.payeeName, payeeEmail); 
          props.finishFunc();
        }}>Send Invoices</Button>
      </Col>
    </Row>
  </>);
}

const createAndSendInvoices = async (userInfoWithTotals, payeeName, payeeEmail) => {
  const { Invoices } = require('paypal-invoices')
  const { v4: uuidv4 } = require('uuid');
  const invoiceNumber = uuidv4().substring(1,25);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  console.log(invoiceNumber);

  let UIWT = [...userInfoWithTotals];

  //remove payee from list
  let i = UIWT.findIndex((user) => { return user.name === payeeName });
  UIWT.splice(i, 1);

  for (const user of UIWT) {
    const invoice = {
    detail: {
        invoice_number: invoiceNumber,
        invoice_date: today,
        currency_code: "USD"
      },
      invoicer: {
        name: {
          given_name: payeeName
        },
        email_address: payeeEmail,
      },
      primary_recipients: [
        {
          billing_info: {
            name: {
              given_name: user.name
            },
            email_address: user.email
          }
        }
      ],
      items: user.items.map((item) => {
        return ({
          name: item.name,
          quantity: "1",
          unit_amount: {
            currency_code: "USD",
            value: item.price
          },
          tax: {
            name: "Sales Tax",
            percent: user.taxPercentage
          },
          unit_of_measure: "QUANTITY"
        });
      }),
      configuration: {
        partial_payment: {
          allow_partial_payment: true
        },
        tax_inclusive: false,
        template_id: ""
      }//,
      // amount: {
      //   breakdown: {
      //     custom: {
      //       label: "Total",
      //       amount: {
      //         currency_code: "USD",
      //         value: user.total
      //       }
      //     }
      //   }
      // }
    }

    // Create a new API instance
    //const api = new Invoices("AdSFgXZEfRseu26TVxkw63oWrwLOYLNuxNMVoTOJID5DVSrLqNE7N4oZXjkpEv45ljMAlQqnEJPMDbG3", "EHStiDIIg8XOe17FjI0HlRO9HHR-f634YV0yo6Gw4a5nRuWFdbfix3yqTM8elTAi2ZTmwjatK1z-WePm")
    // Or a sandbox api
    // const api = new Invoices(CLIENT_ID, CLIENT_SECRET, true)
    const api = new Invoices("AdSFgXZEfRseu26TVxkw63oWrwLOYLNuxNMVoTOJID5DVSrLqNE7N4oZXjkpEv45ljMAlQqnEJPMDbG3", "EHStiDIIg8XOe17FjI0HlRO9HHR-f634YV0yo6Gw4a5nRuWFdbfix3yqTM8elTAi2ZTmwjatK1z-WePm", true)

    // Initialize the API
    try {
      await api.initialize();
      console.log("API initialized");
    } catch (e) {
      console.log("Could not initialize");
      console.log(e);
      return;
    }

    // Get the next Invoice number
    console.log("Generating Invoice number");
    const invoiceNum = await api.generateInvoiceNumber();

    // Create a new Invoice draft
    console.log("Creating Invoice draft");
    const link = await api.createDraftInvoice(invoice);

    // Get the created invoice
    console.log("Getting Invoice draft");
    const invoiceDraft = await api.getInvoiceByLink(link);

    // Send the new Invoice to the recipient
    // console.log("Sending Invoice");
    // await api.sendInvoice(invoiceDraft.id);
  };

}

export default PaymentHandler;
