'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'route-segment',
    'view-segment',
    'myApp.hotelView',
    'myApp.airView',
    'myApp.carView',
    'myApp.version'
]).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/hotel', {
            templateUrl: 'views/hotelView/hotelView.html',
            controller: 'HotelViewCtrl'
        }).when('/flight', {
            templateUrl: 'views/airView/airView.html',
            controller: 'AirViewCtrl'
        }).when('/car', {
            templateUrl: 'views/carView/carView.html',
            controller: 'CarViewCtrl'
        }).otherwise({redirectTo: '/hotel'});
    }])
    .controller('AppController', function ($scope, $location) {
        $scope.isActive = function (route) {
            return route === $location.path();
        }
    });
