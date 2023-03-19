"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("bootstrap/dist/css/bootstrap.min.css");
require("./works.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Works = function Works() {
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "me-5 main-div body"
  }, /*#__PURE__*/_react.default.createElement("h1", null, " How Fork Works "), /*#__PURE__*/_react.default.createElement("h2", null, "Scan"), /*#__PURE__*/_react.default.createElement("p", null, " We use Tesseract.js, an optical character recognition engine to parse your receipt into readable json for our code to understand what items need to be split and how much they were."), /*#__PURE__*/_react.default.createElement("h2", null, " Parse "), /*#__PURE__*/_react.default.createElement("p", null, "Tesseract.js does some parsing magic \uD83E\uDE84 "), /*#__PURE__*/_react.default.createElement("h2", null, " Split "), /*#__PURE__*/_react.default.createElement("p", null, " We utilize a PayPal React library which simplifies the implementation details of the PayPal Button into one single React component. This library grants us access to components such as the PayPalButton which we use to display the various payment buttons. We take in the diners emails, food prices, and item assignments. We then use this information to display the payment buttons for each diner.  "));
};
var _default = Works;
exports.default = _default;