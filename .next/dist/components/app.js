'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _styledComponents = require('styled-components');

var _theme = require('../styles/theme');

var _reactNotifyToast = require('react-notify-toast');

var _reactNotifyToast2 = _interopRequireDefault(_reactNotifyToast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var children = _ref.children;
    return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Influencers'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
        integrity: 'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u',
        crossOrigin: 'anonymous' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Raleway', rel: 'stylesheet' })), _react2.default.createElement(_reactNotifyToast2.default, null), _react2.default.createElement(_styledComponents.ThemeProvider, { theme: function theme() {
            return _theme.Theme;
        } }, children));
};