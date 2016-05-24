'use strict';

angular.module('myApp.airView', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/air', {
            templateUrl: 'views/airView/airView.html',
            controller: 'AirViewCtrl'
        });
    }])

    .controller('AirViewCtrl', [function() {

    }]);