"use strict";

exports.__esModule = true;
exports.Tty = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Tty = function Tty(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Tty"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M7 19h10a1 1 0 0 1 1 1h0a1 1 0 0 1-1 1H7h0a1 1 0 0 1-1-1h0a1 1 0 0 1 1-1zm0-9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm5-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm5-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
};

exports.Tty = Tty;