require.config({
    paths: {
        angular: '../bower_components/angular/angular',
        angular_route: '../bower_components/angular-route/angular-route',
        semantic: '../bower_components/semantic-ui/build/packaged/javascript/semantic',
        jquery: '../bower_components/jquery/jquery'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        angular_route: {
            deps: ['angular'],
            exports: 'angular_route'
        },
        semantic : {
            deps: ['jquery'],
            exports: 'semantic'
        }
    }
});


require(['app'], function (app) {
    'use strict';

    console.log('main');
    app.init();

});
