"use strict";
var StringUtils;
(function (StringUtils) {
    function add(a, b) {
        commonUtils.log('hello');
        return a + b;
    }
    StringUtils.add = add;
    function subtract(a, b) {
        return a.replace(b, "");
    }
    StringUtils.subtract = subtract;
})(StringUtils || (StringUtils = {}));
