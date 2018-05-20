'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = require('react-apollo');

var _styledComponents = require('../styles/styledComponents');

var _allInfluencersQuery = require('../queries/allInfluencersQuery');

var _Influencer = require('./Influencer');

var _Influencer2 = _interopRequireDefault(_Influencer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfluencersList = function (_React$Component) {
    (0, _inherits3.default)(InfluencersList, _React$Component);

    function InfluencersList(props, context) {
        (0, _classCallCheck3.default)(this, InfluencersList);

        return (0, _possibleConstructorReturn3.default)(this, (InfluencersList.__proto__ || (0, _getPrototypeOf2.default)(InfluencersList)).call(this, props, context));
    }

    (0, _createClass3.default)(InfluencersList, [{
        key: 'render',
        value: function render() {
            if (this.props.data.loading) {
                return _react2.default.createElement('div', null, 'Loading...');
            } else if (this.props.data.error) {
                return _react2.default.createElement('div', { className: 'col-md-6' }, 'Error');
            } else {
                return _react2.default.createElement(_styledComponents.ContainerList, null, _react2.default.createElement(_styledComponents.Title, null, '\uD83D\uDC68\u200D\uD83D\uDCBB Influencers'), _react2.default.createElement(_styledComponents.ListGroup, null, this.props.data.allInfluencers.map(function (influencer, index) {
                    return _react2.default.createElement('li', { key: index }, _react2.default.createElement(_Influencer2.default, { influencer: influencer }));
                }).reverse()));
            }
        }
    }]);

    return InfluencersList;
}(_react2.default.Component);

var InfluencersListWrapper = (0, _reactApollo.graphql)(_allInfluencersQuery.allInfluencers)(InfluencersList);
exports.default = InfluencersListWrapper;