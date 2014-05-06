/*global define */
define(function (require) {
    'use strict';

    var angular = require('angular');

    console.log('load app');

    // 定义应用
    var heroApp = angular.module('heroApp', []);

    // 定义controller
    heroApp.controller('HeroUnitCtrl', ['$scope', function($scope){
        $scope.hero = 'david';
    }]);

    // 手动初始化应用
    /*
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['heroApp']);
    });
    */

});

