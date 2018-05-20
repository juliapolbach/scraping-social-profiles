'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = initApollo;

var _apolloClient = require('apollo-client');

var _apolloLinkHttp = require('apollo-link-http');

var _apolloCacheInmemory = require('apollo-cache-inmemory');

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
    global.fetch = _isomorphicUnfetch2.default;
}

function create(initialState) {
    return new _apolloClient.ApolloClient({
        connectToDevTools: process.browser,
        ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
        link: new _apolloLinkHttp.HttpLink(),
        cache: new _apolloCacheInmemory.InMemoryCache().restore(initialState || {})
    });
}

function initApollo(initialState) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (!process.browser) {
        return create(initialState);
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = create(initialState);
    }

    return apolloClient;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9pbml0QXBvbGxvLmpzIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkh0dHBMaW5rIiwiSW5NZW1vcnlDYWNoZSIsImZldGNoIiwiYXBvbGxvQ2xpZW50IiwicHJvY2VzcyIsImJyb3dzZXIiLCJnbG9iYWwiLCJjcmVhdGUiLCJpbml0aWFsU3RhdGUiLCJjb25uZWN0VG9EZXZUb29scyIsInNzck1vZGUiLCJsaW5rIiwiY2FjaGUiLCJyZXN0b3JlIiwiaW5pdEFwb2xsbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQVE7O0FBQ1IsQUFBUTs7QUFDUixBQUFROztBQUNSLEFBQU87Ozs7OztBQUVQLElBQUksZUFBSixBQUFtQjs7QUFFbkI7QUFDQSxJQUFJLENBQUMsUUFBTCxBQUFhLFNBQVMsQUFDbEI7V0FBQSxBQUFPLEFBQVEsQUFDbEI7OztBQUVELFNBQUEsQUFBUyxPQUFULEFBQWdCLGNBQWMsQUFDMUI7OzJCQUN1QixRQURDLEFBQ08sQUFDM0I7aUJBQVMsQ0FBQyxRQUZVLEFBRUYsU0FBUyxBQUMzQjtjQUhvQixBQUdkLEFBQUksQUFDVjtlQUFPLEFBQUkseUNBQUosQUFBb0IsUUFBUSxnQkFKdkMsQUFBTyxBQUFpQixBQUliLEFBQTRDLEFBRTFEO0FBTjJCLEFBQ3BCLEtBREcsQUFBSTtBQVFmOztBQUFlLFNBQUEsQUFBUyxXQUFULEFBQW9CLGNBQWMsQUFDN0M7QUFDQTtBQUNBO1FBQUksQ0FBQyxRQUFMLEFBQWEsU0FBUyxBQUNsQjtlQUFPLE9BQVAsQUFBTyxBQUFPLEFBQ2pCO0FBRUQ7O0FBQ0E7UUFBSSxDQUFKLEFBQUssY0FBYyxBQUNmO3VCQUFlLE9BQWYsQUFBZSxBQUFPLEFBQ3pCO0FBRUQ7O1dBQUEsQUFBTyxBQUNWIiwiZmlsZSI6ImluaXRBcG9sbG8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p1bGlhcG9sYmFjaC9JZGVhUHJvamVjdHMvanVsaWEtY29kZVRlc3QifQ==