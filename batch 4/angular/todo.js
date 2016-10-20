var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
    $scope.list = [
        { text: 'Learn Angular', done: true }, 
        { text: 'Go home', done: false }
        ];
    $scope.add = function() {
        $scope.list.push({ text: $scope.input, done: false });
        $scope.input = "";
    }
    $scope.remove = function() {
        var tempList = $scope.list;
        $scope.list = [];
        angular.forEach( tempList, function(x){
            if (!x.done) $scope.list.push(x);
        });
    };


});