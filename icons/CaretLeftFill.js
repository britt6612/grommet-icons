"use strict";

exports.__esModule = true;
exports.CaretLeftFill = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CaretLeftFill = function CaretLeftFill(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CaretLeftFill"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15 18V6l-6 6z",
    fill: "#000"
  }));
};

exports.CaretLeftFill = CaretLeftFill;