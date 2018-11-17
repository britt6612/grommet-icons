'use strict';

exports.__esModule = true;
exports.CodeSandbox = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CodeSandbox = exports.CodeSandbox = function CodeSandbox(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'CodeSandbox' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#444', strokeWidth: '2', d: 'M12,1.5 L3,6.5 L3,17.5 L12,22.5 L21,17.5 L21,6.5 L12,1.5 Z M12,22.5 L12,11.5 M21,6.5 L12,11.5 M12,11.5 L3,6.5 M21,17.5 L21,12 L16.5,14.5 L16.5,20 L21,17.5 Z M3,17.5 L3,12 L7.5,14.5 L7.5,20 L3,17.5 Z M12,1.5 L7.5,4 L12,6.5 L16.5,4 L12,1.5 Z' })
  );
};