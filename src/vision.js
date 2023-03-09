import { useState } from 'react';
import Tesseract from 'tesseract.js';

function binarize(image, threshold) {
  for(let i = 0; i < image.data.length; i += 4) {
    const r = image.data[i];
    const g = image.data[i + 1];
    const b = image.data[i + 2];
    let average = ((r + g + b) / 3 ) //calculates average rgb value for each pixel in the image
    let value = average < threshold ? 0 : 255;
    image.data[i] = image.data[i+1] = image.data[i+2] = value;
  }
  return image;
}

function binarizePath(imagePath, threshold, callback) {
  var img = new Image();
  img.onload = function() {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    binarize(imageData, threshold);

    ctx.putImageData(imageData, 0, 0);

    var binaryImageDataUrl = canvas.toDataURL(); // get the binary image as a data URL

    callback(binaryImageDataUrl);

  }
  img.src = imagePath;
}

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
        subTotal = currentLine.substring(currentLine.lastIndexOf(" "), currentLine.indexOf("\n"));
      }
      else if(currentLine.indexOf("Tax") !== -1){
        tax = currentLine.substring(currentLine.lastIndexOf(" "), currentLine.indexOf("\n"));
      }
      else if(currentLine.indexOf("Total") !== -1){
        total = currentLine.substring(currentLine.lastIndexOf(" "), currentLine.indexOf("\n"));
      }
      else{
        items.push(currentLine);
      }
    }
    ++index;
  }
  return [items, subTotal, tax, total];
}

export default function Vision(props) {
  const [imagePath, setImagePath] = useState("");
  const [result] = useState({});

  const handleChange = (event) => {
    setImagePath(URL.createObjectURL(event.target.files[0]));
  }
  const handleClick = () => {
    binarizePath(imagePath, 128, (binaryImageDataUrl) => {
      Tesseract.recognize(binaryImageDataUrl,'eng',
      { logger: m => console.log(m) })
    .catch (err => {
      console.error(err) })
    .then(result => {
      var [itemsByPrice, subtotal, tax, finalTotal] = parseResultToBill(result);
      // this.setState({
      //   result: {
      //     fin: result,
      //     items: itemsByPrice,
      //     subTotal: subtotal,
      //     tax: tax,
      //     total: finalTotal
      //   }
      // })

      props.returnFunc({
        fin: result,
        items: itemsByPrice,
        subTotal: subtotal,
        tax: tax,
        total: finalTotal
      });

      // console.log(result, itemsByPrice);
      // console.log(subtotal);
      // console.log(tax);
      // console.log(finalTotal);
      })
    });
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
