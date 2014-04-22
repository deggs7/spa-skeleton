require.config({
    paths: {
        angular: '../bower_components/angular/angular',
        semantic: '../bower_components/semantic-ui/build/packaged/javascript/semantic',
        jquery: '../bower_components/jquery/jquery'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        semantic : {
            deps: ['jquery'],
            exports: 'semantic'
        }
    }
});

require(['app', 'semantic'], function (app) {
    'use strict';

    console.log('main');

});
