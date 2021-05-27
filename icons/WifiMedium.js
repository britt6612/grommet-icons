"use strict";

exports.__esModule = true;
exports.WifiMedium = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var WifiMedium = function WifiMedium(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "WifiMedium"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-4.243-6.243a6 6 0 0 1 8.486 0M4.929 10.93c3.905-3.905 10.237-3.905 14.142 0"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    strokeOpacity: ".2",
    d: "M2.1 8.1c5.468-5.467 14.332-5.467 19.8 0",
    opacity: ".8"
  })));
};

exports.WifiMedium = WifiMedium;