import { useState } from 'react';
import Tesseract from 'tesseract.js';

function parseResultToBill(result){
  //var text = result.data.text + "";
  var lines = result.data.lines, size = lines.length;
  var bill = "", index = 0;
  while(index < size){
    let currentLine = lines[index].text;
    var charBeforeNL = currentLine.charAt((currentLine.indexOf('\n')) - 1);
    if(currentLine.indexOf("otal") !== -1){
      bill += currentLine;
      return bill;
    }
    if(!(isNaN(charBeforeNL))){
      bill += currentLine;
    }
    ++index;
  }
  return bill;
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
      var bill = parseResultToBill(result);
      console.log(result);
      console.log(bill);
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