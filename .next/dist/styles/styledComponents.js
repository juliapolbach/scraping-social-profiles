'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListGroup = exports.Title = exports.ContainerList = exports.Container = exports.StyledEditingForm = exports.StyledForm = exports.StyledEditingButton = exports.StyledButton = exports.StyledEditingInput = exports.StyledInput = exports.Icon = exports.Actions = exports.StyledLink = exports.Result = exports.Label = exports.Field = exports.Img = exports.EditingName = exports.Name = exports.EditingInfluencerBox = exports.InfluencerBox = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 90%;\n  margin: 10px 1px 1px 10px;\n  padding: 10px 1px 10px 10px;\n  background-color: ', ';\n  border: 1px solid ', ';\n  border-radius: 4px;\n'], ['\n  width: 90%;\n  margin: 10px 1px 1px 10px;\n  padding: 10px 1px 10px 10px;\n  background-color: ', ';\n  border: 1px solid ', ';\n  border-radius: 4px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  float: left;\n  font-weight: 700;\n'], ['\n  color: ', ';\n  float: left;\n  font-weight: 700;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  float: left;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  margin: 10px;\n\n'], ['\n  float: left;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  margin: 10px;\n\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    clear:both;\n'], ['\n    clear:both;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    display: inline-block;\n    padding: 1px 0 0 10px;\n    font-weight: 900;\n    color: ', ';\n'], ['\n    display: inline-block;\n    padding: 1px 0 0 10px;\n    font-weight: 900;\n    color: ', ';\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n    display: inline-block;\n    padding: 1px 10px 0 10px;\n    font-weight: 900;\n    color: ', ';\n'], ['\n    display: inline-block;\n    padding: 1px 10px 0 10px;\n    font-weight: 900;\n    color: ', ';\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  background: transparent;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 1rem;\n  font-weight: 700;\n  color: ', ';\n  border: 1px solid ', ';\n  border-radius: 30px;\n  padding: 2px 10px 2px 10px;\n  margin: 2px 0 2px 0;\n  &:hover {\n  background-color: ', ';\n  color: ', ';\n  }\n  &:focus{\n    outline: none;\n }'], ['\n  background: transparent;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 1rem;\n  font-weight: 700;\n  color: ', ';\n  border: 1px solid ', ';\n  border-radius: 30px;\n  padding: 2px 10px 2px 10px;\n  margin: 2px 0 2px 0;\n  &:hover {\n  background-color: ', ';\n  color: ', ';\n  }\n  &:focus{\n    outline: none;\n }']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  float: right;\n  padding: 0 10px 0px 10px;\n'], ['\n  float: right;\n  padding: 0 10px 0px 10px;\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n  background: transparent;\n  border: 0;  \n  color: ', ';\n  padding: 10px;\n  &:focus{\n  outline: none;\n}\n'], ['\n  background: transparent;\n  border: 0;  \n  color: ', ';\n  padding: 10px;\n  &:focus{\n  outline: none;\n}\n']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n  width: 400px;\n  background-color: ', ';\n  border: 1px solid ', ';\n  margin: 10px 50px 0 0;\n  padding: 10px 10px 10px 10px;\n  border-radius: 4px;\n  height: 30px;\n'], ['\n  width: 400px;\n  background-color: ', ';\n  border: 1px solid ', ';\n  margin: 10px 50px 0 0;\n  padding: 10px 10px 10px 10px;\n  border-radius: 4px;\n  height: 30px;\n']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n  width: 400px;\n  background-color: ', ';\n  border: 1px solid ', ';\n  padding: 10px 10px 10px 10px;\n  border-radius: 4px;\n  height: 30px;\n'], ['\n  width: 400px;\n  background-color: ', ';\n  border: 1px solid ', ';\n  padding: 10px 10px 10px 10px;\n  border-radius: 4px;\n  height: 30px;\n']),
    _templateObject12 = (0, _taggedTemplateLiteral3.default)(['\n  width: 400px;\n  font-size: 1.5rem;\n  text-transform: uppercase;\n  border: 1px solid ', ';\n  background-color: ', ';\n  border-radius: 30px;\n  margin-top: 30px;\n  padding: 5px 30px 5px 30px;\n  display: block;\n  color: ', ';\n  &:hover {\n  background-color: ', ';\n  color: ', ';\n  }\n'], ['\n  width: 400px;\n  font-size: 1.5rem;\n  text-transform: uppercase;\n  border: 1px solid ', ';\n  background-color: ', ';\n  border-radius: 30px;\n  margin-top: 30px;\n  padding: 5px 30px 5px 30px;\n  display: block;\n  color: ', ';\n  &:hover {\n  background-color: ', ';\n  color: ', ';\n  }\n']),
    _templateObject13 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100px;\n  font-size: 1rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  border: 1px solid ', ';\n  background-color: ', ';\n  border-radius: 30px;\n  margin-top: 10px;\n  padding: 5px 30px 5px 30px;\n  display: block;\n  color: ', ';\n  &:hover {\n  border: 1px solid ', ';\n  background-color: ', ';\n  color: ', ';\n  }\n'], ['\n  width: 100px;\n  font-size: 1rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  border: 1px solid ', ';\n  background-color: ', ';\n  border-radius: 30px;\n  margin-top: 10px;\n  padding: 5px 30px 5px 30px;\n  display: block;\n  color: ', ';\n  &:hover {\n  border: 1px solid ', ';\n  background-color: ', ';\n  color: ', ';\n  }\n']),
    _templateObject14 = (0, _taggedTemplateLiteral3.default)(['\n   width: 60%;\n   margin: 50px auto;\n   padding: 10px 10px 10px 10px;\n'], ['\n   width: 60%;\n   margin: 50px auto;\n   padding: 10px 10px 10px 10px;\n']),
    _templateObject15 = (0, _taggedTemplateLiteral3.default)(['\n   width: 60%;\n   margin: 0 auto;\n'], ['\n   width: 60%;\n   margin: 0 auto;\n']),
    _templateObject16 = (0, _taggedTemplateLiteral3.default)(['\n    width: auto;\n    height: auto;\n    margin: 0 auto;\n    padding: 10px;\n    position: relative;\n'], ['\n    width: auto;\n    height: auto;\n    margin: 0 auto;\n    padding: 10px;\n    position: relative;\n']),
    _templateObject17 = (0, _taggedTemplateLiteral3.default)(['\n   height: 100%;\n   width: 100%;\n   overflow: hidden;\n'], ['\n   height: 100%;\n   width: 100%;\n   overflow: hidden;\n']),
    _templateObject18 = (0, _taggedTemplateLiteral3.default)(['\n  margin: 50px 0 30px 50px;\n  color: ', ';\n  font-weight: 700;\n'], ['\n  margin: 50px 0 30px 50px;\n  color: ', ';\n  font-weight: 700;\n']),
    _templateObject19 = (0, _taggedTemplateLiteral3.default)(['\n  list-style-type: none;\n  height: 75vh;\n  overflow-y:scroll;\n  margin: 0 auto;\n  padding-top: 40px;\n  border-right: 1px dashed ', ';\n'], ['\n  list-style-type: none;\n  height: 75vh;\n  overflow-y:scroll;\n  margin: 0 auto;\n  padding-top: 40px;\n  border-right: 1px dashed ', ';\n']);

var InfluencerBox = exports.InfluencerBox = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.green;
});

var EditingInfluencerBox = exports.EditingInfluencerBox = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.paleGreen;
}, function (props) {
  return props.theme.green;
});

var Name = exports.Name = _styledComponents2.default.h4(_templateObject2, function (props) {
  return props.theme.green;
});

var EditingName = exports.EditingName = _styledComponents2.default.h4(_templateObject2, function (props) {
  return props.theme.white;
});

var Img = exports.Img = _styledComponents2.default.img(_templateObject3);
var Field = exports.Field = _styledComponents2.default.div(_templateObject4);

var Label = exports.Label = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.theme.green;
});

var Result = exports.Result = _styledComponents2.default.div(_templateObject6, function (props) {
  return props.theme.grey;
});

var StyledLink = exports.StyledLink = _styledComponents2.default.button(_templateObject7, function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.paleGreen;
}, function (props) {
  return props.theme.white;
});

var Actions = exports.Actions = _styledComponents2.default.div(_templateObject8);

var Icon = exports.Icon = _styledComponents2.default.button(_templateObject9, function (props) {
  return props.theme.green;
});

var StyledInput = exports.StyledInput = _styledComponents2.default.input(_templateObject10, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.green;
});

var StyledEditingInput = exports.StyledEditingInput = _styledComponents2.default.input(_templateObject11, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.green;
});

var StyledButton = exports.StyledButton = _styledComponents2.default.button(_templateObject12, function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.paleGreen;
}, function (props) {
  return props.theme.white;
});

var StyledEditingButton = exports.StyledEditingButton = _styledComponents2.default.button(_templateObject13, function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.paleGreen;
}, function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.paleGreen;
}, function (props) {
  return props.theme.white;
});

var StyledForm = exports.StyledForm = _styledComponents2.default.form(_templateObject14);

var StyledEditingForm = exports.StyledEditingForm = _styledComponents2.default.form(_templateObject15);

var Container = exports.Container = _styledComponents2.default.div(_templateObject16);

var ContainerList = exports.ContainerList = _styledComponents2.default.div(_templateObject17);

var Title = exports.Title = _styledComponents2.default.h3(_templateObject18, function (props) {
  return props.theme.green;
});

var ListGroup = exports.ListGroup = _styledComponents2.default.ul(_templateObject19, function (props) {
  return props.theme.green;
});