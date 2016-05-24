'use strict';

angular.module('myApp.carView', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/car', {
            templateUrl: 'views/carView/carView.html',
            controller: 'CarViewCtrl'
        });
    }])

    .controller('CarViewCtrl', [function() {

    }]);