"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavMenu = exports.NavLink = exports.Nav = exports.Bars = void 0;
var _reactRouterDom = require("react-router-dom");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Nav = _styledComponents.default.nav(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nbackground: #e7f8ff;\nheight: 85px;\ndisplay: flex;\njustify-content: space-between;\npadding: 0.2rem calc((100vw - 1000px) / 2);\nz-index: 12;\n"])));
exports.Nav = Nav;
var NavLink = (0, _styledComponents.default)(_reactRouterDom.NavLink)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\ncolor: #808080;\ndisplay: flex;\nalign-items: center;\ntext-decoration: none;\npadding: 0 1rem;\nheight: 100%;\ncursor: pointer;\n&.active {\n\tcolor: #4d4dff;\n}\n"])));
exports.NavLink = NavLink;
var Bars = (0, _styledComponents.default)(_reactRouterDom.NavLink)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\ndisplay: none;\ncolor: #808080;\n@media screen and (max-width: 768px) {\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\ttransform: translate(-100%, 75%);\n\tfont-size: 1.8rem;\n\tcursor: pointer;\n}\n"])));
exports.Bars = Bars;
var NavMenu = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\ndisplay: flex;\nalign-items: center;\nmargin-right: -24px;\n\n@media screen and (max-width: 768px) {\n\tdisplay: none;\n}\n"])));
exports.NavMenu = NavMenu;