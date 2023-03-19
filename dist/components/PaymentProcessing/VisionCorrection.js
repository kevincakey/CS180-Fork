"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisionCorrection = void 0;
var _reactBootstrap = require("react-bootstrap");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var VisionCorrection = function VisionCorrection(props) {
  var _useState = (0, _react.useState)(props.visionData.items),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var _useState3 = (0, _react.useState)(props.visionData.tax),
    _useState4 = _slicedToArray(_useState3, 2),
    tax = _useState4[0],
    setTax = _useState4[1];
  var _useState5 = (0, _react.useState)(props.visionData.subTotal),
    _useState6 = _slicedToArray(_useState5, 2),
    subTotal = _useState6[0],
    setSubTotal = _useState6[1];
  (0, _react.useEffect)(function () {
    if (props.visionData.items !== items) {
      setItems(props.visionData.items);
      setTax(props.visionData.tax);
      setSubTotal(props.visionData.subTotal);
    }
  }, [props.visionData.items]);
  if (!props.visionData || !props.visionData.items || props.visionData.items.length == 0 || !items) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h4", null, " Make any corrections to the parsed reciept if nessecary"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup, {
    variant: "flush",
    className: "border rounded-3"
  }, items.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup.Item, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
      className: "d-flex align-items-center bg-white",
      xs: 6
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
      value: item.name,
      onChange: function onChange(e) {
        var newItems = _toConsumableArray(items);
        newItems[i].name = Number(e.target.value);
        setItems(newItems);
      }
    })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
      className: "d-flex align-items-center bg-white",
      xs: 6
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
      value: item.price,
      onChange: function onChange(e) {
        var newItems = _toConsumableArray(items);
        if (isNaN(e.target.value)) {
          return;
        }
        newItems[i].price = Number(e.target.value);
        setItems(newItems);
      }
    }))));
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup.Item, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    className: "d-flex align-items-center bg-white",
    xs: 6
  }, "Subtotal"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    className: "d-flex align-items-center bg-white",
    xs: 6
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    value: subTotal,
    onChange: function onChange(e) {
      if (isNaN(e.target.value)) {
        return;
      }
      setSubTotal(Number(e.target.value));
    }
  })))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup.Item, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    className: "d-flex align-items-center bg-white",
    xs: 6
  }, "Tax"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    className: "d-flex align-items-center bg-white",
    xs: 6
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    value: tax,
    onChange: function onChange(e) {
      if (isNaN(e.target.value)) {
        return;
      }
      setTax(Number(e.target.value));
    }
  }))))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "mb-5 mt-2"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    onClick: function onClick() {
      return props.finishFunc();
    }
  }, "Next Step"))));
};
exports.VisionCorrection = VisionCorrection;