import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './works.css'

const Works = () => {
return (
	<div class="me-5 main-div body">
		<h1> How Fork Works </h1>
		<h2>Scan</h2>
		<p> We use Tesseract.js, an optical character recognition engine to parse your receipt into readable json for our code to understand what items need to be split and how much they were.
</p>
		<h2> Parse </h2>
		<p>Tesseract.js does some parsing magic 🪄 </p>

		<h2> Split </h2>
		<p> We utilize a PayPal React library which simplifies the implementation details of the PayPal Button into one single React component. 
			This library grants us access to components such as the PayPalButton which we use to display the various payment buttons.
			 We take in the diners emails, food prices, and item assignments. We then use this information to display the payment buttons for each diner.  </p>

	</div>
);
};

export default Works;
