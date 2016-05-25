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
            templateUrl: 'views/hotel/hotel.search.view.html',
            controller: 'HotelViewCtrl'
        }).when('/flight', {
            templateUrl: 'views/air/air.search.view.html',
            controller: 'AirViewCtrl'
        }).when('/car', {
            templateUrl: 'views/car/car.search.view.html',
            controller: 'CarViewCtrl'
        }).otherwise({redirectTo: '/hotel'});
    }])
    .controller('AppController', function ($scope, $location) {
        $scope.isActive = function (route) {
            return route === $location.path();
        }
    });
