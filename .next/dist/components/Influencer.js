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

            return _react2.default.createElement('div', null, !this.state.isEditing && _react2.default.createElement(_styledComponents.InfluencerBox, null, _react2.default.createElement(_reactBootstrap.Row, null, _react2.default.createElement(_reactBootstrap.Col, { md: 2 }, _react2.default.createElement(_styledComponents.Img, { src: this.getAvatar(this.props.influencer),
                alt: 'Profile photo' })), _react2.default.createElement(_reactBootstrap.Col, { md: 10 }, _react2.default.createElement(_styledComponents.Name, null, this.props.influencer.name, ' ', this.props.influencer.lastName), _react2.default.createElement(_styledComponents.Actions, null, _react2.default.createElement(_styledComponents.Icon, { onClick: this.edit }, 'EDIT'), _react2.default.createElement(_styledComponents.Icon, { className: 'glyphicon glyphicon-remove', 'aria-hidden': 'true',
                onClick: this.remove }, ' ')), this.props.influencer.instagram.profileUrl && _react2.default.createElement(_styledComponents.Field, null, _react2.default.createElement(_reactBootstrap.Row, null, _react2.default.createElement(_reactBootstrap.Col, { md: 2 }, _react2.default.createElement('a', { href: this.props.influencer.instagram ? this.props.influencer.instagram.profileUrl : undefined }, _react2.default.createElement(_styledComponents.StyledLink, null, 'Instagram'))), _react2.default.createElement(_reactBootstrap.Col, { md: 10 }, _react2.default.createElement(_styledComponents.Label, null, 'Followers:'), _react2.default.createElement(_styledComponents.Result, null, (0, _beautifier.beautifyNumber)(this.props.influencer.instagram.followers)), _react2.default.createElement(_styledComponents.Label, null, 'Total Posts:'), _react2.default.createElement(_styledComponents.Result, null, (0, _beautifier.beautifyNumber)(this.props.influencer.instagram.totalPosts))))), this.props.influencer.twitter.profileUrl && _react2.default.createElement(_styledComponents.Field, null, _react2.default.createElement(_reactBootstrap.Row, null, _react2.default.createElement(_reactBootstrap.Col, { md: 2 }, _react2.default.createElement('a', { href: this.props.influencer.twitter ? this.props.influencer.twitter.profileUrl : undefined }, _react2.default.createElement(_styledComponents.StyledLink, null, 'Twitter'))), _react2.default.createElement(_reactBootstrap.Col, { md: 10 }, _react2.default.createElement(_styledComponents.Label, null, 'Followers:'), _react2.default.createElement(_styledComponents.Result, null, (0, _beautifier.beautifyNumber)(this.props.influencer.twitter.followers)), _react2.default.createElement(_styledComponents.Label, null, 'Total Posts:'), _react2.default.createElement(_styledComponents.Result, null, (0, _beautifier.beautifyNumber)(this.props.influencer.twitter.totalPosts))))), this.props.influencer.youtube.profileUrl && _react2.default.createElement(_styledComponents.Field, null, _react2.default.createElement(_reactBootstrap.Row, null, _react2.default.createElement(_reactBootstrap.Col, { md: 2 }, _react2.default.createElement('a', { href: this.props.influencer.youtube ? this.props.influencer.youtube.profileUrl : undefined }, _react2.default.createElement(_styledComponents.StyledLink, null, 'Youtube'))), _react2.default.createElement(_reactBootstrap.Col, { md: 10 }, _react2.default.createElement(_styledComponents.Label, null, 'Followers:'), _react2.default.createElement(_styledComponents.Result, null, (0, _beautifier.beautifyNumber)(this.props.influencer.youtube.followers)))))))), this.state.isEditing && _react2.default.createElement(_styledComponents.EditingInfluencerBox, null, _react2.default.createElement(_reactBootstrap.Row, null, _react2.default.createElement(_reactBootstrap.Col, { md: 2 }, _react2.default.createElement(_styledComponents.Img, { src: this.getAvatar(this.props.influencer),
                alt: 'Profile photo' })), _react2.default.createElement(_reactBootstrap.Col, { md: 10 }, _react2.default.createElement(_styledComponents.Name, null, this.props.influencer.name, ' ', this.props.influencer.lastName), _react2.default.createElement(_styledComponents.Actions, null, _react2.default.createElement(_styledComponents.Icon, { onClick: this.edit }, 'DISCARD')), _react2.default.createElement('form', null, _react2.default.createElement(_styledComponents.StyledInput, {
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
            }), _react2.default.createElement(_styledComponents.StyledEditingButton, { type: 'button',
                onClick: this.onClick }, 'UPDATE'))))));
        }
    }]);

    return Influencer;
}(_react2.default.Component);

var InfluencerWrapper = (0, _reactApollo.compose)((0, _reactApollo.graphql)(_removeInfluencerQuery.removeInfluencer, { name: 'removeInfluencer' }), (0, _reactApollo.graphql)(_updateInfluencerQuery.updateInfluencer, { name: 'updateInfluencer' }))(Influencer);
exports.default = InfluencerWrapper;