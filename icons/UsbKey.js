"use strict";

exports.__esModule = true;
exports.UsbKey = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var UsbKey = function UsbKey(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "UsbKey"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 6a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h14v-1h7V7h-7V6H3zm14 3v5h5V9h-5zm-2 6V8H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12zm4-3.992h1.01v-1.01H19v1.01zm.51 2h-.5v-1.01h1.01v1.01h-.51z",
    fill: "#000"
  }));
};

exports.UsbKey = UsbKey;