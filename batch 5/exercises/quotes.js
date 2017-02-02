(function () {

    var app = angular.module('quotesApp', []);

    app.controller('randomQuote', function () {
        this.info = quotes[Math.floor(Math.random() * quotes.length)];
        this.pick = function () {
            this.info = quotes[Math.floor(Math.random() * quotes.length)];
        };
    });

    var quotes = [{
            line: "Jika keduanya saling suka, maka keduanya akan saling usaha. Kalau cuma kamu yang usaha, berarti dia gak suka. Simpel..",
            character: "Mario Teguh"
        },
        {
            line: "Tidak semua cinta harus dilanjutkan.",
            character: "Mario Teguh"
        },
        {
            line: "Sahabat super, jika anda ingin terlihat ganteng, bergaullah dengan orang jelek.",
            character: "Mario Teguh"
        },
        {
            line: "Kejujuran itu mahal. Jangan harapkan kejujuran.",
            character: "Mario Teguh"
        },
        {
            line: "Ketika aku sedang sendiri, saat itu juga aku merasa alone.",
            character: "Mario Teguh"
        },
        {
            line: "Sometimes, hidup itu life.",
            character: "Mario Teguh"
        },
        {
            line: "Kalau tidak ingin ketahuan, jangan lakukan. Kejujuran itu simple.",
            character: "Mario Teguh"
        },
        {
            line: "Jangan cari papa.",
            character: "Mario Teguh"
        },
        {
            line: "Orang jujur bicaranya sederhana.",
            character: "Mario Teguh"
        }
    ];

})();