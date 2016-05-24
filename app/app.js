'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'myApp.hotelView',
    'myApp.airView',
    'myApp.carView',
    'myApp.version'
]).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/hotel', {
            templateUrl: 'views/hotelView/hotelSearchView.html',
            controller: 'HotelViewCtrl'
        }).when('/flight', {
            templateUrl: 'views/airView/airSearchView.html',
            controller: 'AirViewCtrl'
        }).when('/car', {
            templateUrl: 'views/carView/carSearchView.html',
            controller: 'CarViewCtrl'
        }).otherwise({redirectTo: '/hotel'});
    }])
    .controller('AppController', function ($scope, $location) {
        $scope.isActive = function (route) {
            return route === $location.path();
        }
    });
