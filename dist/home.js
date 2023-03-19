"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("bootstrap/dist/css/bootstrap.min.css");
var _reactBootstrap = require("react-bootstrap");
require("./App.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Home = function Home() {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#e7f8ff"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "me-5 main-div body"
  }, /*#__PURE__*/_react.default.createElement("h1", null, " Fork Landing Page"), /*#__PURE__*/_react.default.createElement("p", null, " Bill splitting, made easy. "), /*#__PURE__*/_react.default.createElement("img", {
    src: "phone.jpg",
    class: "resize img-fluid",
    alt: "Responsive image"
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    class: "btn btn-success float-right"
  }, " Login with Venmo ")));
};
var _default = Home;
exports.default = _default;