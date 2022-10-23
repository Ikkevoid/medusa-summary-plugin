"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _medusa = require("@medusajs/medusa");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var SummaryService = /*#__PURE__*/function (_TransactionBaseServi) {
  (0, _inherits2["default"])(SummaryService, _TransactionBaseServi);
  var _super = _createSuper(SummaryService);
  function SummaryService(container) {
    var _this;
    (0, _classCallCheck2["default"])(this, SummaryService);
    _this = _super.call(this, container);
    _this.manager_ = container.manager;
    return _this;
  }
  (0, _createClass2["default"])(SummaryService, [{
    key: "ordersCount",
    value: function () {
      var _ordersCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var orderRepo, count;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                orderRepo = this.manager_.getRepository(_medusa.Order);
                _context.next = 3;
                return orderRepo.count();
              case 3:
                count = _context.sent;
                return _context.abrupt("return", count);
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function ordersCount() {
        return _ordersCount.apply(this, arguments);
      }
      return ordersCount;
    }()
  }, {
    key: "salesTotal",
    value: function () {
      var _salesTotal = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var lineItemRepository, result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                lineItemRepository = this.manager_.getRepository(_medusa.LineItem);
                _context2.next = 3;
                return lineItemRepository.createQueryBuilder('order').select('SUM(order.unit_price * fulfilled_quantity)').where('fulfilled_quantity = quantity').getRawOne();
              case 3:
                result = _context2.sent;
                return _context2.abrupt("return", result.sum);
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function salesTotal() {
        return _salesTotal.apply(this, arguments);
      }
      return salesTotal;
    }()
  }]);
  return SummaryService;
}(_medusa.TransactionBaseService);
var _default = SummaryService;
exports["default"] = _default;