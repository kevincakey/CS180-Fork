"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// const PaymentHandler = (props) => {

//   const [currentState, setCurrentState] = useState(0);
//   const [userInfoWithTotals, setUserInfoWithTotals] = useState(() => {
//     let UIWT = props.userInfoWithItems.map((user) => {
//       let total = 0;
//       user.itemIndexList.forEach((index) => { total += props.visionData.items[index].price });

//       //normalize to total with tax and tip included
//       total = Math.ceil((total/props.visionData.subTotal) * props.visionData.total * 100) / 100;

//       return { name: user.name, email: user.email, total:total };
//     })

//     //remove payee from list
//     let i = UIWT.findIndex((user) => { return user.name === props.payeeName });
//     UIWT.splice(i, 1);
//     return UIWT;
//   });

//   const [currentInfo, setCurrentInfo] = useState(userInfoWithTotals[0]);

//   useEffect( () => {
//     setCurrentInfo(userInfoWithTotals[currentState]);
//   }, [currentState])

//   console.log(props.userInfoWithItems);
//   console.log("new", userInfoWithTotals);
//   console.log("current", currentInfo);
//   console.log("current state", currentState);

//   if (currentState >= props.userInfoWithItems.length - 1) {
//     props.finishFunc();
//     return (<></>);
//   }

//   let nextText = (currentState < userInfoWithTotals.length - 1) ? "Pay Next Person" : "Finish";
//   console.log(nextText)
//   return (
//     <div style={{ maxWidth: "750px", minHeight: "200px" }}>
//       <h4> Choose how to recieve ${currentInfo.total} from {currentInfo.name}</h4>
//       <PayPalScriptProvider
//         options={{
//           "client-id": "test",
//           components: "buttons",
//           currency: "USD"
//         }}
//       >
//      <ButtonWrapper
//         currency={currency}
//         showSpinner={false}
//         amount={currentInfo.total}
//         email={currentInfo.email}
//         finishFunc={() => console.log("fin") } 
//         // setCurrentState(currentState + 1)
//       />
//       </PayPalScriptProvider>
//       <Row className="my-2">
//         <Col/>
//         <Col align="center">
//           <Button onClick={() => setCurrentState(currentState + 1)}>{nextText}</Button>
//         </Col>
//        </Row> 
//     </div>
//   );      
// }

var PaymentHandler = function PaymentHandler(props) {
  var payeeEmail = "";
  var _useState = (0, _react.useState)(function () {
      var UIWT = props.userInfoWithItems.map(function (user) {
        var total = 0;
        var items = [];
        user.itemIndexList.forEach(function (index) {
          total += props.visionData.items[index].price;
          items.push({
            name: props.visionData.items[index].name,
            price: props.visionData.items[index].price
          });
        });

        //normalize to total with tax and tip included
        var totalWithTax = Math.ceil(total / props.visionData.subTotal * props.visionData.total * 100) / 100;
        var taxPercentage = (totalWithTax - total) / total * 100;
        return {
          name: user.name,
          email: user.email,
          total: totalWithTax,
          items: items,
          taxPercentage: taxPercentage
        };
      });

      //remove payee from list
      var i = UIWT.findIndex(function (user) {
        return user.name === props.payeeName;
      });
      payeeEmail = UIWT[i].email;
      // UIWT.splice(i, 1);
      return UIWT;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    userInfoWithTotals = _useState2[0],
    setUserInfoWithTotals = _useState2[1];
  console.log(props.userInfoWithItems);
  console.log("new", userInfoWithTotals);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h4", null, "Confirm the following items to be invoiced"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup, {
    className: "rounded-3"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tabs, {
    defaultActiveKey: props.payeeName,
    id: "uncontrolled-tab-example",
    className: "rounded-top"
  }, userInfoWithTotals.map(function (user, i) {
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tab, {
      eventKey: user.name,
      title: user.name,
      key: i,
      className: "rounded-bottom bg-white"
    }, user.name === props.payeeName && /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup.Item, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, " ", /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
      className: "d-flex align-items-center bg-white"
    }, "Note: you will not be invoicing yourself"))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup.Item, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
      className: "d-flex align-items-center bg-white"
    }, /*#__PURE__*/_react.default.createElement("b", {
      className: "bg-white"
    }, "Item")), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
      className: "d-flex align-items-center bg-white"
    }, /*#__PURE__*/_react.default.createElement("b", {
      className: "bg-white"
    }, "Price")))), user.items.map(function (item, j) {
      console.log(item);
      return /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup.Item, {
        key: j
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
        className: "d-flex align-items-center bg-white"
      }, item.name), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
        className: "d-flex align-items-center bg-white"
      }, "$", item.price)));
    }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup.Item, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
      className: "d-flex align-items-center bg-white"
    }, /*#__PURE__*/_react.default.createElement("b", {
      className: "bg-white"
    }, "Tax: ")), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
      className: "d-flex align-items-center bg-white"
    }, "$", Math.ceil(user.taxPercentage * user.total) / 100))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup.Item, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
      className: "d-flex align-items-center bg-white"
    }, /*#__PURE__*/_react.default.createElement("b", {
      className: "bg-white"
    }, "Total: ")), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
      className: "d-flex align-items-center bg-white"
    }, "$", user.total))));
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "my-2"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    onClick: function onClick() {
      createAndSendInvoices(userInfoWithTotals, props.payeeName, payeeEmail);
      props.finishFunc();
    }
  }, "Send Invoices"))));
};
var createAndSendInvoices = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(userInfoWithTotals, payeeName, payeeEmail) {
    var _require, Invoices, _require2, uuidv4, invoiceNumber, today, dd, mm, yyyy, UIWT, i, _iterator, _step, _loop, _ret;
    return _regeneratorRuntime().wrap(function _callee$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _require = require('paypal-invoices'), Invoices = _require.Invoices;
          _require2 = require('uuid'), uuidv4 = _require2.v4;
          invoiceNumber = uuidv4().substring(1, 25);
          today = new Date();
          dd = String(today.getDate()).padStart(2, '0');
          mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
          yyyy = today.getFullYear();
          today = yyyy + '-' + mm + '-' + dd;
          console.log(invoiceNumber);
          UIWT = _toConsumableArray(userInfoWithTotals); //remove payee from list
          i = UIWT.findIndex(function (user) {
            return user.name === payeeName;
          });
          UIWT.splice(i, 1);
          _iterator = _createForOfIteratorHelper(UIWT);
          _context2.prev = 13;
          _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
            var user, invoice, api, invoiceNum, link, invoiceDraft;
            return _regeneratorRuntime().wrap(function _loop$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  user = _step.value;
                  invoice = {
                    detail: {
                      invoice_number: invoiceNumber,
                      invoice_date: today,
                      currency_code: "USD"
                    },
                    invoicer: {
                      name: {
                        given_name: payeeName
                      },
                      email_address: payeeEmail
                    },
                    primary_recipients: [{
                      billing_info: {
                        name: {
                          given_name: user.name
                        },
                        email_address: user.email
                      }
                    }],
                    items: user.items.map(function (item) {
                      return {
                        name: item.name,
                        quantity: "1",
                        unit_amount: {
                          currency_code: "USD",
                          value: item.price
                        },
                        tax: {
                          name: "Sales Tax",
                          percent: user.taxPercentage
                        },
                        unit_of_measure: "QUANTITY"
                      };
                    }),
                    configuration: {
                      partial_payment: {
                        allow_partial_payment: true
                      },
                      tax_inclusive: false,
                      template_id: ""
                    } //,
                    // amount: {
                    //   breakdown: {
                    //     custom: {
                    //       label: "Total",
                    //       amount: {
                    //         currency_code: "USD",
                    //         value: user.total
                    //       }
                    //     }
                    //   }
                    // }
                  }; // Create a new API instance
                  //const api = new Invoices("AdSFgXZEfRseu26TVxkw63oWrwLOYLNuxNMVoTOJID5DVSrLqNE7N4oZXjkpEv45ljMAlQqnEJPMDbG3", "EHStiDIIg8XOe17FjI0HlRO9HHR-f634YV0yo6Gw4a5nRuWFdbfix3yqTM8elTAi2ZTmwjatK1z-WePm")
                  // Or a sandbox api
                  // const api = new Invoices(CLIENT_ID, CLIENT_SECRET, true)
                  api = new Invoices("AdSFgXZEfRseu26TVxkw63oWrwLOYLNuxNMVoTOJID5DVSrLqNE7N4oZXjkpEv45ljMAlQqnEJPMDbG3", "EHStiDIIg8XOe17FjI0HlRO9HHR-f634YV0yo6Gw4a5nRuWFdbfix3yqTM8elTAi2ZTmwjatK1z-WePm", true); // Initialize the API
                  _context.prev = 3;
                  _context.next = 6;
                  return api.initialize();
                case 6:
                  console.log("API initialized");
                  _context.next = 14;
                  break;
                case 9:
                  _context.prev = 9;
                  _context.t0 = _context["catch"](3);
                  console.log("Could not initialize");
                  console.log(_context.t0);
                  return _context.abrupt("return", {
                    v: void 0
                  });
                case 14:
                  // Get the next Invoice number
                  console.log("Generating Invoice number");
                  _context.next = 17;
                  return api.generateInvoiceNumber();
                case 17:
                  invoiceNum = _context.sent;
                  // Create a new Invoice draft
                  console.log("Creating Invoice draft");
                  _context.next = 21;
                  return api.createDraftInvoice(invoice);
                case 21:
                  link = _context.sent;
                  // Get the created invoice
                  console.log("Getting Invoice draft");
                  _context.next = 25;
                  return api.getInvoiceByLink(link);
                case 25:
                  invoiceDraft = _context.sent;
                case 26:
                case "end":
                  return _context.stop();
              }
            }, _loop, null, [[3, 9]]);
          });
          _iterator.s();
        case 16:
          if ((_step = _iterator.n()).done) {
            _context2.next = 23;
            break;
          }
          return _context2.delegateYield(_loop(), "t0", 18);
        case 18:
          _ret = _context2.t0;
          if (!(_typeof(_ret) === "object")) {
            _context2.next = 21;
            break;
          }
          return _context2.abrupt("return", _ret.v);
        case 21:
          _context2.next = 16;
          break;
        case 23:
          _context2.next = 28;
          break;
        case 25:
          _context2.prev = 25;
          _context2.t1 = _context2["catch"](13);
          _iterator.e(_context2.t1);
        case 28:
          _context2.prev = 28;
          _iterator.f();
          return _context2.finish(28);
        case 31:
          ;
        case 32:
        case "end":
          return _context2.stop();
      }
    }, _callee, null, [[13, 25, 28, 31]]);
  }));
  return function createAndSendInvoices(_x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
var _default = PaymentHandler;
exports.default = _default;
module.exports = PaymentHandler;