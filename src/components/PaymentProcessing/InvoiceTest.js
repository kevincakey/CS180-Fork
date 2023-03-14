import React from 'react'
import "paypal-invoices";

// //access token
// const https = require('https');

// const options = {
//   hostname: 'api-m.sandbox.paypal.com',
//   path: '/v1/payments/payment',
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer access_token$sandbox$892h3ddknwqhd8y7$ed02b513a0654408cd4f13b9627326e8'
//   }
// };

// const req = https.request(options, res => {
//   console.log(statusCode: ${res.statusCode});

//   res.on('data', d => {
//     process.stdout.write(d);
//   });
// });

// req.on('error', error => {
//   console.error(error);
// });
// //access token end

const { Invoices } = require('paypal-invoices')

// `const { v4: uuidv4 } = require('uuid');

// const invoiceNumber = uuidv4().substring(1,25);
// console.log(invoiceNumber);

const invoice = {
detail: {
    //invoice_number: invoiceNumber,
    invoice_number: "a81658f-ff1a-4b3e-838e-6",
    reference: "deal-ref",
    invoice_date: "2022-02-04",
    currency_code: "USD",
    note: "Thank you for your business.",
    term: "No refunds after 30 days.",
    memo: "This is a long contract",
    payment_term: {
      term_type: "NET_10",
      due_date: "2022-02-14"
    }
  },
  invoicer: {
    name: {
      given_name: "David",
      surname: "Larusso"
    },
    address: {
      address_line_1: "1234 First Street",
      address_line_2: "337673 Hillside Court",
      admin_area_2: "Anytown",
      admin_area_1: "CA",
      postal_code: "98765",
      country_code: "US"
    },
    email_address: "sb-zkial24933043@business.example.com",
    phones: [
      {
        country_code: "001",
        national_number: "4085551234",
        phone_type: "MOBILE"
      }
    ],
    website: "https://example.com",
    tax_id: "XX-XXXXXXX",
    logo_url: "https://example.com/logo.PNG",
    additional_notes: "example note"
  },
  primary_recipients: [
    {
      billing_info: {
        name: {
          given_name: "Stephanie",
          surname: "Meyers"
        },
        address: {
          address_line_1: "1234 Main Street",
          admin_area_2: "Anytown",
          admin_area_1: "CA",
          postal_code: "98765",
          country_code: "US"
        },
        email_address: "sb-uhvss25066906@personal.example.com",
        phones: [
          {
            country_code: "001",
            national_number: "4884551234",
            phone_type: "HOME"
          }
        ],
        additional_info_value: "add-info"
      },
      shipping_info: {
        name: {
          given_name: "Stephanie",
          surname: "Meyers"
        },
        address: {
          address_line_1: "1234 Main Street",
          admin_area_2: "Anytown",
          admin_area_1: "CA",
          postal_code: "98765",
          country_code: "US"
        }
      }
    }
  ],
  items: [
    {
      name: "Yoga Mat",
      description: "Elastic mat to practice yoga.",
      quantity: "1",
      unit_amount: {
        currency_code: "USD",
        value: "50.00"
      },
      tax: {
        name: "Sales Tax",
        percent: "7.25"
      },
      discount: {
        percent: "5"
      },
      unit_of_measure: "QUANTITY"
    },
    {
      name: "Yoga t-shirt",
      quantity: "1",
      unit_amount: {
        currency_code: "USD",
        value: "10.00"
      },
      tax: {
        name: "Sales Tax",
        percent: "7.25"
      },
      discount: {
        amount: {
          currency_code: "USD",
          value: "5.00"
        }
      },
      unit_of_measure: "QUANTITY"
    }
  ],
  configuration: {
    partial_payment: {
      allow_partial_payment: true,
      minimum_amount_due: {
        currency_code: "USD",
        value: "20.00"
      }
    },
    allow_tip: true,
    tax_calculated_after_discount: true,
    tax_inclusive: false,
    template_id: ""
  },
  amount: {
    breakdown: {
      custom: {
        label: "Packing Charges",
        amount: {
          currency_code: "USD",
          value: "10.00"
        }
      }
    }
  }
}

const main = async () => {
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
  console.log("Sending Invoice");
  await api.sendInvoice(invoiceDraft.id);

}

export const InvoiceTest = () => {

  
  main();

  
  


  return (
    <div>InvoiceTest</div>
  )
}

export default InvoiceTest;