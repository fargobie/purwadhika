var app = angular.module('routingApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'homeController'
        })
        
        .when('/about', {
            templateUrl: 'about.html',
            controller: 'aboutController'
        })

        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'contactController'
        })

        .otherwise({redirectTo : '/'})
});
app.controller('homeController', function($scope){
    $scope.pageClass = 'page-home';
});
app.controller('aboutController', function($scope){
    $scope.pageClass = 'page-about';
});
app.controller('contactController', function($scope){
    $scope.pageClass = 'page-contact';
});