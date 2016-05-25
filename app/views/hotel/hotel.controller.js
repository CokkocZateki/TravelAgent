'use strict';

angular.module('myApp.hotelView', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/hotel', {
            templateUrl: 'views/hotel/hotel.search.view.html',
            controller: 'HotelViewCtrl'
        }).when('/hotel/results', {
            templateUrl: 'views/hotel/hotel.search.view.html',
            controller: 'HotelViewCtrl'
        });
    }])

    .controller('HotelViewCtrl', [function() {

    }]);