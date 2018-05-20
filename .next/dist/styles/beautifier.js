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