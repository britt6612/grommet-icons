"use strict";

exports.__esModule = true;
exports.Switch = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Switch = function Switch(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Switch"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 1h14v22H5V1zm2.5 10H17v10H7V11h.5zM15 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-4 13v-5h2v5h-2zm1-13.998a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
    fill: "#000"
  }));
};

exports.Switch = Switch;