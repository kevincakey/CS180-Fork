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
      createOrder={(data, actions) => {
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
      console.log("total", total)
      console.log("subtotal", props.visionData.subTotal)
      console.log("total", props.visionData.total)
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
