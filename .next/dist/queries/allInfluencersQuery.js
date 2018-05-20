"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allInfluencers = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _graphqlTag = require("graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\nquery allInfluencers {\n  allInfluencers {\n    id\n    name\n    lastName\n    instagram {\n      profileUrl\n      photoProfile\n      followers\n      totalPosts\n    }\n    twitter {\n       profileUrl\n      photoProfile\n      followers\n      totalPosts\n    }\n    youtube {\n       profileUrl\n      photoProfile\n      followers\n      totalPosts\n    }\n  }\n}"], ["\nquery allInfluencers {\n  allInfluencers {\n    id\n    name\n    lastName\n    instagram {\n      profileUrl\n      photoProfile\n      followers\n      totalPosts\n    }\n    twitter {\n       profileUrl\n      photoProfile\n      followers\n      totalPosts\n    }\n    youtube {\n       profileUrl\n      photoProfile\n      followers\n      totalPosts\n    }\n  }\n}"]);

var allInfluencers = exports.allInfluencers = (0, _graphqlTag2.default)(_templateObject);