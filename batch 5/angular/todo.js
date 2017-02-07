var app = angular.module('todoApp', []);
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [{
            todoText: 'Belajar Angular',
            done: false
        },
        {
            todoText: 'Masak',
            done: true
        },
        {
            todoText: 'Lari Pagi',
            done: false
        }
    ];

    $scope.todoAdd = function() {
        $scope.todoList.push({
            todoText: $scope.todoInput,
            done: false
        });
        $scope.todoInput = "";
    };

    $scope.todoDelete = function() {
        $scope.todoList.splice(this.$index, 1);
    };
});