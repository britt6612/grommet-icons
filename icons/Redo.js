"use strict";

exports.__esModule = true;
exports.Redo = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Redo = function Redo(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Redo"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16.82 4 15.4 5.44 17.94 8H8.23a6 6 0 0 0 0 12h2v-2h-2a4 4 0 0 1 0-8h9.71l-2.54 2.51 1.41 1.41L21.77 9z"
  }));
};

exports.Redo = Redo;