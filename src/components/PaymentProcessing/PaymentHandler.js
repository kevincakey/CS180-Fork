import React, { Component, useEffect } from 'react';
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
const ButtonWrapper = ({ currency, showSpinner }) => {
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
        {emails.map((item, i) => {
        return <PayPalButtons
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
                                    value: amounts[i],
                                },
                                payee: {
                                    email_address: emails[i]
                                }
                            }
                        ]
                    })

                // order.payee.email = "sb-uhvss25066906@personal.example.com";
                console.log(order);
                console.log(emails[i]);
                order.then((orderId) => {
                    // Your code here after create the order
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
    })}
    </>
    );
}

const PaymentHandler = () => {


  return (
    <div style={{ maxWidth: "750px", minHeight: "200px" }}>
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
      />
      </PayPalScriptProvider>
    </div>
  );      
}

export default PaymentHandler;
