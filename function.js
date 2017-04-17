'use strict';
define(function(){
    return {
        rnd:function (m,n) {
            return parseInt(Math.random()*(m-n)+m);
        }
    }
});