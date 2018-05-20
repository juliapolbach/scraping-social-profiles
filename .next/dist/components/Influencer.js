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

var _reactBootstrap = require('react-bootstrap');

var _beautifier = require('../styles/beautifier');

var _removeInfluencerQuery = require('../queries/removeInfluencerQuery');

var _allInfluencersQuery = require('../queries/allInfluencersQuery');

var _updateInfluencerQuery = require('../queries/updateInfluencerQuery');

var _reactNotifyToast = require('react-notify-toast');

var _styledComponents = require('../styles/styledComponents');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/juliapolbach/IdeaProjects/julia-codeTest/components/Influencer.js';


var Influencer = function (_React$Component) {
    (0, _inherits3.default)(Influencer, _React$Component);

    function Influencer(props, context) {
        (0, _classCallCheck3.default)(this, Influencer);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Influencer.__proto__ || (0, _getPrototypeOf2.default)(Influencer)).call(this, props, context));

        _this.state = {
            isEditing: false,
            instagram: _this.props.influencer.instagram.profileUrl,
            twitter: _this.props.influencer.twitter.profileUrl,
            youtube: _this.props.influencer.youtube.profileUrl
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.remove = _this.remove.bind(_this);
        _this.edit = _this.edit.bind(_this);
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Influencer, [{
        key: 'onClick',
        value: function onClick() {
            var _this2 = this;

            var myColor = { background: '#8eb7ce', text: "#000000" };
            _reactNotifyToast.notify.show('Updating, please wait... 💅', "custom", 5000, myColor);
            this.props.updateInfluencer({
                variables: {
                    input: {
                        id: this.props.influencer.id,
                        name: this.props.influencer.name,
                        lastName: this.props.influencer.lastName,
                        instagram: { profileUrl: (0, _beautifier.beautifyURL)(this.state.instagram) },
                        twitter: { profileUrl: (0, _beautifier.beautifyURL)(this.state.twitter) },
                        youtube: { profileUrl: (0, _beautifier.beautifyURL)(this.state.youtube) }
                    }
                },
                refetchQueries: [{ query: _allInfluencersQuery.allInfluencers }]
            }).then(function () {
                _this2.setState({ isEditing: !_this2.state.isEditing });
                console.log('hurray!');
            }).catch(function (error) {
                console.log('error :(', error);
            });
        }
    }, {
        key: 'remove',
        value: function remove() {
            this.props.removeInfluencer({
                variables: { id: this.props.influencer.id },
                refetchQueries: [{ query: _allInfluencersQuery.allInfluencers }]
            }).then(function () {
                console.log('removed!');
            }).catch(function (error) {
                console.log('error :(', error);
            });
        }
    }, {
        key: 'edit',
        value: function edit() {
            this.setState({ isEditing: !this.state.isEditing });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(value, id) {
            this.setState((0, _defineProperty3.default)({}, id, value));
            event.preventDefault();
        }
    }, {
        key: 'getAvatar',
        value: function getAvatar(influencer) {
            if (influencer.instagram.photoProfile) {
                return influencer.instagram.photoProfile;
            } else if (influencer.twitter.photoProfile) {
                return influencer.twitter.photoProfile;
            } else if (influencer.youtube.photoProfile) {
                return influencer.youtube.photoProfile;
            } else {
                return 'https://pbs.twimg.com/profile_images/882655374075154432/-v9Niv2h_400x400.jpg';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, !this.state.isEditing && _react2.default.createElement(_styledComponents.InfluencerBox, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, _react2.default.createElement(_reactBootstrap.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, _react2.default.createElement(_reactBootstrap.Col, { md: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, _react2.default.createElement(_styledComponents.Img, { src: this.getAvatar(this.props.influencer),
                alt: 'Profile photo', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            })), _react2.default.createElement(_reactBootstrap.Col, { md: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            }, _react2.default.createElement(_styledComponents.Name, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            }, this.props.influencer.name, ' ', this.props.influencer.lastName), _react2.default.createElement(_styledComponents.Actions, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, _react2.default.createElement(_styledComponents.Icon, { onClick: this.edit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, 'EDIT'), _react2.default.createElement(_styledComponents.Icon, { className: 'glyphicon glyphicon-remove', 'aria-hidden': 'true',
                onClick: this.remove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, ' ')), this.props.influencer.instagram.profileUrl && _react2.default.createElement(_styledComponents.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, _react2.default.createElement(_reactBootstrap.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }, _react2.default.createElement(_reactBootstrap.Col, { md: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, _react2.default.createElement('a', { href: this.props.influencer.instagram ? this.props.influencer.instagram.profileUrl : undefined, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, _react2.default.createElement(_styledComponents.StyledLink, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, 'Instagram'))), _react2.default.createElement(_reactBootstrap.Col, { md: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }, _react2.default.createElement(_styledComponents.Label, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }, 'Followers:'), _react2.default.createElement(_styledComponents.Result, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }, (0, _beautifier.beautifyNumber)(this.props.influencer.instagram.followers)), _react2.default.createElement(_styledComponents.Label, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, 'Total Posts:'), _react2.default.createElement(_styledComponents.Result, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }, (0, _beautifier.beautifyNumber)(this.props.influencer.instagram.totalPosts))))), this.props.influencer.twitter.profileUrl && _react2.default.createElement(_styledComponents.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, _react2.default.createElement(_reactBootstrap.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }, _react2.default.createElement(_reactBootstrap.Col, { md: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            }, _react2.default.createElement('a', { href: this.props.influencer.twitter ? this.props.influencer.twitter.profileUrl : undefined, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            }, _react2.default.createElement(_styledComponents.StyledLink, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            }, 'Twitter'))), _react2.default.createElement(_reactBootstrap.Col, { md: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                }
            }, _react2.default.createElement(_styledComponents.Label, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            }, 'Followers:'), _react2.default.createElement(_styledComponents.Result, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            }, (0, _beautifier.beautifyNumber)(this.props.influencer.twitter.followers)), _react2.default.createElement(_styledComponents.Label, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            }, 'Total Posts:'), _react2.default.createElement(_styledComponents.Result, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            }, (0, _beautifier.beautifyNumber)(this.props.influencer.twitter.totalPosts))))), this.props.influencer.youtube.profileUrl && _react2.default.createElement(_styledComponents.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            }, _react2.default.createElement(_reactBootstrap.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                }
            }, _react2.default.createElement(_reactBootstrap.Col, { md: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 142
                }
            }, _react2.default.createElement('a', { href: this.props.influencer.youtube ? this.props.influencer.youtube.profileUrl : undefined, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 143
                }
            }, _react2.default.createElement(_styledComponents.StyledLink, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 143
                }
            }, 'Youtube'))), _react2.default.createElement(_reactBootstrap.Col, { md: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                }
            }, _react2.default.createElement(_styledComponents.Label, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                }
            }, 'Followers:'), _react2.default.createElement(_styledComponents.Result, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                }
            }, (0, _beautifier.beautifyNumber)(this.props.influencer.youtube.followers)))))))), this.state.isEditing && _react2.default.createElement(_styledComponents.EditingInfluencerBox, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                }
            }, _react2.default.createElement(_reactBootstrap.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 158
                }
            }, _react2.default.createElement(_reactBootstrap.Col, { md: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 159
                }
            }, _react2.default.createElement(_styledComponents.Img, { src: this.getAvatar(this.props.influencer),
                alt: 'Profile photo', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                }
            })), _react2.default.createElement(_reactBootstrap.Col, { md: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                }
            }, _react2.default.createElement(_styledComponents.Name, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                }
            }, this.props.influencer.name, ' ', this.props.influencer.lastName), _react2.default.createElement(_styledComponents.Actions, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 165
                }
            }, _react2.default.createElement(_styledComponents.Icon, { onClick: this.edit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                }
            }, 'DISCARD')), _react2.default.createElement('form', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 168
                }
            }, _react2.default.createElement(_styledComponents.StyledInput, {
                name: 'instagram',
                type: 'text',
                value: this.state.instagram,
                placeholder: 'Instagram',
                onChange: function onChange(event) {
                    return _this3.handleChange(event.target.value, event.target.name);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
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
                    lineNumber: 176
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
                    lineNumber: 183
                }
            }), _react2.default.createElement(_styledComponents.StyledEditingButton, { type: 'button',
                onClick: this.onClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 190
                }
            }, 'UPDATE'))))));
        }
    }]);

    return Influencer;
}(_react2.default.Component);

Influencer.propTypes = {};

var InfluencerWrapper = (0, _reactApollo.compose)((0, _reactApollo.graphql)(_removeInfluencerQuery.removeInfluencer, { name: 'removeInfluencer' }), (0, _reactApollo.graphql)(_updateInfluencerQuery.updateInfluencer, { name: 'updateInfluencer' }))(Influencer);
exports.default = InfluencerWrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSW5mbHVlbmNlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImdyYXBocWwiLCJjb21wb3NlIiwiUm93IiwiQ29sIiwiYmVhdXRpZnlOdW1iZXIiLCJiZWF1dGlmeVVSTCIsInJlbW92ZUluZmx1ZW5jZXIiLCJhbGxJbmZsdWVuY2VycyIsInVwZGF0ZUluZmx1ZW5jZXIiLCJub3RpZnkiLCJJbmZsdWVuY2VyQm94IiwiRWRpdGluZ0luZmx1ZW5jZXJCb3giLCJOYW1lIiwiSW1nIiwiQWN0aW9ucyIsIkxhYmVsIiwiRmllbGQiLCJSZXN1bHQiLCJTdHlsZWRMaW5rIiwiSWNvbiIsIlN0eWxlZEVkaXRpbmdCdXR0b24iLCJTdHlsZWRJbnB1dCIsIkluZmx1ZW5jZXIiLCJwcm9wcyIsImNvbnRleHQiLCJzdGF0ZSIsImlzRWRpdGluZyIsImluc3RhZ3JhbSIsImluZmx1ZW5jZXIiLCJwcm9maWxlVXJsIiwidHdpdHRlciIsInlvdXR1YmUiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwicmVtb3ZlIiwiZWRpdCIsIm9uQ2xpY2siLCJteUNvbG9yIiwiYmFja2dyb3VuZCIsInRleHQiLCJzaG93IiwidmFyaWFibGVzIiwiaW5wdXQiLCJpZCIsIm5hbWUiLCJsYXN0TmFtZSIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJ0aGVuIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsInZhbHVlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBob3RvUHJvZmlsZSIsImdldEF2YXRhciIsInVuZGVmaW5lZCIsImZvbGxvd2VycyIsInRvdGFsUG9zdHMiLCJ0YXJnZXQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJJbmZsdWVuY2VyV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVEsQUFBUzs7QUFDakIsQUFBUSxBQUFLOztBQUNiLEFBQVEs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MkJBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx3Q0FBSyxTQUFTLEtBQWYsQUFBb0I7OEJBQXBCO2dDQUFBO0FBQUE7ZUFIUixBQUVJLEFBQ0ksQUFFSiw2QkFBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDO3NCQUFELEFBQ1MsQUFDTDtzQkFGSixBQUVTLEFBQ0w7dUJBQU8sS0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ2xCOzZCQUpKLEFBSWdCLEFBQ1o7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLGFBQWEsTUFBQSxBQUFNLE9BQXhCLEFBQStCLE9BQU8sTUFBQSxBQUFNLE9BQXJELEFBQVMsQUFBbUQ7QUFMMUU7OzhCQUFBO2dDQURKLEFBQ0ksQUFPQTtBQVBBO0FBQ0ksZ0NBTUosQUFBQztzQkFBRCxBQUNTLEFBQ0w7c0JBRkosQUFFUyxBQUNMO3VCQUFPLEtBQUEsQUFBSyxNQUhoQixBQUdzQixBQUNsQjs2QkFKSixBQUlnQixBQUNaOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxhQUFhLE1BQUEsQUFBTSxPQUF4QixBQUErQixPQUFPLE1BQUEsQUFBTSxPQUFyRCxBQUFTLEFBQW1EO0FBTDFFOzs4QkFBQTtnQ0FSSixBQVFJLEFBT0E7QUFQQTtBQUNJLGdDQU1KLEFBQUM7c0JBQUQsQUFDUyxBQUNMO3NCQUZKLEFBRVMsQUFDTDt1QkFBTyxLQUFBLEFBQUssTUFIaEIsQUFHc0IsQUFDbEI7NkJBSkosQUFJZ0IsQUFDWjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssYUFBYSxNQUFBLEFBQU0sT0FBeEIsQUFBK0IsT0FBTyxNQUFBLEFBQU0sT0FBckQsQUFBUyxBQUFtRDtBQUwxRTs7OEJBQUE7Z0NBZkosQUFlSSxBQU9BO0FBUEE7QUFDSSxnQ0FNSixBQUFDLHVEQUFvQixNQUFyQixBQUEwQixBQUNMO3lCQUFTLEtBRDlCLEFBQ21DOzhCQURuQztnQ0FBQTtBQUFBO2VBM0Y1QixBQUNJLEFBeURRLEFBQ0ksQUFLSSxBQUtJLEFBc0JJLEFBUy9COzs7OztFQTlLb0IsZ0JBQU0sQTs7QUFpTC9CLFdBQUEsQUFBVyxZQUFYLEFBQXVCOztBQUV2QixJQUFNLG9CQUFvQiwwQkFBUSxBQUFRLG1FQUFrQixFQUFDLE1BQW5DLEFBQVEsQUFBMEIsQUFBTyx1QkFBc0IsQUFBUSxtRUFBa0IsRUFBQyxNQUExRixBQUErRCxBQUEwQixBQUFPLHVCQUExSCxBQUEwQixBQUFzSCxBQUNoSjtrQkFBQSxBQUFlIiwiZmlsZSI6IkluZmx1ZW5jZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p1bGlhcG9sYmFjaC9JZGVhUHJvamVjdHMvanVsaWEtY29kZVRlc3QifQ==