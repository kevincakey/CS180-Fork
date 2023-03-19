"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Vision;
var _react = require("react");
var _tesseract = _interopRequireDefault(require("tesseract.js"));
require("bootstrap/dist/css/bootstrap.min.css");
var _reactBootstrap = require("react-bootstrap");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function binarize(image, threshold) {
  for (var i = 0; i < image.data.length; i += 4) {
    var r = image.data[i];
    var g = image.data[i + 1];
    var b = image.data[i + 2];
    var average = (r + g + b) / 3; //calculates average rgb value for each pixel in the image
    var value = average < threshold ? 0 : 255;
    image.data[i] = image.data[i + 1] = image.data[i + 2] = value;
  }
  return image;
}
function binarizePath(imagePath, threshold, callback) {
  var img = new Image();
  img.onload = function () {
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
  };
  img.src = imagePath;
}
function parseResultToBill(result) {
  var lines = result.data.lines,
    size = lines.length;
  var items = new Array();
  var index = 0,
    subTotal = "",
    tax = "",
    total = "";
  //.indexOf on array of strings does not work
  while (index < size) {
    var currentLine = lines[index].text;
    var charBeforeNL = currentLine.charAt(currentLine.indexOf('\n') - 1);
    if (!isNaN(charBeforeNL)) {
      if (currentLine.indexOf("Subtotal") !== -1) {
        subTotal = currentLine.substring(currentLine.lastIndexOf(" "), currentLine.indexOf("\n"));
      } else if (currentLine.indexOf("Tax") !== -1) {
        tax = currentLine.substring(currentLine.lastIndexOf(" "), currentLine.indexOf("\n"));
      } else if (currentLine.indexOf("Total") !== -1) {
        total = currentLine.substring(currentLine.lastIndexOf(" "), currentLine.indexOf("\n"));
      } else {
        items.push(currentLine);
      }
    }
    ++index;
  }
  return [items, subTotal, tax, total];
}
function Vision(props) {
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    imagePath = _useState2[0],
    setImagePath = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 1),
    result = _useState4[0];
  var handleChange = function handleChange(event) {
    setImagePath(URL.createObjectURL(event.target.files[0]));
  };
  var handleClick = function handleClick() {
    binarizePath(imagePath, 128, function (binaryImageDataUrl) {
      _tesseract.default.recognize(binaryImageDataUrl, 'eng') // { logger: m => console.log(m) })
      .catch(function (err) {
        console.error(err);
      }).then(function (result) {
        var _parseResultToBill = parseResultToBill(result),
          _parseResultToBill2 = _slicedToArray(_parseResultToBill, 4),
          itemsByPrice = _parseResultToBill2[0],
          subtotal = _parseResultToBill2[1],
          tax = _parseResultToBill2[2],
          finalTotal = _parseResultToBill2[3];
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
      });
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("main", {
    className: "App-mainD"
  }, /*#__PURE__*/React.createElement("h3", null, "Upload Your Receipt"), /*#__PURE__*/React.createElement("img", {
    src: imagePath,
    className: "App-image",
    alt: "logo"
  }), /*#__PURE__*/React.createElement("input", {
    type: "file",
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleClick,
    style: {
      height: 50
    }
  }, " convert to text")));
}