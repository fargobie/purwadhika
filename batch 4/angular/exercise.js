var app = angular.module("myApp",[]);
app.controller("myController", function($scope){
    var updateClock = function() {
        $scope.time = new Date();
    };
    var timer = setInterval(function () {
        $scope.$apply(updateClock);
    }, 20);
    $scope.fullname = function() {
        return $scope.firstname + " " + $scope.lastname;
    };
    $scope.list = [
        { name: 'Dimas', country: 'Pakistan'},
        { name: 'Kolega', country: 'Indonesia'},
        { name: 'Purwa', country: 'Singapore'}
    ];
    
});