"use strict";
var commonUtils;
(function (commonUtils) {
    function log(message) {
        console.log(message);
    }
    commonUtils.log = log;
})(commonUtils || (commonUtils = {}));
