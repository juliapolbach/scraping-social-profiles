"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInfluencer = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _graphqlTag = require("graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\nmutation ($input:InfluencerInput!) {\n  createInfluencer (input:$input) {\n    id\n    name\n    lastName\n    instagram {\n      profileUrl\n      photoProfile\n      totalPosts\n      followers\n    }\n    twitter {\n      profileUrl\n      photoProfile\n      totalPosts\n      followers\n    }\n    youtube {\n      profileUrl\n      photoProfile\n      totalPosts\n      followers\n    }\n  }\n}"], ["\nmutation ($input:InfluencerInput!) {\n  createInfluencer (input:$input) {\n    id\n    name\n    lastName\n    instagram {\n      profileUrl\n      photoProfile\n      totalPosts\n      followers\n    }\n    twitter {\n      profileUrl\n      photoProfile\n      totalPosts\n      followers\n    }\n    youtube {\n      profileUrl\n      photoProfile\n      totalPosts\n      followers\n    }\n  }\n}"]);

var createInfluencer = exports.createInfluencer = (0, _graphqlTag2.default)(_templateObject);