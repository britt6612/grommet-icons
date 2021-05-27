"use strict";

exports.__esModule = true;
exports.Plug = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Plug = function Plug(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Plug"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 5V1h-2v4h-4V1H8v4H5v8a3 3 0 0 0 3 3h3v8h2v-8h3a3 3 0 0 0 3-3V5h-3zm-9 8V7h10v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z",
    fill: "#000"
  }));
};

exports.Plug = Plug;