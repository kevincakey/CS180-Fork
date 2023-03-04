import { useState } from 'react';
import Tesseract from 'tesseract.js';


//test different threshold values used ideas from https://dev.to/mathewthe2/using-javascript-to-preprocess-images-for-ocr-1jc
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

export default function Vision() {
  const [imagePath, setImagePath] = useState("");
  
  const handleChange = (event) => {
    setImagePath(URL.createObjectURL(event.target.files[0]));
  }


  //====problem of tesseract having slightly higher confidence scores on decimal numbers that are incorrect====
  const handleClick = () => {
    binarizePath(imagePath, 100, (binaryImageDataUrl) => {
    Tesseract.recognize(binaryImageDataUrl,'eng', 
    { logger: m => console.log(m) })
  .catch (err => {
    console.error(err) })
  .then(result => {
    console.log(result) })
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