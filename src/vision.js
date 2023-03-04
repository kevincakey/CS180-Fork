import { useState } from 'react';
import Tesseract from 'tesseract.js';

function parseResultToBill(result){
  var lines = result.data.lines, size = lines.length;
  let items = new Array();
  var index = 0, subTotal = "", tax = "", total = "";
  //.indexOf on array of strings does not work
  while(index < size){
    let currentLine = lines[index].text;
    var charBeforeNL = currentLine.charAt((currentLine.indexOf('\n')) - 1);
    if(!(isNaN(charBeforeNL))){
      if(currentLine.indexOf("Subtotal") !== -1){
        subTotal = currentLine.substring(0, currentLine.indexOf("\n"));
      }
      else if(currentLine.indexOf("Tax") !== -1){
        tax = currentLine.substring(0, currentLine.indexOf("\n"));
      }
      else if(currentLine.indexOf("Total") !== -1){
        total = currentLine.substring(0, currentLine.indexOf("\n"));
      }
      else{
        items.push(currentLine);
      }
    }
    ++index;
  }
  return [items, subTotal, tax, total];
}

export default function Vision() {
  const [imagePath, setImagePath] = useState("");
  
  const handleChange = (event) => {
    setImagePath(URL.createObjectURL(event.target.files[0]));
  }
  //====problem of tesseract having slightly higher confidence scores on decimal numbers that are incorrect====
  const handleClick = () => {
    Tesseract.recognize(imagePath,'eng', 
      { logger: m => console.log(m) })
    .catch (err => {
      console.error(err) })
    .then(result => {
      var [itemsByPrice, subtotal, tax, finalTotal] = parseResultToBill(result);
      console.log(result, itemsByPrice);
      console.log(subtotal);
      console.log(tax);
      console.log(finalTotal);
    })
  }
  return (
    <div className="App">
      <main className="App-mainD">
        <h3>Actual imagePath uploaded</h3>
        <img 
           src={imagePath} className="App-image" alt="logo"/>
        <input type="file" onChange={handleChange} />
        <button onClick={handleClick} style={{height:50}}> convert to text</button>
      </main>
    </div>
  );
}