"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _PaymentHandler = _interopRequireDefault(require("./PaymentHandler"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('PaymentHandler', function () {
  test('renders payment details correctly', function () {
    var userInfoWithItems = [{
      name: 'John Doe',
      email: 'john@example.com',
      itemIndexList: [0, 1, 2]
    }, {
      name: 'Jane Doe',
      email: 'jane@example.com',
      itemIndexList: [3, 4, 5]
    }];
    var visionData = {
      items: [{
        name: 'Item 1',
        price: 10
      }, {
        name: 'Item 2',
        price: 20
      }, {
        name: 'Item 3',
        price: 30
      }, {
        name: 'Item 4',
        price: 40
      }, {
        name: 'Item 5',
        price: 50
      }, {
        name: 'Item 6',
        price: 60
      }],
      subTotal: 210,
      total: 250
    };
    var payeeName = 'John Doe';
    var finishFunc = jest.fn();
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_PaymentHandler.default, {
      userInfoWithItems: userInfoWithItems,
      visionData: visionData,
      payeeName: payeeName,
      finishFunc: finishFunc
    }));
    expect(_react2.screen.getByText('John Doe')).toBeInTheDocument();
    expect(_react2.screen.getByText('$33.6')).toBeInTheDocument();
    expect(_react2.screen.getByText('Item 1')).toBeInTheDocument();
    expect(_react2.screen.getByText('$10')).toBeInTheDocument();
    expect(_react2.screen.getByText('Item 2')).toBeInTheDocument();
    expect(_react2.screen.getByText('$20')).toBeInTheDocument();
    expect(_react2.screen.getByText('Item 3')).toBeInTheDocument();
    expect(_react2.screen.getByText('$30')).toBeInTheDocument();
    expect(_react2.screen.queryByText('Item 4')).not.toBeInTheDocument();
    expect(_react2.screen.queryByText('Item 5')).not.toBeInTheDocument();
    expect(_react2.screen.queryByText('Item 6')).not.toBeInTheDocument();
    expect(finishFunc).not.toHaveBeenCalled();
    _react2.screen.getByText('Pay Next Person').click();
    expect(_react2.screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(_react2.screen.getByText('$42')).toBeInTheDocument();
    expect(_react2.screen.getByText('Item 4')).toBeInTheDocument();
    expect(_react2.screen.getByText('$40')).toBeInTheDocument();
    expect(_react2.screen.getByText('Item 5')).toBeInTheDocument();
    expect(_react2.screen.getByText('$50')).toBeInTheDocument();
    expect(_react2.screen.getByText('Item 6')).toBeInTheDocument();
    expect(_react2.screen.getByText('$60')).toBeInTheDocument();
    expect(finishFunc).not.toHaveBeenCalled();
    _react2.screen.getByText('Finish').click();
    expect(finishFunc).toHaveBeenCalled();
  });
});