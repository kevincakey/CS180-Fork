import React, { useState, useEffect } from 'react';
import {Button, Row, Col} from 'react-bootstrap';

import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

import "paypal-invoices";

const { Invoices } = require('paypal-invoices')

const invoice = {
  "detail": {
    "invoice_number": "123",
    "reference": "deal-ref",
    "invoice_date": "2020-11-12",
    "currency_code": "USD",
    "note": "Thank you for your business.",
    "term": "No refunds after 30 days.",
    "memo": "This is a long contract",
    "payment_term": {
      "term_type": "NET_10",
      "due_date": "2020-11-22"
    }
  },
  "invoicer": {
    "name": {
      "given_name": "David",
      "surname": "Larusso"
    },
    "address": {
      "address_line_1": "1234 First Street",
      "address_line_2": "337673 Hillside Court",
      "admin_area_2": "Anytown",
      "admin_area_1": "CA",
      "postal_code": "98765",
      "country_code": "US"
    },
    "email_address": "<merchant@example.com>",
    "phones": [
      {
        "country_code": "001",
        "national_number": "4085551234",
        "phone_type": "MOBILE"
      }
    ],
    "website": "https://example.com",
    "tax_id": "XX-XXXXXXX",
    "logo_url": "https://example.com/logo.PNG",
    "additional_notes": "example note"
  },
  "primary_recipients": [
    {
      "billing_info": {
        "name": {
          "given_name": "Stephanie",
          "surname": "Meyers"
        },
        "address": {
          "address_line_1": "1234 Main Street",
          "admin_area_2": "Anytown",
          "admin_area_1": "CA",
          "postal_code": "98765",
          "country_code": "US"
        },
        "email_address": "<bill-me@example.com>",
        "phones": [
          {
            "country_code": "001",
            "national_number": "4884551234",
            "phone_type": "HOME"
          }
        ],
        "additional_info_value": "add-info"
      },
      "shipping_info": {
        "name": {
          "given_name": "Stephanie",
          "surname": "Meyers"
        },
        "address": {
          "address_line_1": "1234 Main Street",
          "admin_area_2": "Anytown",
          "admin_area_1": "CA",
          "postal_code": "98765",
          "country_code": "US"
        }
      }
    }
  ],
  "items": [
    {
      "name": "Yoga Mat",
      "description": "Elastic mat to practice yoga.",
      "quantity": "1",
      "unit_amount": {
        "currency_code": "USD",
        "value": "50.00"
      },
      "tax": {
        "name": "Sales Tax",
        "percent": "7.25"
      },
      "discount": {
        "percent": "5"
      },
      "unit_of_measure": "QUANTITY"
    },
    {
      "name": "Yoga t-shirt",
      "quantity": "1",
      "unit_amount": {
        "currency_code": "USD",
        "value": "10.00"
      },
      "tax": {
        "name": "Sales Tax",
        "percent": "7.25"
      },
      "discount": {
        "amount": {
          "currency_code": "USD",
          "value": "5.00"
        }
      },
      "unit_of_measure": "QUANTITY"
    }
  ],
  "configuration": {
    "partial_payment": {
      "allow_partial_payment": true,
      "minimum_amount_due": {
        "currency_code": "USD",
        "value": "20.00"
      }
    },
    "allow_tip": true,
    "tax_calculated_after_discount": true,
    "tax_inclusive": false,
    "template_id": ""
  },
  "amount": {
    "breakdown": {
      "custom": {
        "label": "Packing Charges",
        "amount": {
          "currency_code": "USD",
          "value": "10.00"
        }
      },
      "shipping": {
        "amount": {
          "currency_code": "USD",
          "value": "10.00"
        },
        "tax": {
          "name": "Sales Tax",
          "percent": "7.25"
        }
      },
      "discount": {
        "invoice_discount": {
          "percent": "5"
        }
      }
    }
  }
}

const main = async () => {
  // Create a new API instance
  const api = new Invoices(CLIENT_ID, CLIENT_SECRET)
  // Or a sandbox api
  // const api = new Invoices(CLIENT_ID, CLIENT_SECRET, true)

  // Initialize the API
  try {
    await api.initialize();
  } catch (e) {
    console.log("Could not initialize");
    return;
  }

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

const PaymentHandler = (props) => {

  const [currentState, setCurrentState] = useState(0);
  const [userInfoWithTotals, setUserInfoWithTotals] = useState(() => {
    let UIWT = props.userInfoWithItems.map((user) => {
      let total = 0;
      user.itemIndexList.forEach((index) => { total += props.visionData.items[index].price });

      //normalize to total with tax and tip included
      total = Math.ceil((total/props.visionData.subTotal) * props.visionData.total * 100) / 100;

      return { name: user.name, email: user.email, total:total };
    })

    //remove payee from list
    let i = UIWT.findIndex((user) => { return user.name === props.payeeName });
    UIWT.splice(i, 1);
    return UIWT;
  });

  const [currentInfo, setCurrentInfo] = useState(userInfoWithTotals[0]);

  useEffect( () => {
    setCurrentInfo(userInfoWithTotals[currentState]);
  }, [currentState])

  console.log(props.userInfoWithItems);
  console.log("new", userInfoWithTotals);
  console.log("current", currentInfo);
  console.log("current state", currentState);

  if (currentState >= props.userInfoWithItems.length - 1) {
    props.finishFunc();
    return (<></>);
  }

  let nextText = (currentState < userInfoWithTotals.length - 1) ? "Pay Next Person" : "Finish";
  console.log(nextText)
  return (
    <div style={{ maxWidth: "750px", minHeight: "200px" }}>
      <h4> Choose how to recieve ${currentInfo.total} from {currentInfo.name}</h4>
      <PayPalScriptProvider
        options={{
          "client-id": "test",
          components: "buttons",
          currency: "USD"
        }}
      >
     <ButtonWrapper
        currency={currency}
        showSpinner={false}
        amount={currentInfo.total}
        email={currentInfo.email}
        finishFunc={() => console.log("fin") } 
        // setCurrentState(currentState + 1)
      />
      </PayPalScriptProvider>
      <Row className="my-2">
        <Col/>
        <Col align="center">
          <Button onClick={() => setCurrentState(currentState + 1)}>{nextText}</Button>
        </Col>
       </Row> 
    </div>
  );      
}

export default PaymentHandler;
