'use strict';

angular.module('myApp.carView', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/car', {
            templateUrl: 'views/carView/carSearchView.html',
            controller: 'CarViewCtrl'
        }).when('/car/results', {
            templateUrl: 'views/carView/carSearchView.html',
            controller: 'CarViewCtrl'
        });
    }])

    .controller('CarViewCtrl', [function() {

    }]);