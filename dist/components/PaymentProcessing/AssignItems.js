"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AssignItems = function AssignItems(props) {
  var _nameList$0$itemIndex;
  var itemList = props.visionData.items; // [{name: "item1", price: 1}, {name: "item2", price: 2}, {name: "item3", price: 3}, {name: "item4", price: 1}];
  //itemList = itemList.concat(itemList);
  var nameList = props.userInfo; //[{name: "name1", email: "email1"}, {name: "name2", email: "email2"}, {name: "name3", email: "email3"}];

  //add itemIndexList to each name
  nameList = nameList.map(function (name) {
    return _objectSpread(_objectSpread({}, name), {}, {
      itemIndexList: []
    });
  });
  //assign all items to the first name by default
  (_nameList$0$itemIndex = nameList[0].itemIndexList).push.apply(_nameList$0$itemIndex, _toConsumableArray(itemList.keys()));

  //use this for output
  var _useState = (0, _react.useState)(nameList),
    _useState2 = _slicedToArray(_useState, 2),
    infoWithItems = _useState2[0],
    setInfoWithItems = _useState2[1];
  var rowWidth = 5;

  //split itemList into rows for display
  var rowList = [];
  itemList.forEach(function (item, i) {
    if (i % rowWidth === 0) {
      rowList.push([]);
    }
    rowList[rowList.length - 1].push(item);
  });
  var assignItem = function assignItem(name, itemIndex) {
    var newInfo = _toConsumableArray(infoWithItems);

    //remove it if its been assigned
    newInfo.forEach(function (entry) {
      entry.itemIndexList.forEach(function (index) {
        if (index === itemIndex) {
          entry.itemIndexList.splice(entry.itemIndexList.indexOf(index), 1);
        }
      });
    });

    // console.log(newInfo.find((entry) => entry.name === name));
    //assign it to the new user
    newInfo.find(function (entry) {
      return entry.name === name;
    }).itemIndexList.push(itemIndex);
    setInfoWithItems(newInfo);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, rowList.map(function (row, i) {
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
      className: "justify-content-center my-2",
      key: i
    }, row.map(function (item, j) {
      return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
        className: "align-items-center",
        style: {
          maxWidth: "20vw",
          minWidth: "10vw"
        },
        key: j
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card, {
        className: "border rounded-3"
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Body, {
        className: "border rounded-3 bg-white"
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Title, {
        className: "bg-white"
      }, item.name), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Text, {
        className: "bg-white"
      }, "$", item.price), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Select, {
        className: "bg-white",
        onChange: function onChange(e) {
          return assignItem(e.target.value, i * rowWidth + j);
        }
      }, nameList.map(function (name, nameIndex) {
        return /*#__PURE__*/_react.default.createElement("option", {
          key: nameIndex
        }, name.name);
      })))));
    }));
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "my-2"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    onClick: function onClick() {
      return props.finishFunc(infoWithItems);
    }
  }, "Next Step"))));
};
var _default = AssignItems;
exports.default = _default;