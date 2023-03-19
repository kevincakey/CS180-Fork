"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _vision = _interopRequireDefault(require("./vision.js"));
var _PaymentHandler = _interopRequireDefault(require("./PaymentHandler.js"));
var _VisionCorrection = require("./VisionCorrection.js");
var _InputInfo = _interopRequireDefault(require("./InputInfo"));
var _AssignItems = _interopRequireDefault(require("./AssignItems"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PaymentProcessor = function PaymentProcessor() {
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentStage = _useState2[0],
    setCurrentStage = _useState2[1];
  var _useState3 = (0, _react.useState)({
      visionData: {
        fin: {},
        items: [],
        subTotal: -1,
        tax: -1,
        total: -1
      }
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    visionData = _useState4[0],
    setVisionData = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    userInfo = _useState6[0],
    setUserinfo = _useState6[1];
  var _useState7 = (0, _react.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    payeeName = _useState8[0],
    setPayeeName = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    userInfoWithItems = _useState10[0],
    setUserInfoWithItems = _useState10[1];
  var recievedUserInfoFromInput = function recievedUserInfoFromInput(infoArg) {
    setUserinfo(infoArg.info);
    setPayeeName(infoArg.payeeName);
    setCurrentStage(currentStage + 1);
  };
  var recievedPaymentInfoFromAssignItems = function recievedPaymentInfoFromAssignItems(infoArg) {
    setUserInfoWithItems(infoArg);
    setCurrentStage(currentStage + 1);
  };
  var recievedItemsFromVision = function recievedItemsFromVision(data) {
    data.items = parseVisionItems(data.items);
    data.subTotal = fixParsedNum(data.subTotal);
    data.tax = fixParsedNum(data.tax);
    if (data.total === "") {
      data.total = data.subTotal + data.tax;
    } else {
      data.total = fixParsedNum(data.total);
    }
    setVisionData(data);
    console.log(data);
    // setCurrentStage(currentStage + 1);
  };

  var paymentCompleted = function paymentCompleted() {
    setCurrentStage(currentStage + 1);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mx-5 justify-content-md-center"
  }, currentStage === 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_vision.default, {
    returnFunc: recievedItemsFromVision
  }), /*#__PURE__*/_react.default.createElement(_VisionCorrection.VisionCorrection, {
    visionData: visionData,
    finishFunc: function finishFunc() {
      return setCurrentStage(currentStage + 1);
    }
  })), currentStage === 1 && /*#__PURE__*/_react.default.createElement(_InputInfo.default, {
    finishFunc: recievedUserInfoFromInput
  }), currentStage === 2 && /*#__PURE__*/_react.default.createElement(_AssignItems.default, {
    userInfo: userInfo,
    visionData: visionData,
    finishFunc: recievedPaymentInfoFromAssignItems
  }), currentStage === 3 && /*#__PURE__*/_react.default.createElement(_PaymentHandler.default, {
    userInfoWithItems: userInfoWithItems,
    payeeName: payeeName,
    visionData: visionData
    // userInfoWithItems={ [
    //   {name: 'name1', email: 'sb-uhvss25066906@personal.example.com', itemIndexList: [0, 2]},
    //   {name: 'name2', email: 'sb-847aoz24933044@personal.example.com', itemIndexList: [1]},
    // ] }
    // payeeName={"name1"}
    // visionData={{ items: [
    //   {name: 'Front and rear brake cables', price: 100},
    //   {name: 'New set of pedal arms', price: 30},
    //   {name: 'Labor 3hrs', price: 15} 
    // ],
    // total: 154.06,
    // subTotal: 145,
    // tax: 9.06
    // }}
    ,
    finishFunc: paymentCompleted
  }), currentStage === 4 && /*#__PURE__*/_react.default.createElement("h4", null, " Congrats! You're all paid back"));
};
var _default = PaymentProcessor;
exports.default = _default;
var fixParsedNum = function fixParsedNum(num) {
  var newNum = num.replace(' ', "");
  newNum = newNum.replace(',', "");
  newNum = newNum.replace('.', "");
  newNum = newNum.replace('\n', "");
  return Number(newNum);
};
var parseVisionItems = function parseVisionItems(items) {
  // console.log(items);
  return items.map(function (item) {
    var splitArr = item.split(" ");
    var price = splitArr[splitArr.length - 1];
    price = price.replace('\n', "");
    var potentialDecimal = price.substring(price.length - 3, price.length - 2);
    // console.log(potentialDecimal);
    if (potentialDecimal === "," || potentialDecimal === ".") {
      price = price.substring(0, price.length - 3);
      // console.log(price);
    }

    price = price.replace(',', "");
    price = price.replace('.', "");
    // console.log(price);
    price = Number(price);
    splitArr = splitArr.filter(function (entry) {
      var localEntry = entry.replace('\n', "");
      localEntry = localEntry.replace(',', "");
      if (!isNaN(localEntry)) {
        return false;
      }
      return true;
    });
    return {
      name: splitArr.join(" "),
      price: price
    };
  });
};

// export default class PaymentProcessor extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       currentStage: 1,
//       visionData: {
//         fin: {},
//         items: [],
//         subTotal: -1,
//         tax: -1,
//         total: -1
//       },
//       userInfo: [],
//       payeeName: ""
//     };
//   }

//   render(){
//     return( <>{this.renderBasedOnState()}</> );
//   }

//   renderBasedOnState(){

//     if (this.state.currentStage === 0){
//       return ( <Vision returnFunc={this.recievedItemsFromVision}/> );
//     }
//     else if (this.state.currentStage === 1){
//       return( <InputInfo finishFunc={this.recievedUserInfoFromInput}/> );
//     }
//     else if (this.state.currentStage === 2){
//      return (<AssignItems 
//       userInfo={this.state.userInfo}
//       payeeName={ this.state.payeeName} 
//       visionData={this.state.visionData}
//       finishFunc={this.recievedPaymentInfoFromAssignItems}
//       />);
//    }
//    else if  (this.state.currentStage === 3){
//     return (<>hi</>);
//    }

//     return(<>AHHHHHHHHHHHHHHH</>);
//   }

//   advanceState = () =>{
//     this.setState({ currentStage: this.state.currentStage+1 });
//   }

//   recievedItemsFromVision = (data) => {
//     this.setState({ visionData: data});
//     console.log(data);
//     this.advanceState();
//   };

//   recievedUserInfoFromInput = (infoArg) => {
//     this.setState({ userInfo: infoArg.info, payeeName: infoArg.payeeName});
//     this.advanceState();
//   }

//   recievedPaymentInfoFromAssignItems = (infoArg) => {

//     this.advanceState();
//   }

// }