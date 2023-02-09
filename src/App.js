import React, { Component }  from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Dropdown, Collapse, Col, Row} from 'react-bootstrap';


//TODO: DEFINE DATABASE ELEMENTS GLOBALLY

//homepage display class
export default class Page extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
          
      </div>
    );
  }


}

// export default class Payment extends React.Component {

// render(){
//   return(
//       <body>
//         <div id="paypal-button-container"></div>
//         <script src="https://www.paypal.com/sdk/js?client-id=test&currency=USD&intent=capture&enable-funding=venmo" data-sdk-integration-source="integrationbuilder"></script>
//         <script>
//           const paypalButtonsComponent = paypal.Buttons({
//               // optional styling for buttons
//               // https://developer.paypal.com/docs/checkout/standard/customize/buttons-style-guide/
//               style: {
//                 color: "gold",
//                 shape: "rect",
//                 layout: "vertical"
//               },

//               // set up the transaction
//               createOrder: (data, actions) => {
//                   // pass in any options from the v2 orders create call:
//                   // https://developer.paypal.com/api/orders/v2/#orders-create-request-body
//                   const createOrderPayload = {
//                       purchase_units: [
//                           {
//                               amount: {
//                                   value: "88.44"
//                               }
//                           }
//                       ]
//                   };

//                   return actions.order.create(createOrderPayload);
//               },

//               // finalize the transaction
//               onApprove: (data, actions) => {
//                   const captureOrderHandler = (details) => {
//                       const payerName = details.payer.name.given_name;
//                       console.log('Transaction completed');
//                   };

//                   return actions.order.capture().then(captureOrderHandler);
//               },

//               // handle unrecoverable errors
//               onError: (err) => {
//                   console.error('An error prevented the buyer from checking out with PayPal');
//               }
//           });

//           paypalButtonsComponent
//               .render("#paypal-button-container")
//               .catch((err) => {
//                   console.error('PayPal Buttons failed to render');
//               });
//         </script>
//       </body>
//   );
// }
// }
