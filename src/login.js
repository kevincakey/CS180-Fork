import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaymentProcessor from './components/PaymentProcessing/PaymentProcessor.js'
import InvoiceTest from './components/PaymentProcessing/InvoiceTest.js';


export default class Login extends React.Component {
	render() {
		return (
			<div className="body">
			<h1>
				Start scanning ...
				<div className="body">
					<p>
						<ul>
							<li> 1. Scan your receipt below 👇 </li>
							<li> 2. Assign yourself and others to corresponding items</li>
							<li> 3. Split the bill!</li>
						</ul>
					</p>
				</div>
			</h1>
			<PaymentProcessor/>
      {/* <InvoiceTest/> */}
			</div>
		);
	}
}
