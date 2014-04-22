require.config({
    paths: {
        angular: '../bower_components/angular/angular'
        // jquery: '../bower_components/jquery/jquery'
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    }
});

require(['app'], function (app) {
    'use strict';

    console.log('main');

});
