let clock = angular.module('clock', []);

clock.controller('MainController', function($interval) {
    let controller = this;
    controller.date = new Date();
    $interval(function() {
        controller.date = new Date();
    }, 1000);

    $interval(function() {
        window.location.href = window.location.href + '&rnd=' + Math.random;
    }, 1800000);
    
})