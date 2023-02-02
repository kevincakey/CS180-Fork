import Tesseract from 'tesseract.js'

//TODO: implement way to get image (as file, etc)

Tesseract.recognize(image, 'eng')
  .progress(message => console.log(message))
  .catch(error => console.log(error))
  .then(result => {
    console.log(result)
    let text = result.text
  });