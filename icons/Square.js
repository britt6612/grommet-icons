"use strict";

exports.__esModule = true;
exports.Square = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Square = function Square(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Square"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#28C101",
    fillRule: "evenodd",
    d: "M14.444 8.333H9.556c-.675 0-1.223.548-1.223 1.223v4.888c0 .675.548 1.223 1.223 1.223h4.888c.675 0 1.223-.548 1.223-1.223V9.556c0-.675-.548-1.223-1.223-1.223M18.111 22H5.89A3.89 3.89 0 0 1 2 18.111V5.89A3.89 3.89 0 0 1 5.889 2H18.11A3.89 3.89 0 0 1 22 5.889V18.11A3.89 3.89 0 0 1 18.111 22zm0 2A5.89 5.89 0 0 0 24 18.111V5.89A5.89 5.89 0 0 0 18.111 0H5.89A5.89 5.89 0 0 0 0 5.889V18.11A5.89 5.89 0 0 0 5.889 24H18.11z"
  }));
};

exports.Square = Square;