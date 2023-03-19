"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _NavbarElements = require("./NavbarElements");
require("./navbar.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Navbar = function Navbar() {
  return /*#__PURE__*/_react.default.createElement(_NavbarElements.Nav, {
    className: "navbar navbar-expand-lg"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "navbar-brand",
    href: "#"
  }, "Fork"), /*#__PURE__*/_react.default.createElement(_NavbarElements.NavMenu, null, /*#__PURE__*/_react.default.createElement(_NavbarElements.NavLink, {
    to: "/home",
    activeStyle: true
  }, "Home"), /*#__PURE__*/_react.default.createElement(_NavbarElements.NavLink, {
    to: "/works",
    activeStyle: true
  }, "How It Works"), /*#__PURE__*/_react.default.createElement(_NavbarElements.NavLink, {
    to: "/login",
    activeStyle: true
  }, "Login")));
};
var _default = Navbar;
exports.default = _default;