"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.beautifyNumber = beautifyNumber;
exports.beautifyURL = beautifyURL;
function beautifyNumber(number) {
    var result = void 0;
    if (number !== "") {
        result = parseFloat(number).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1.').split("").reverse().join("").replace(/(\.)/, ",").split("").reverse().join("");
        return result.substring(0, result.length - 3);
    } else {
        return null;
    }
}

function beautifyURL(url) {
    if (url.substr(url.length - 1) === '/') {
        return url.substring(0, url.length - 1);
    } else {
        return url;
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy9iZWF1dGlmaWVyLmpzIl0sIm5hbWVzIjpbImJlYXV0aWZ5TnVtYmVyIiwibnVtYmVyIiwicmVzdWx0IiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJyZXBsYWNlIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsInN1YnN0cmluZyIsImxlbmd0aCIsImJlYXV0aWZ5VVJMIiwidXJsIiwic3Vic3RyIl0sIm1hcHBpbmdzIjoiOzs7OztRQUFPLEFBQVM7UUFXVCxBQUFTO0FBWFQsd0JBQUEsQUFBd0IsUUFBUSxBQUNuQztRQUFJLGNBQUosQUFDQTtRQUFJLFdBQUosQUFBZSxJQUFJLEFBQ2Y7aUJBQVMsV0FBQSxBQUFXLFFBQVgsQUFBbUIsUUFBbkIsQUFBMkIsR0FBM0IsQUFBOEIsUUFBOUIsQUFBc0MsdUJBQXRDLEFBQTZELE9BQTdELEFBQ0osTUFESSxBQUNFLElBREYsQUFDTSxVQUROLEFBQ2dCLEtBRGhCLEFBQ3FCLElBRHJCLEFBQ3lCLFFBRHpCLEFBQ2lDLFFBRGpDLEFBQ3lDLEtBRHpDLEFBQzhDLE1BRDlDLEFBQ29ELElBRHBELEFBQ3dELFVBRHhELEFBQ2tFLEtBRDNFLEFBQVMsQUFDdUUsQUFDaEY7ZUFBTyxPQUFBLEFBQU8sVUFBUCxBQUFpQixHQUFHLE9BQUEsQUFBTyxTQUFsQyxBQUFPLEFBQW1DLEFBQzdDO0FBSkQsV0FJTyxBQUNIO2VBQUEsQUFBTyxBQUNWO0FBQ0o7QUFFRDs7QUFBTyxxQkFBQSxBQUFxQixLQUFLLEFBQzdCO1FBQUksSUFBQSxBQUFJLE9BQU8sSUFBQSxBQUFJLFNBQWYsQUFBd0IsT0FBNUIsQUFBbUMsS0FBSyxBQUNwQztlQUFPLElBQUEsQUFBSSxVQUFKLEFBQWMsR0FBRyxJQUFBLEFBQUksU0FBNUIsQUFBTyxBQUE4QixBQUN4QztBQUZELFdBRU8sQUFDSDtlQUFBLEFBQU8sQUFDVjtBQUNKIiwiZmlsZSI6ImJlYXV0aWZpZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p1bGlhcG9sYmFjaC9JZGVhUHJvamVjdHMvanVsaWEtY29kZVRlc3QifQ==