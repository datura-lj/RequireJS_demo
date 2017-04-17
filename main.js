'use strict';
define(function(require){
    var fns = require('function');
    var str = require('str');
    return {
        test1:alert(str),
        test2:console.log(fns.rnd(1,100))
    };
});