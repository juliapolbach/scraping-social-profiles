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

var _jsxFileName = '/Users/juliapolbach/IdeaProjects/julia-codeTest/pages/index.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 100vw;\n  height: 100vh;\n  padding: 10px 30px 10px 30px;\n  background-color: ', ';\n  font-family: Raleway, sans-serif;\n  color: ', ';\n  \n'], ['\n  width: 100vw;\n  height: 100vh;\n  padding: 10px 30px 10px 30px;\n  background-color: ', ';\n  font-family: Raleway, sans-serif;\n  color: ', ';\n  \n']);

var StyledGrid = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme.white;
}, function (props) {
    return props.theme.grey;
});

exports.default = (0, _withData2.default)(function () {
    return _react2.default.createElement(_app2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, _react2.default.createElement(StyledGrid, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, _react2.default.createElement(_reactBootstrap.Row, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, _react2.default.createElement(_reactBootstrap.Col, { xs: 12, md: 6, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, _react2.default.createElement(_InfluencersList2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    })), _react2.default.createElement(_reactBootstrap.Col, { xs: 12, md: 6, __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, _react2.default.createElement(_AddAInfluencerForm2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    })))));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUm93IiwiQ29sIiwic3R5bGVkIiwiQXBwIiwiSW5mbHVlbmNlcnNMaXN0IiwiQWRkQUluZmx1ZW5jZXJGb3JtIiwid2l0aERhdGEiLCJTdHlsZWRHcmlkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsIndoaXRlIiwiZ3JleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFRLEFBQUs7O0FBQ2IsQUFBTzs7OztBQUVQLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQXFCOzs7O0FBQzVCLEFBQU8sQUFBd0I7Ozs7QUFDL0IsQUFBTyxBQUFjOzs7Ozs7Ozs7O0FBRXJCLElBQU0sd0NBQUEsQUFBb0IscUJBSUosaUJBQUE7V0FBUyxNQUFBLEFBQU0sTUFBZixBQUFxQjtBQUpyQyxDQUFhLEVBTVIsaUJBQUE7V0FBUyxNQUFBLEFBQU0sTUFBZixBQUFxQjtBQU5oQyxBQUFNLEFBVU47OzBDQUF3QixZQUFBOzJCQUNwQixBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNLLGNBQUQ7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLEFBQUMscUNBQUksSUFBTCxBQUFTLElBQUksSUFBYixBQUFpQjtzQkFBakI7d0JBQUEsQUFDSTtBQURKO3VCQUNJLEFBQUM7O3NCQUFEO3dCQUZSLEFBQ0ksQUFDSSxBQUVKO0FBRkk7QUFBQSx5QkFFSixBQUFDLHFDQUFJLElBQUwsQUFBUyxJQUFJLElBQWIsQUFBaUI7c0JBQWpCO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxBQUFDOztzQkFBRDt3QkFSSSxBQUNwQixBQUNJLEFBQ0ksQUFJSSxBQUNJO0FBQUE7QUFBQTtBQVJwQixBQUFlLENBQUEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p1bGlhcG9sYmFjaC9JZGVhUHJvamVjdHMvanVsaWEtY29kZVRlc3QifQ==