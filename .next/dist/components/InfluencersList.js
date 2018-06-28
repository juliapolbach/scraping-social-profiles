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

var _jsxFileName = '/Users/juliapolbach/IdeaProjects/julia-codeTest/components/InfluencersList.js';


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
                return _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                    }
                }, 'Loading...');
            } else if (this.props.data.error) {
                return _react2.default.createElement('div', { className: 'col-md-6', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                }, 'Error');
            } else {
                return _react2.default.createElement(_styledComponents.ContainerList, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                }, _react2.default.createElement(_styledComponents.Title, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                }, '\uD83D\uDC68\u200D\uD83D\uDCBB Influencers'), _react2.default.createElement(_styledComponents.ListGroup, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                }, this.props.data.allInfluencers.map(function (influencer, index) {
                    return _react2.default.createElement('li', { key: index, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        }
                    }, _react2.default.createElement(_Influencer2.default, { influencer: influencer, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25
                        }
                    }));
                }).reverse()));
            }
        }
    }]);

    return InfluencersList;
}(_react2.default.Component);

InfluencersList.propTypes = {
    data: _propTypes2.default.object.isRequired
};

var InfluencersListWrapper = (0, _reactApollo.graphql)(_allInfluencersQuery.allInfluencers)(InfluencersList);
exports.default = InfluencersListWrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSW5mbHVlbmNlcnNMaXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiZ3JhcGhxbCIsIkNvbnRhaW5lckxpc3QiLCJMaXN0R3JvdXAiLCJUaXRsZSIsImFsbEluZmx1ZW5jZXJzIiwiSW5mbHVlbmNlciIsIkluZmx1ZW5jZXJzTGlzdCIsInByb3BzIiwiY29udGV4dCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJtYXAiLCJpbmZsdWVuY2VyIiwiaW5kZXgiLCJyZXZlcnNlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIkluZmx1ZW5jZXJzTGlzdFdyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFROztBQUNSLEFBQVEsQUFBZSxBQUFXLEFBQVk7O0FBQzlDLEFBQVEsQUFBcUI7O0FBQzdCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJQUVqQixBOzZDQUNGOzs2QkFBQSxBQUFZLE9BQVosQUFBbUIsU0FBUzs0Q0FBQTs7dUpBQUEsQUFDbEIsT0FEa0IsQUFDWCxBQUNoQjs7Ozs7aUNBRVEsQUFDTDtnQkFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLEtBQWYsQUFBb0IsU0FBUyxBQUN6Qjt1Q0FBTyxjQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsaUJBQUEsRUFBUCxBQUFPLEFBQ1Y7QUFGRCx1QkFFVyxLQUFBLEFBQUssTUFBTCxBQUFXLEtBQWYsQUFBb0IsT0FBTyxBQUM5Qjt1Q0FBTyxjQUFBLFNBQUssV0FBTCxBQUFlO2tDQUFmO29DQUFBO0FBQUE7aUJBQUEsRUFBUCxBQUFPLEFBQ1Y7QUFGTSxhQUFBLE1BRUEsQUFDSDt1Q0FDSSxBQUFDOztrQ0FBRDtvQ0FBQSxBQUNJO0FBREo7QUFBQSxpQkFBQSxrQkFDSSxBQUFDOztrQ0FBRDtvQ0FBQTtBQUFBO0FBQUEsbUJBREosQUFDSSxBQUNBLCtEQUFBLEFBQUM7O2tDQUFEO29DQUFBLEFBQ0s7QUFETDtBQUFBLHdCQUNLLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsZUFBaEIsQUFBK0IsSUFBSSxVQUFBLEFBQUMsWUFBRCxBQUFhLE9BQVUsQUFDdkQ7MkNBQU8sY0FBQSxRQUFJLEtBQUosQUFBUztzQ0FBVDt3Q0FBQSxBQUNIO0FBREc7cUJBQUEsa0JBQ0gsQUFBQyxzQ0FBVyxZQUFaLEFBQXdCO3NDQUF4Qjt3Q0FESixBQUFPLEFBQ0gsQUFFUDtBQUZPOztBQUZQLG1CQUpiLEFBQ0ksQUFFSSxBQUNLLEFBSUUsQUFLbEI7QUFDSjs7Ozs7RUF6QnlCLGdCLEFBQU07O0FBNEJwQyxnQkFBQSxBQUFnQjtVQUNOLG9CQUFBLEFBQVUsT0FEcEIsQUFBNEIsQUFDRDtBQURDLEFBQ3hCOztBQUdKLElBQU0seUJBQXlCLEFBQVEsK0RBQXZDLEFBQStCLEFBQXdCLEFBQ3ZEO2tCQUFBLEFBQWUiLCJmaWxlIjoiSW5mbHVlbmNlcnNMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdWxpYXBvbGJhY2gvSWRlYVByb2plY3RzL2p1bGlhLWNvZGVUZXN0In0=