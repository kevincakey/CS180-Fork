"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("bootstrap/dist/css/bootstrap.min.css");
require("App.css");
var _reactBootstrap = require("react-bootstrap");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Header = function Header() {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#e7f8ff"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "me-5 main-div body"
  }, /*#__PURE__*/_react.default.createElement("h1", null, " Fork Landing Page"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, " How It Works "), /*#__PURE__*/_react.default.createElement("li", null, " Login ")), /*#__PURE__*/_react.default.createElement("img", {
    src: "phone.jpg",
    class: "resize img-fluid",
    alt: "Responsive image"
  }), /*#__PURE__*/_react.default.createElement("div", {
    "ms-auto": true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, null, " Login with Venmo "))), /*#__PURE__*/_react.default.createElement("footer", {
    class: "text-center fixed-bottom",
    style: {
      backgroundColor: "#e7f8ff"
    }
  }, "Made with \u2764\uFE0F by Team Blu"));
};
var _default = Header;
exports.default = _default;