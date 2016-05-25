'use strict';

angular.module('myApp.airView', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/flight', {
            templateUrl: 'views/air/air.search.view.html',
            controller: 'AirViewCtrl'
        }).when('/flight/results', {
            templateUrl: 'views/air/air.search.view.html',
            controller: 'AirViewCtrl'
        });
    }])

    .controller('AirViewCtrl', [function() {

    }]);