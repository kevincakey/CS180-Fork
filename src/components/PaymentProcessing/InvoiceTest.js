import React from 'react'
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
  
  }

export const InvoiceTest = () => {

  

  
  
  


  return (
    <div>InvoiceTest</div>
  )
}
