"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
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
var InputInfo = function InputInfo(props) {
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    curName = _useState2[0],
    setCurName = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    curEmail = _useState4[0],
    setCurEmail = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    payeeName = _useState6[0],
    setPayeeName = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    info = _useState8[0],
    setInfo = _useState8[1];
  var returnNameList = function returnNameList() {
    if (info.length === 0) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
    }
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h4", null, " Enter the names and emails of everyone who paid for the items"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup, {
      variant: "flush",
      className: "border rounded-3"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup.Item, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
      className: "d-flex align-items-center bg-white",
      xs: 5
    }, "Name"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
      className: "d-flex align-items-center bg-white",
      xs: 5
    }, "Email"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
      className: "d-flex align-items-center bg-white"
    }, "Payee"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
      className: "d-flex align-items-center bg-white"
    }, "Delete"))), info.map(function (entry, i) {
      var name = entry.name;
      var email = entry.email;
      var deleteEntry = function deleteEntry(name) {
        info.forEach(function (entry, j) {
          if (entry.name === name) {
            var newInfo = _toConsumableArray(info);
            newInfo.splice(j, 1);
            setInfo(newInfo);
            if (name === payeeName) {
              setPayeeName(newInfo.length > 0 ? newInfo[0].name : "");
            }
            return;
          }
        });
      };
      return /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup.Item, {
        key: i
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
        className: "d-flex align-items-center bg-white",
        xs: 5
      }, name), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
        className: "d-flex align-items-center bg-white",
        xs: 5
      }, email), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
        className: "d-flex bg-white",
        xs: 1
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Check, {
        className: "my-auto bg-white",
        type: "switch",
        onChange: function onChange() {
          return setPayeeName(name);
        },
        checked: payeeName === name
      })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
        className: "bg-white ",
        xs: 1
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return deleteEntry(name);
        }
      }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        style: {
          backgroundColor: "#0d6efd"
        },
        icon: _freeSolidSvgIcons.faTrash
      })))));
    })));
  };
  var addInfo = function addInfo() {
    var testEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    if (curName !== "" && curEmail !== "" && testEmail.test(curEmail)) {
      setCurName("");
      setCurEmail("");
      if (payeeName === "") {
        setPayeeName(curName);
      }
      setInfo([].concat(_toConsumableArray(info), [{
        name: curName,
        email: curEmail
      }]));
    }
  };
  var finishIfReady = function finishIfReady() {
    if (info.length > 1) {
      props.finishFunc({
        payeeName: payeeName,
        info: info
      });
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", null, returnNameList(), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "my-2"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    xs: 5
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, null, "Name"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    value: curName,
    onChange: function onChange(e) {
      setCurName(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    xs: 6
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, null, "Email"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    type: "email",
    placeholder: "name@example.com",
    value: curEmail,
    onChange: function onChange(e) {
      setCurEmail(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    className: "d-flex"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "mt-auto",
    onClick: addInfo
  }, "+"))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "my-2"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    onClick: finishIfReady
  }, "Next Step"))));
};
var _default = InputInfo;
exports.default = _default;