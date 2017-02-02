var app = angular.module('quoteApp', []);
app.controller('quoteController', function($scope) {

    $scope.quotes = [{
            line: "Orang jujur bicaranya sederhana.",
            author: "Mario Teguh"
        }, {
            line: "Sahabat super, jika anda ingin terlihat ganteng, bergaullah dengan orang jelek.",
            author: "Mario Teguh"
        },
        {
            line: "Kejujuran itu mahal. Jangan harapkan kejujuran.",
            author: "Mario Teguh"
        },
        {
            line: "Ketika aku sedang sendiri, saat itu juga aku merasa alone.",
            author: "Mario Teguh"
        },
        {
            line: "Sometimes, hidup itu life.",
            author: "Mario Teguh"
        },
        {
            line: "Kalau tidak ingin ketahuan, jangan lakukan. Kejujuran itu simple.",
            author: "Mario Teguh"
        },
        {
            line: "Jangan cari papa.",
            author: "Mario Teguh"
        }
    ];

    $scope.display = $scope.quotes[Math.floor(Math.random() * $scope.quotes.length)];
    $scope.generate = function() {
        $scope.display = $scope.quotes[Math.floor(Math.random() * $scope.quotes.length)];
    };

});