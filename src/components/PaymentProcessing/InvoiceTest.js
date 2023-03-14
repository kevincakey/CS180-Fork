import React from 'react'
import "paypal-invoices";

const { Invoices } = require('paypal-invoices')

const { v4: uuidv4 } = require('uuid');

const invoiceNumber = uuidv4().substring(1,25);
console.log(invoiceNumber);

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

const invoice = {
detail: {
    invoice_number: invoiceNumber,
    reference: "deal-ref",
    invoice_date: "2023-03-12",
    currency_code: "USD",
  },
  invoicer: {
    name: {
      given_name: "John"
    },
    email_address: "sb-zkial24933043@business.example.com",
  },
  primary_recipients: [
    {
      billing_info: {
        name: {
          given_name: "Stephanie",
          surname: "Meyers"
        },
        email_address: "sb-uhvss25066906@personal.example.com"
      }
    }
  ],
  items: [
    {
      name: "Yoga Mat",
      quantity: "1",
      unit_amount: {
        currency_code: "USD",
        value: "50.00"
      },
      tax: {
        name: "Sales Tax",
        percent: "7.25"
      }
    }
  ],
  configuration: {
    partial_payment: {
      allow_partial_payment: true
    },
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

  // Get the created invoice will be accessible once actual email is used
  // console.log("Getting Invoice draft");
  // const invoiceDraft = await api.getInvoiceByLink(link);

  // Send the new Invoice to the recipient will be accessible once actual email is used
  // console.log("Sending Invoice");
  // await api.sendInvoice(invoiceDraft.id);

}

export const InvoiceTest = () => {

  
  main();

  
  


  return (
    <div>InvoiceTest</div>
  )
}

export default InvoiceTest;