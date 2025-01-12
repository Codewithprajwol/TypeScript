"use strict";
///<reference path="common.ts"/>
var MathUtils;
(function (MathUtils) {
    function add(a, b) {
        commonUtils.log('hello form MathUtils');
        return a + b;
    }
    MathUtils.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathUtils.subtract = subtract;
})(MathUtils || (MathUtils = {}));
