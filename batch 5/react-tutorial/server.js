var express = require('express');

// Middleware
var app = express();
app.use(express.static('public'));

// Server
app.listen(3000, function() {
  console.log('express server running on port 3000')
})
