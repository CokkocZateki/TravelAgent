'use strict';

angular.module('myApp.airView', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/flight', {
            templateUrl: 'views/airView/airSearchView.html',
            controller: 'AirViewCtrl'
        }).when('/flight/results', {
            templateUrl: 'views/airView/airSearchView.html',
            controller: 'AirViewCtrl'
        });
    }])

    .controller('AirViewCtrl', [function() {

    }]);