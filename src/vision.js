import { useState } from 'react';
import Tesseract from 'tesseract.js';

export default function Vision() {
  const [imagePath, setImagePath] = useState("");
 
  const handleChange = (event) => {
    setImagePath(URL.createObjectURL(event.target.files[0]));
  }
 
  const handleClick = () => {
  
    Tesseract.recognize(imagePath,'eng', 
      { logger: m => console.log(m) })
    .catch (err => {
      console.error(err) })
    .then(result => {
      console.log(result) })
  }
 
  return (
    <div className="App">
      <main className="App-main">
        <h3>Actual imagePath uploaded</h3>
        <img 
           src={imagePath} className="App-image" alt="logo"/>
        <input type="file" onChange={handleChange} />
        <button onClick={handleClick} style={{height:50}}> convert to text</button>
      </main>
    </div>
  );
}