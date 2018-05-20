"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateInfluencer = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _graphqlTag = require("graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\nmutation ($input:InfluencerInput!) {\n  updateInfluencer (input:$input) {\n    id\n    name\n    lastName\n    instagram {\n      profileUrl\n    }\n    twitter {\n      profileUrl\n    }\n    youtube {\n      profileUrl\n    }\n  }\n}"], ["\nmutation ($input:InfluencerInput!) {\n  updateInfluencer (input:$input) {\n    id\n    name\n    lastName\n    instagram {\n      profileUrl\n    }\n    twitter {\n      profileUrl\n    }\n    youtube {\n      profileUrl\n    }\n  }\n}"]);

var updateInfluencer = exports.updateInfluencer = (0, _graphqlTag2.default)(_templateObject);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXJpZXMvdXBkYXRlSW5mbHVlbmNlclF1ZXJ5LmpzIl0sIm5hbWVzIjpbImdxbCIsInVwZGF0ZUluZmx1ZW5jZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBRUE7Ozs7Ozs7O0FBQU8sSUFBTSw4Q0FBbUIsQUFBbkIsMEJBQU4iLCJmaWxlIjoidXBkYXRlSW5mbHVlbmNlclF1ZXJ5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdWxpYXBvbGJhY2gvSWRlYVByb2plY3RzL2p1bGlhLWNvZGVUZXN0In0=