"use strict";

exports.__esModule = true;
exports.Robot = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Robot = function Robot(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Robot"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M18.348 15.954a7 7 0 1 0-12.622.156M12 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-17V3M9 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 4.988L5 16s.072-.772.5-.5c.93.591 3.074 1.5 6.5 1.5 3.554 0 5.618-.916 6.5-1.5.359-.238.5.5.5.5l-1 2.988S17.005 21 12 21s-6-2.012-6-2.012z"
  }));
};

exports.Robot = Robot;