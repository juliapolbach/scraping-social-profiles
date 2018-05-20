"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeInfluencer = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _graphqlTag = require("graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\nmutation ($id:ID!) {\n removeInfluencer (id:$id) {\n    id\n    name\n    lastName\n    instagram {\n      profileUrl\n    }\n    twitter {\n      profileUrl\n    }\n    youtube {\n      profileUrl\n    }\n  }\n}"], ["\nmutation ($id:ID!) {\n removeInfluencer (id:$id) {\n    id\n    name\n    lastName\n    instagram {\n      profileUrl\n    }\n    twitter {\n      profileUrl\n    }\n    youtube {\n      profileUrl\n    }\n  }\n}"]);

var removeInfluencer = exports.removeInfluencer = (0, _graphqlTag2.default)(_templateObject);