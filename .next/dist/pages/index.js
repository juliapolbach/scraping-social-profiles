'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _app = require('../components/app');

var _app2 = _interopRequireDefault(_app);

var _InfluencersList = require('../components/InfluencersList');

var _InfluencersList2 = _interopRequireDefault(_InfluencersList);

var _AddAInfluencerForm = require('../components/AddAInfluencerForm.js');

var _AddAInfluencerForm2 = _interopRequireDefault(_AddAInfluencerForm);

var _withData = require('../lib/withData');

var _withData2 = _interopRequireDefault(_withData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 100vw;\n  height: 100vh;\n  padding: 10px 30px 10px 30px;\n  background-color: ', ';\n  font-family: Raleway, sans-serif;\n  color: ', ';\n  \n'], ['\n  width: 100vw;\n  height: 100vh;\n  padding: 10px 30px 10px 30px;\n  background-color: ', ';\n  font-family: Raleway, sans-serif;\n  color: ', ';\n  \n']);

var StyledGrid = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme.white;
}, function (props) {
    return props.theme.grey;
});

exports.default = (0, _withData2.default)(function () {
    return _react2.default.createElement(_app2.default, null, _react2.default.createElement(StyledGrid, null, _react2.default.createElement(_reactBootstrap.Row, null, _react2.default.createElement(_reactBootstrap.Col, { xs: 12, md: 6 }, _react2.default.createElement(_InfluencersList2.default, null)), _react2.default.createElement(_reactBootstrap.Col, { xs: 12, md: 6 }, _react2.default.createElement(_AddAInfluencerForm2.default, null)))));
});