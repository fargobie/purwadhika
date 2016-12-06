var express = require('express');
var app = express();
var browserify = require('browserify');
import async from 'async';

app.use(express.static(__dirname));

app.get('/', function(req,res){
    res.sendFile('index.html')
});

app.listen('3000', function(){
    console.log('server is running at port 3000');
})
