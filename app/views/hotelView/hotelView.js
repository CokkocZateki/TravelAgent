'use strict';

angular.module('myApp.hotelView', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/hotel', {
            templateUrl: 'views/hotelView/hotelSearchView.html',
            controller: 'HotelViewCtrl'
        }).when('/hotel/results', {
            templateUrl: 'views/hotelView/hotelSearchView.html',
            controller: 'HotelViewCtrl'
        });
    }])

    .controller('HotelViewCtrl', [function() {

    }]);