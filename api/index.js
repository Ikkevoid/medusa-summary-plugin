"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = require("express");
var _authenticate = _interopRequireDefault(require("@medusajs/medusa/dist/api/middlewares/authenticate"));
var _default = function _default() {
  var router = (0, _express.Router)();
  router.get("/admin/stats", (0, _authenticate["default"])(), /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var productService, customerService, summaryService, productCount, customerCount, ordersCount, sales;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              productService = req.scope.resolve("productService");
              customerService = req.scope.resolve("customerService");
              summaryService = req.scope.resolve("summaryService");
              _context.next = 5;
              return productService.count();
            case 5:
              productCount = _context.sent;
              _context.next = 8;
              return customerService.count();
            case 8:
              customerCount = _context.sent;
              _context.next = 11;
              return summaryService.ordersCount();
            case 11:
              ordersCount = _context.sent;
              _context.next = 14;
              return summaryService.salesTotal();
            case 14:
              sales = _context.sent;
              res.json({
                customers: customerCount,
                products: productCount,
                orders: ordersCount,
                sales: sales,
                averageSales: sales / ordersCount || 0
              });
            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  return router;
};
exports["default"] = _default;