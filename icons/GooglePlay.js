"use strict";

exports.__esModule = true;
exports.GooglePlay = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var GooglePlay = function GooglePlay(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "GooglePlay"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    stroke: "#444",
    strokeWidth: "2"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinejoin: "round",
    d: "M3 2v20l18-10z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "m3 2 11 14M3 22 14 8"
  })));
};

exports.GooglePlay = GooglePlay;