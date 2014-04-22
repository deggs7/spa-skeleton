/*global define */
define(['angular'], function (angular) {
    'use strict';

    console.log('load app');

    angular.module('heroApp', [])
    .controller('HeroUnitCtrl', ['$scope', function($scope){
        $scope.hero = 'david';
    }]);

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['heroApp']);
    });

});

