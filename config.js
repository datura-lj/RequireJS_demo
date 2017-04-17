'use strict';
requirejs.config({
    baseUrl: './',
    paths: {
        main: 'main'
    }
});
require(['main',function(mod){
    mod.test2();
    mod.test1();
}]);