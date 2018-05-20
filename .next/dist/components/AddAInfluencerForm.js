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

            return _react2.default.createElement(_styledComponents.Container, null, _react2.default.createElement(_styledComponents.Title, null, '\uD83D\uDE4B Add an Influencer'), _react2.default.createElement(_styledComponents.StyledForm, null, _react2.default.createElement(_styledComponents.StyledInput, {
                name: 'name',
                type: 'text',
                value: this.state.name,
                placeholder: 'Name*',
                onChange: function onChange(event) {
                    return _this3.handleChange(event.target.value, event.target.name);
                }
            }), _react2.default.createElement(_styledComponents.StyledInput, {
                name: 'lastName',
                type: 'text',
                value: this.state.lastName,
                placeholder: 'Last Name',
                onChange: function onChange(event) {
                    return _this3.handleChange(event.target.value, event.target.name);
                }
            }), _react2.default.createElement(_styledComponents.StyledInput, {
                name: 'instagram',
                type: 'text',
                value: this.state.instagram,
                placeholder: 'Instagram',
                onChange: function onChange(event) {
                    return _this3.handleChange(event.target.value, event.target.name);
                }
            }), _react2.default.createElement(_styledComponents.StyledInput, {
                name: 'twitter',
                type: 'text',
                value: this.state.twitter,
                placeholder: 'Twitter',
                onChange: function onChange(event) {
                    return _this3.handleChange(event.target.value, event.target.name);
                }
            }), _react2.default.createElement(_styledComponents.StyledInput, {
                name: 'youtube',
                type: 'text',
                value: this.state.youtube,
                placeholder: 'Youtube',
                onChange: function onChange(event) {
                    return _this3.handleChange(event.target.value, event.target.name);
                }
            }), _react2.default.createElement(_styledComponents.StyledButton, { type: 'button', onClick: this.onClick }, 'ADD')));
        }
    }]);

    return AddAInfluencerForm;
}(_react2.default.Component);

var AddAInfluencerFormWrapper = (0, _reactApollo.graphql)(_createInfluencerQuery.createInfluencer)(AddAInfluencerForm);
exports.default = AddAInfluencerFormWrapper;