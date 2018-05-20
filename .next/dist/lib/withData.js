'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = require('react-apollo');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _initApollo = require('./initApollo');

var _initApollo2 = _interopRequireDefault(_initApollo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
    return Component.displayName || Component.name || 'Unknown';
}

exports.default = function (ComposedComponent) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        (0, _inherits3.default)(WithData, _React$Component);

        (0, _createClass3.default)(WithData, null, [{
            key: 'getInitialProps',
            value: function () {
                var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
                    var serverState, composedInitialProps, apollo;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    // Initial serverState with apollo (empty)
                                    serverState = {
                                        apollo: {
                                            data: {}
                                        }
                                    };

                                    // Evaluate the composed component's getInitialProps()

                                    composedInitialProps = {};

                                    if (!ComposedComponent.getInitialProps) {
                                        _context.next = 6;
                                        break;
                                    }

                                    _context.next = 5;
                                    return ComposedComponent.getInitialProps(ctx);

                                case 5:
                                    composedInitialProps = _context.sent;

                                case 6:
                                    if (process.browser) {
                                        _context.next = 17;
                                        break;
                                    }

                                    apollo = (0, _initApollo2.default)();
                                    _context.prev = 8;
                                    _context.next = 11;
                                    return (0, _reactApollo.getDataFromTree)(_react2.default.createElement(_reactApollo.ApolloProvider, { client: apollo }, _react2.default.createElement(ComposedComponent, composedInitialProps)), {
                                        router: {
                                            asPath: ctx.asPath,
                                            pathname: ctx.pathname,
                                            query: ctx.query
                                        }
                                    });

                                case 11:
                                    _context.next = 15;
                                    break;

                                case 13:
                                    _context.prev = 13;
                                    _context.t0 = _context['catch'](8);

                                case 15:
                                    // getDataFromTree does not call componentWillUnmount
                                    // head side effect therefore need to be cleared manually
                                    _head2.default.rewind();

                                    // Extract query data from the Apollo store
                                    serverState = {
                                        apollo: {
                                            data: apollo.cache.extract()
                                        }
                                    };

                                case 17:
                                    return _context.abrupt('return', (0, _extends3.default)({
                                        serverState: serverState
                                    }, composedInitialProps));

                                case 18:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[8, 13]]);
                }));

                function getInitialProps(_x) {
                    return _ref.apply(this, arguments);
                }

                return getInitialProps;
            }()
        }]);

        function WithData(props) {
            (0, _classCallCheck3.default)(this, WithData);

            var _this = (0, _possibleConstructorReturn3.default)(this, (WithData.__proto__ || (0, _getPrototypeOf2.default)(WithData)).call(this, props));

            _this.apollo = (0, _initApollo2.default)(_this.props.serverState.apollo.data);
            return _this;
        }

        (0, _createClass3.default)(WithData, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(_reactApollo.ApolloProvider, { client: this.apollo }, _react2.default.createElement(ComposedComponent, this.props));
            }
        }]);

        return WithData;
    }(_react2.default.Component), _class.displayName = 'WithData(' + getComponentDisplayName(ComposedComponent) + ')', _temp;
};