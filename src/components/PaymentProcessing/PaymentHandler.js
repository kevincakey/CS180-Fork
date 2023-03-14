import React, { useState, useEffect } from 'react';
import {Button, Row, Col} from 'react-bootstrap';

import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";


// This values are the props in the UI
const currency = "USD";
const style = {"layout":"vertical"};
var emails = ["sb-5bza4725037718@personal.example.com", "sb-43wny325020712@personal.example.com"];
var amounts = ["2.5", "3.5"];
var items = ["burger", "pizza"];

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, amount, email, finishFunc }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
      dispatch({
          type: "resetOptions",
          value: {
              ...options,
              currency: currency,
          },
      });
  }, [currency, showSpinner]);

  return (<>
    { (showSpinner && isPending) && <div className="spinner" /> }
    <PayPalButtons
      style={style}
      disabled={false}
      forceReRender={[amounts, currency, style]}
      fundingSource={undefined}
      createBillingAgreement={(data, actions) => {
        let order =actions.order
          .create({
            purchase_units: [
              {
                amount: {
                  currency_code: currency,
                  value: amount,
                },
                payee: {
                  email_address: email
                }
              }
            ]
          })

        // order.payee.email = "sb-uhvss25066906@personal.example.com";
        // console.log(order);
        // console.log(emails[i]);
        order.then((orderId) => {
          // Your code here after create the order
          finishFunc();
          return orderId;
        });

        return order;
      }}
      onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
              // Your code here after capture the order
          });
      }}
    />
  </>);
}

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
    let UIWT = props.userInfoWithItems.map((user) => {
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

      items.push({name: "tax", price: totalWithTax - total});

      return { name: user.name, email: user.email, total:totalWithTax, items: items };
    })

    //remove payee from list
    let i = UIWT.findIndex((user) => { return user.name === props.payeeName });
    payeeEmail = UIWT[i].email;
    UIWT.splice(i, 1);
    return UIWT;
  });

  const [currentInfo, setCurrentInfo] = useState(userInfoWithTotals[0]);

  console.log(props.userInfoWithItems);
  console.log("new", userInfoWithTotals);
  console.log("current", currentInfo);

  createAndSendInvoices(userInfoWithTotals, props.payeeName, payeeEmail);

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

  for (const user of userInfoWithTotals) {
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
