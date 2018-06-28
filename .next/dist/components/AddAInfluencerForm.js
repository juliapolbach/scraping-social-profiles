'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _createInfluencerQuery = require('../queries/createInfluencerQuery');

var _allInfluencersQuery = require('../queries/allInfluencersQuery');

var _beautifier = require('../styles/beautifier');

var _styledComponents = require('../styles/styledComponents');

var _reactNotifyToast = require('react-notify-toast');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/juliapolbach/IdeaProjects/julia-codeTest/components/AddAInfluencerForm.js';


var AddAInfluencerForm = function (_React$Component) {
    (0, _inherits3.default)(AddAInfluencerForm, _React$Component);

    function AddAInfluencerForm(props, context) {
        (0, _classCallCheck3.default)(this, AddAInfluencerForm);

        var _this = (0, _possibleConstructorReturn3.default)(this, (AddAInfluencerForm.__proto__ || (0, _getPrototypeOf2.default)(AddAInfluencerForm)).call(this, props, context));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.onClick = _this.onClick.bind(_this);
        _this.state = { name: '', lastName: '', instagram: '', twitter: '', youtube: '' };
        return _this;
    }

    (0, _createClass3.default)(AddAInfluencerForm, [{
        key: 'onClick',
        value: function onClick() {
            var _this2 = this;

            if (this.state.name !== '') {
                var myColor = { background: '#8eb7ce', text: "#000000" };
                _reactNotifyToast.notify.show('Scrapping, please wait... 💅', "custom", 5000, myColor);
                this.props.mutate({
                    variables: {
                        input: {
                            name: this.state.name,
                            lastName: this.state.lastName,
                            instagram: { profileUrl: (0, _beautifier.beautifyURL)(this.state.instagram) },
                            twitter: { profileUrl: (0, _beautifier.beautifyURL)(this.state.twitter) },
                            youtube: { profileUrl: (0, _beautifier.beautifyURL)(this.state.youtube) }
                        }
                    },
                    refetchQueries: [{ query: _allInfluencersQuery.allInfluencers }]
                }).then(function () {
                    console.log('hurray!');
                    _this2.setState({ name: '', lastName: '', instagram: '', twitter: '', youtube: '' });
                }).catch(function (error) {
                    _reactNotifyToast.notify.hide();
                    _reactNotifyToast.notify.show('There was an error 😱‍' + error.message, "error");
                });
            } else {
                _reactNotifyToast.notify.show('Please, specify at least an influencer\'s name 🙅‍', "warning");
            }
        }
    }, {
        key: 'handleChange',
        value: function handleChange(value, id) {
            this.setState((0, _defineProperty3.default)({}, id, value));
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_styledComponents.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(_styledComponents.Title, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, '\uD83D\uDE4B Add an Influencer'), _react2.default.createElement(_styledComponents.StyledForm, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_styledComponents.StyledInput, {
                name: 'name',
                type: 'text',
                value: this.state.name,
                placeholder: 'Name*',
                onChange: function onChange(event) {
                    return _this3.handleChange(event.target.value, event.target.name);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }), _react2.default.createElement(_styledComponents.StyledInput, {
                name: 'lastName',
                type: 'text',
                value: this.state.lastName,
                placeholder: 'Last Name',
                onChange: function onChange(event) {
                    return _this3.handleChange(event.target.value, event.target.name);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }), _react2.default.createElement(_styledComponents.StyledInput, {
                name: 'instagram',
                type: 'text',
                value: this.state.instagram,
                placeholder: 'Instagram',
                onChange: function onChange(event) {
                    return _this3.handleChange(event.target.value, event.target.name);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }), _react2.default.createElement(_styledComponents.StyledInput, {
                name: 'twitter',
                type: 'text',
                value: this.state.twitter,
                placeholder: 'Twitter',
                onChange: function onChange(event) {
                    return _this3.handleChange(event.target.value, event.target.name);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }), _react2.default.createElement(_styledComponents.StyledInput, {
                name: 'youtube',
                type: 'text',
                value: this.state.youtube,
                placeholder: 'Youtube',
                onChange: function onChange(event) {
                    return _this3.handleChange(event.target.value, event.target.name);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }), _react2.default.createElement(_styledComponents.StyledButton, { type: 'button', onClick: this.onClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, 'ADD')));
        }
    }]);

    return AddAInfluencerForm;
}(_react2.default.Component);

AddAInfluencerForm.propTypes = {};

var AddAInfluencerFormWrapper = (0, _reactApollo.graphql)(_createInfluencerQuery.createInfluencer)(AddAInfluencerForm);
exports.default = AddAInfluencerFormWrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWRkQUluZmx1ZW5jZXJGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZ3JhcGhxbCIsImNyZWF0ZUluZmx1ZW5jZXIiLCJhbGxJbmZsdWVuY2VycyIsImJlYXV0aWZ5VVJMIiwiU3R5bGVkRm9ybSIsIlN0eWxlZElucHV0IiwiQ29udGFpbmVyIiwiVGl0bGUiLCJTdHlsZWRCdXR0b24iLCJub3RpZnkiLCJBZGRBSW5mbHVlbmNlckZvcm0iLCJwcm9wcyIsImNvbnRleHQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwib25DbGljayIsInN0YXRlIiwibmFtZSIsImxhc3ROYW1lIiwiaW5zdGFncmFtIiwidHdpdHRlciIsInlvdXR1YmUiLCJteUNvbG9yIiwiYmFja2dyb3VuZCIsInRleHQiLCJzaG93IiwibXV0YXRlIiwidmFyaWFibGVzIiwiaW5wdXQiLCJwcm9maWxlVXJsIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJjYXRjaCIsImVycm9yIiwiaGlkZSIsIm1lc3NhZ2UiLCJ2YWx1ZSIsImlkIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIkFkZEFJbmZsdWVuY2VyRm9ybVdyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFROztBQUNSLEFBQVEsQUFBdUI7O0FBQy9CLEFBQVEsQUFBcUI7O0FBQzdCLEFBQVEsQUFBa0I7O0FBQzFCLEFBQVEsQUFBWSxBQUFhLEFBQVcsQUFBTyxBQUFtQjs7QUFDdEUsQUFBUzs7Ozs7OztJQUVILEE7Z0RBQ0Y7O2dDQUFBLEFBQVksT0FBWixBQUFtQixTQUFTOzRDQUFBOztrS0FBQSxBQUNsQixPQURrQixBQUNYLEFBQ2I7O2NBQUEsQUFBSyxlQUFlLE1BQUEsQUFBSyxhQUFMLEFBQWtCLEtBQXRD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SixBQUlnQixBQUNaOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxhQUFhLE1BQUEsQUFBTSxPQUF4QixBQUErQixPQUFPLE1BQUEsQUFBTSxPQUFyRCxBQUFTLEFBQW1EO0FBTDFFOzs4QkFBQTtnQ0FmSixBQWVJLEFBT0E7QUFQQTtBQUNJLGdDQU1KLEFBQUM7c0JBQUQsQUFDUyxBQUNMO3NCQUZKLEFBRVMsQUFDTDt1QkFBTyxLQUFBLEFBQUssTUFIaEIsQUFHc0IsQUFDbEI7NkJBSkosQUFJZ0IsQUFDWjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssYUFBYSxNQUFBLEFBQU0sT0FBeEIsQUFBK0IsT0FBTyxNQUFBLEFBQU0sT0FBckQsQUFBUyxBQUFtRDtBQUwxRTs7OEJBQUE7Z0NBdEJKLEFBc0JJLEFBT0E7QUFQQTtBQUNJLGdDQU1KLEFBQUM7c0JBQUQsQUFDUyxBQUNMO3NCQUZKLEFBRVMsQUFDTDt1QkFBTyxLQUFBLEFBQUssTUFIaEIsQUFHc0IsQUFDbEI7NkJBSkosQUFJZ0IsQUFDWjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssYUFBYSxNQUFBLEFBQU0sT0FBeEIsQUFBK0IsT0FBTyxNQUFBLEFBQU0sT0FBckQsQUFBUyxBQUFtRDtBQUwxRTs7OEJBQUE7Z0NBN0JKLEFBNkJJLEFBT0E7QUFQQTtBQUNJLGdDQU1KLEFBQUMsZ0RBQWEsTUFBZCxBQUFtQixVQUFTLFNBQVMsS0FBckMsQUFBMEM7OEJBQTFDO2dDQUFBO0FBQUE7ZUF2Q1osQUFDSSxBQUVJLEFBb0NJLEFBSWY7Ozs7O0VBckY0QixnQkFBTSxBOztBQXdGdkMsbUJBQUEsQUFBbUIsWUFBbkIsQUFBK0I7O0FBRS9CLElBQU0sNEJBQTRCLEFBQVEsbUVBQTFDLEFBQWtDLEFBQTBCLEFBQzVEO2tCQUFBLEFBQWUiLCJmaWxlIjoiQWRkQUluZmx1ZW5jZXJGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdWxpYXBvbGJhY2gvSWRlYVByb2plY3RzL2p1bGlhLWNvZGVUZXN0In0=