"use strict";

exports.__esModule = true;
exports.Bike = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Bike = function Bike(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Bike"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM5 6h5m9 9L16 5h-3M9 9l-4 6h7c0-3 2-6 5-6H9zm0 0L7 6"
  }));
};

exports.Bike = Bike;