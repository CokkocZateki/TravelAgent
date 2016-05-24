'use strict';

angular.module('myApp.hotelView', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/hotel', {
            templateUrl: 'views/hotelView/hotelView.html',
            controller: 'HotelViewCtrl'
        });
    }])

    .controller('HotelViewCtrl', [function() {

    }]);