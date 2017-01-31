var app = angular.module("myApp", []);
app.controller('MyController', function($scope, Calculator) {
    $scope.myName = "Purwadhika"
    $scope.greeting = "Selamat Malam"

    var updateClock = function() {
        $scope.clock = new Date();
    }
    var timer = setInterval(function() {
        $scope.$apply(updateClock);
    }, 100);
    updateClock();

    $scope.counter = 0;
    $scope.add = function(amount) {
        $scope.counter = $scope.counter + amount;
    };
    $scope.substract = function(amount) {
        $scope.counter = $scope.counter - amount;
    };

    $scope.friends = [
        { name: 'Budi', address: 'Jalan Suryo' },
        { name: 'Agus', address: 'Jalan Senopati' },
        { name: 'Anto', address: 'Jalan Sudirman' },
        { name: 'Sudirman' },
        { name: 'Rafi' },
        { name: 'Dhani' },
        { name: 'Slamet' }
    ];

    $scope.findSquare = function() {
        $scope.result = Calculator.square($scope.number);
    }
});
app.directive('purwadhikaDirective', function() {
    return {
        template: "<h1>Made by a directive</h1>"
    };
});

app.service('Calculator', function() {
    this.square = function(number) {
        return number * number;
    };
});