"use strict";

exports.__esModule = true;
exports.PhoneVertical = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PhoneVertical = function PhoneVertical(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PhoneVertical"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 23a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h10zm-6-2H7V3h10v18h-4v-1.031a1 1 0 0 0-2 0V21z",
    fill: "#000"
  }));
};

exports.PhoneVertical = PhoneVertical;