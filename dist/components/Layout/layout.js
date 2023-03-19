"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Navbar = _interopRequireDefault(require("../Navbar"));
var _footer = _interopRequireDefault(require("../Footer/footer"));
require("./layout.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Layout = function Layout(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement("main", {
    className: "main-content"
  }, props.children), /*#__PURE__*/_react.default.createElement(_footer.default, null));
};
var _default = Layout;
exports.default = _default;