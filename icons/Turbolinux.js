"use strict";

exports.__esModule = true;
exports.Turbolinux = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Turbolinux = function Turbolinux(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Turbolinux"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#528DC4",
    fillRule: "evenodd",
    d: "m9.419 6.222.547 1.23h-3.35L6 6.223h3.419zm3.692 5.949L7.094 0l7.042 4.17.41 1.984h3.351l-.752 2.051h-2.188l1.778 8.274-4.171-2.052L14.684 24 8.187 10.803l4.923 1.368z"
  }));
};

exports.Turbolinux = Turbolinux;