'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Attachment = function Attachment(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Attachment' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M22,12 C22,12 19.0000009,15.0000004 13.0000004,21.0000004 C6.99999996,27.0000004 -2.00000007,18.0000004 3.99999994,12.0000004 C9.99999996,6.00000037 9,7.00000011 13,3.00000008 C17,-0.999999955 23,4.99999994 19,9.00000005 C15,13.0000002 12.0000004,16.0000007 9.99999995,18.0000004 C7.99999952,20 5,17 6.99999995,15.0000004 C8.99999991,13.0000007 16,6 16,6' })
      )
    )
  );
};

exports.default = Attachment;