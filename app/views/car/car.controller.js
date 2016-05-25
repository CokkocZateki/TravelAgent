'use strict';

angular.module('myApp.carView', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/car', {
            templateUrl: 'views/car/car.search.view.html',
            controller: 'CarViewCtrl'
        }).when('/car/results', {
            templateUrl: 'views/car/car.search.view.html',
            controller: 'CarViewCtrl'
        });
    }])

    .controller('CarViewCtrl', [function() {

    }]);