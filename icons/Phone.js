"use strict";

exports.__esModule = true;
exports.Phone = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Phone = function Phone(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Phone"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M6.375,2 C5,2 3,3.5 2.5,4.5 C1.78539513,5.92920973 1.9033374,6.49067969 2.375,8 C3,10 4.83244154,13.545116 7.375,16 C11,19.5 14.375,21 15.875,21.5 C17.375,22 19,21.5 20,20.5 C21,19.5 22,18.5 20.875,17 C20.077805,15.9370734 18.9164827,14.7082413 17.5,14 C16.2120164,13.3560082 15.444427,13.5904184 15,14.5 C14.7543142,15.0028302 14.6780041,15.9659877 14.5,16.5 C14.2754227,17.173732 13.375,17 12.375,16.5 C11.4176235,16.0213117 9,14 7,11 C5.76086515,9.14129772 7.74150655,9.12924672 9,8.5 C10,8 10.3099909,6.84998476 9.5,5.5 C8,3 7.5,2 6.375,2 Z"
  }));
};

exports.Phone = Phone;